# GitHub Pages Deploy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar o portfólio no GitHub Pages, com deploy automático via GitHub Actions.

**Architecture:** Um workflow GitHub Actions faz build do Next.js estático e publica o `out/` no GitHub Pages a cada push no `main`. A produção atual é o project site `https://pducry.github.io/pj-portfolio2/` (por exemplo `https://pducry.github.io/pj-portfolio2/works/`). O `basePath` `/pj-portfolio2` em `next.config.ts` faz parte desse endereço. Não criar `public/CNAME` e não apontar `pedrojulien.com` para este repositório sem OK do Pedro: o domínio, em 20 de novembro de 2026, responde pela Squarespace (título `PJ2025`).

**Tech Stack:** Next.js 16 (static export), GitHub Actions, GitHub Pages

---

## File Structure

| Arquivo | Ação | Responsabilidade |
|---------|------|-----------------|
| `.github/workflows/deploy.yml` | Manter | Pipeline CI/CD: build + deploy para GitHub Pages |
| `public/CNAME` | Não criar | Um CNAME de `pedrojulien.com` tiraria o site do path `/pj-portfolio2` |
| `next.config.ts` | Manter | `output: "export"` e, em produção, `basePath` e `assetPrefix` `/pj-portfolio2` |

---

### Task 1: Manter o site no path `/pj-portfolio2`

**Files:**
- Keep: `next.config.ts` (`basePath` e `assetPrefix` `/pj-portfolio2` quando `NODE_ENV` é `production`)
- Do not create: `public/CNAME`

- [x] **Step 1: Confirmar que não existe CNAME**

`public/CNAME` não deve existir. O conteúdo `pedrojulien.com` faria o GitHub Pages publicar o projeto na raiz de um domínio customizado e o endereço `https://pducry.github.io/pj-portfolio2/` deixaria de ser a produção.

- [x] **Step 2: Confirmar o basePath**

Em produção, `basePath` é `/pj-portfolio2` e `assetPrefix` é `/pj-portfolio2/`. `output` continua `"export"`.

Não remover o `basePath` enquanto o site ao vivo for `https://pducry.github.io/pj-portfolio2/`. Sem ele, HTML e assets passam a pedir a raiz de `pducry.github.io` e a página em `/pj-portfolio2/` quebra.

---

### Task 2: Criar GitHub Actions workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Criar diretório e arquivo**

```bash
mkdir -p .github/workflows
```

Criar `.github/workflows/deploy.yml` com o conteúdo abaixo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verificar sintaxe YAML**

```bash
npx js-yaml .github/workflows/deploy.yml
```

Saída esperada: objeto JSON sem erros (ou sem output de erro)

- [ ] **Step 3: Commit e push**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions workflow for GitHub Pages deploy"
git push origin main
```

---

### Task 3: Ativar GitHub Pages no repositório (manual)

Esta task requer ações no navegador — não pode ser automatizada.

- [ ] **Step 1: Acessar Settings do repositório**

Ir para: `https://github.com/pducry/pj-portfolio2/settings/pages`

- [ ] **Step 2: Configurar Source**

Em **Build and deployment → Source**, selecionar **GitHub Actions**

- [ ] **Step 3: Verificar que o workflow rodou com sucesso**

Ir para: `https://github.com/pducry/pj-portfolio2/actions`

Aguardar o workflow "Deploy to GitHub Pages" completar (verde).

- [ ] **Step 4: Verificar URL do GitHub Pages**

Após deploy, o site estará disponível em:
`https://pducry.github.io/pj-portfolio2`

---

### Task 4: Domínio pedrojulien.com — não executar sem OK do Pedro

Esta task não faz parte do deploy atual. O site no ar é `https://pducry.github.io/pj-portfolio2/`. `https://www.pedrojulien.com` responde pela Squarespace com o título `PJ2025` (`www` em `ext-sq.squarespace.com`). Não alterar DNS nem o custom domain do GitHub Pages a partir deste plano.

Para esse domínio passar a mostrar o build de `pj-portfolio2`, o Pedro precisaria autorizar, fora deste PR:

1. Remover o domínio da Squarespace.
2. Apontar o DNS do apex para `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`, e `www` com `CNAME` para `pducry.github.io`.
3. Em `https://github.com/pducry/pj-portfolio2/settings/pages`, salvar o custom domain `pedrojulien.com`.
4. Numa mudança separada de código, criar `public/CNAME` com `pedrojulien.com` e zerar `basePath` e `assetPrefix`, porque o domínio customizado serve o projeto na raiz, não em `/pj-portfolio2`.

Os passos abaixo ficam só como referência histórica. Não executá-los.

- [ ] **Step 1: Acessar painel DNS do domínio**

O domínio `pedrojulien.com` foi registrado via Vercel. Acessar:
`https://vercel.com/dashboard/domains`

- [ ] **Step 2: Remover registros DNS atuais do Vercel**

Remover os registros A e CNAME que apontam para Vercel.

- [ ] **Step 3: Adicionar registros A do GitHub Pages**

Criar 4 registros `A` para o apex (`@`):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

- [ ] **Step 4: Adicionar registro CNAME para www**

Criar registro `CNAME`:
```
www → pducry.github.io
```

- [ ] **Step 5: Configurar domínio no GitHub Pages**

Ir para: `https://github.com/pducry/pj-portfolio2/settings/pages`

No campo **Custom domain**, digitar `pedrojulien.com` e salvar.

Aguardar verificação DNS (pode levar até 24h, geralmente minutos).

- [ ] **Step 6: Verificar site no domínio customizado**

Acessar `https://pedrojulien.com` e confirmar que o site carrega corretamente.

---

## Notas

- O domínio `goforacle.com` também está no Vercel — não alterar seus DNS, apenas os de `pedrojulien.com`
- Vercel pode ser desconectado do projeto `pj-portfolio2` após confirmar que GitHub Pages está funcionando. Isso não move `pedrojulien.com`: o domínio customizado continua fora deste deploy até o Pedro autorizar.
- O workflow inclui `workflow_dispatch` para permitir deploy manual pela UI do GitHub
