/* Grid-hosted storage for Brújula MP. Grid injects window.GRID into HTML. */
(function () {
  const AXES = new Set(['movimiento', 'crecimiento', 'seguridad', 'valueprops']);
  const TYPES = { 'image/jpeg': ['jpg', 'jpeg'], 'image/png': ['png'], 'image/webp': ['webp'] };
  const MAX_BYTES = 10 * 1024 * 1024;
  let userBucketPromise;

  function sdk() {
    if (!window.GRID?.states) throw new Error('grid-storage-unavailable');
    return window.GRID.states;
  }

  async function userBucket() {
    if (!userBucketPromise) userBucketPromise = fetch('/api/v1/me', { credentials: 'include' })
      .then(async response => {
        if (!response.ok) throw new Error('grid-identity-unavailable');
        const user = await response.json();
        const id = String(user.caller_id || user.ldap || '').trim();
        if (!id) throw new Error('grid-identity-unavailable');
        return 'brujula-user-' + Array.from(new TextEncoder().encode(id),
          byte => byte.toString(16).padStart(2, '0')).join('');
      });
    return userBucketPromise;
  }

  async function userState() {
    const bucket = await userBucket();
    return (await sdk().get(bucket)).state || {};
  }

  function imageDimensions(file) {
    const url = URL.createObjectURL(file);
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => { URL.revokeObjectURL(url); resolve({ w: image.naturalWidth, h: image.naturalHeight }); };
      image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('invalid-image')); };
      image.src = url;
    });
  }

  async function validateFile(file) {
    const extension = file.name.split('.').pop().toLowerCase();
    if (!TYPES[file.type]?.includes(extension)) throw new Error('invalid-format');
    if (!file.size || file.size > MAX_BYTES) throw new Error('invalid-size');
    const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
    const png = file.type === 'image/png' && [137, 80, 78, 71, 13, 10, 26, 10].every((v, i) => bytes[i] === v);
    const jpeg = file.type === 'image/jpeg' && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
    const webp = file.type === 'image/webp' && String.fromCharCode(...bytes.slice(0, 4)) === 'RIFF' &&
      String.fromCharCode(...bytes.slice(8, 12)) === 'WEBP';
    if (!png && !jpeg && !webp) throw new Error('invalid-format');
    const dimensions = await imageDimensions(file);
    if (!dimensions.w || !dimensions.h || dimensions.w > 10000 || dimensions.h > 10000 ||
        dimensions.w * dimensions.h > 40000000) throw new Error('invalid-image');
    return dimensions;
  }

  function dataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error('storage-write-failed'));
      reader.readAsDataURL(file);
    });
  }

  function toReference(record) {
    return { id: record.id, name: record.name, prompt: record.prompt, src: record.src,
      type: 'image', axis: record.axis, tags: [], palette: 'neutral', w: record.w, h: record.h,
      dr: `${record.w}/${record.h}`, local: true };
  }

  async function loadImages() {
    const records = (await sdk().get('brujula-images')).state || {};
    return Object.values(records).filter(record => record && AXES.has(record.axis) &&
      typeof record.src === 'string' && record.src.startsWith('data:image/') &&
      Number.isInteger(record.w) && Number.isInteger(record.h)).map(toReference);
  }

  async function saveImages(files, axis, prompts) {
    if (!AXES.has(axis)) throw new Error('invalid-axis');
    if (!files.length || files.length > 10) throw new Error('invalid-count');
    if (!Array.isArray(prompts) || prompts.length !== files.length ||
        prompts.some(p => typeof p !== 'string' || !p.trim() || p.trim().length > 4000))
      throw new Error('invalid-prompt');
    const references = [];
    for (const [index, file] of files.entries()) {
      const { w, h } = await validateFile(file);
      const record = { id: `local-${crypto.randomUUID()}`, name: file.name.slice(0, 100),
        prompt: prompts[index].trim(), axis, w, h, src: await dataUrl(file), createdAt: Date.now() };
      await sdk().patch('brujula-images', { [record.id]: record });
      references.push(toReference(record));
    }
    return references;
  }

  function normalizeBoard(board, validIds) {
    if (!board || typeof board.id !== 'string' || !board.id.startsWith('board-') ||
        typeof board.name !== 'string') return null;
    const name = board.name.trim().slice(0, 80);
    if (!name) return null;
    return { id: board.id, name,
      description: typeof board.description === 'string' ? board.description.trim().slice(0, 300) : '',
      imageIds: Array.isArray(board.imageIds) ? [...new Set(board.imageIds.filter(id =>
        typeof id === 'string' && validIds.has(id)))].slice(0, 500) : [],
      createdAt: Number.isFinite(board.createdAt) ? board.createdAt : Date.now(),
      updatedAt: Number.isFinite(board.updatedAt) ? board.updatedAt : Date.now() };
  }

  async function loadBoards(validIds) {
    const boards = (await userState()).boards || [];
    if (!Array.isArray(boards)) throw new Error('boards-corrupt');
    return boards.map(board => normalizeBoard(board, validIds)).filter(Boolean).slice(0, 100);
  }

  async function saveBoards(boards, validIds) {
    if (!Array.isArray(boards) || boards.length > 100) throw new Error('boards-limit');
    const normalized = boards.map(board => normalizeBoard(board, validIds));
    if (normalized.some(board => !board)) throw new Error('boards-invalid');
    await sdk().patch(await userBucket(), { boards: normalized });
    return normalized;
  }

  async function loadOrder() {
    const order = (await userState()).order;
    return Array.isArray(order) ? order : null;
  }

  async function saveOrder(order) {
    if (!Array.isArray(order)) throw new Error('invalid-order');
    await sdk().patch(await userBucket(), { order });
  }

  window.BrujulaLocalImages = { load: loadImages, save: saveImages };
  window.BrujulaBoards = { load: loadBoards, save: saveBoards };
  window.BrujulaGridOrder = { load: loadOrder, save: saveOrder };
})();
