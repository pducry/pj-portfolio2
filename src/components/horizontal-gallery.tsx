"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { LayoutGroup, motion, AnimatePresence, useInView } from "framer-motion";

const images = [
  { src: "/gallery/2.png", alt: "Project 1" },
  { src: "/gallery/3b.png", alt: "Project 2" },
  { src: "/gallery/11.png", alt: "Project 3" },
  { src: "/gallery/11b.png", alt: "Project 4" },
  { src: "/gallery/12.png", alt: "Project 5" },
  { src: "/gallery/13b.png", alt: "Project 6" },
  { src: "/gallery/15b.png", alt: "Project 7" },
  { src: "/gallery/19.png", alt: "Project 8" },
  { src: "/gallery/21.png", alt: "Project 9" },
  { src: "/gallery/23.png", alt: "Project 10" },
  { src: "/gallery/27.png", alt: "Project 11" },
  { src: "/gallery/31.png", alt: "Project 12" },
  { src: "/gallery/41.png", alt: "Project 13" },
  { src: "/gallery/43.png", alt: "Project 14" },
  { src: "/gallery/47.png", alt: "Project 15" },
  { src: "/gallery/50b.png", alt: "Project 16" },
  { src: "/gallery/51.png", alt: "Project 17" },
  { src: "/gallery/56.png", alt: "Project 18" },
  { src: "/gallery/61.png", alt: "Project 19" },
  { src: "/gallery/62.png", alt: "Project 20" },
  { src: "/gallery/63b.png", alt: "Project 22" },
  { src: "/gallery/64.png", alt: "Project 23" },
  { src: "/gallery/65.png", alt: "Project 24" },
  { src: "/gallery/66.png", alt: "Project 25" },
  { src: "/gallery/67.png", alt: "Project 26" },
  { src: "/gallery/68.png", alt: "Project 27" },
  { src: "/gallery/69.png", alt: "Project 28" },
  { src: "/gallery/71.png", alt: "Project 30" },
  { src: "/gallery/72.png", alt: "Project 31" },
  { src: "/gallery/73.png", alt: "Project 32" },
  { src: "/gallery/74.png", alt: "Project 33" },
  { src: "/gallery/75.png", alt: "Project 34" },
  { src: "/gallery/76b.png", alt: "Project 35" },
  { src: "/gallery/78.png", alt: "Project 36" },
  { src: "/gallery/79.png", alt: "Project 37" },
  { src: "/gallery/80.png", alt: "Project 38" },
  { src: "/gallery/81.png", alt: "Project 39" },
  { src: "/gallery/82.png", alt: "Project 40" },
  { src: "/gallery/83.png", alt: "Project 41" },
  { src: "/gallery/84.png", alt: "Project 42" },
  { src: "/gallery/85.png", alt: "Project 43" },
  { src: "/gallery/86.png", alt: "Project 44" },
  { src: "/gallery/87.png", alt: "Project 45" },
  { src: "/gallery/88.png", alt: "Project 46" },
  { src: "/gallery/89.png", alt: "Project 47" },
  { src: "/gallery/93.png", alt: "Project 48" },
  { src: "/gallery/94.png", alt: "Project 49" },
  { src: "/gallery/95.png", alt: "Project 50" },
  { src: "/gallery/96c.png", alt: "Project 51" },
  { src: "/gallery/97.png", alt: "Project 52" },
  { src: "/gallery/98.png", alt: "Project 53" },
  { src: "/gallery/99c.png", alt: "Project 54" },
  { src: "/gallery/100.png", alt: "Project 55" },
  { src: "/gallery/101.png", alt: "Project 56" },
  { src: "/gallery/102.png", alt: "Project 57" },
  { src: "/gallery/103.png", alt: "Project 58" },
  { src: "/gallery/104.png", alt: "Project 59" },
  { src: "/gallery/105.png", alt: "Project 60" },
  { src: "/gallery/126.png", alt: "Project 61" },
  { src: "/gallery/127.png", alt: "Project 62" },
  { src: "/gallery/128.png", alt: "Project 63" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function GalleryItem({
  img,
  index,
  columns,
  onClick,
}: {
  img: { src: string; alt: string };
  index: number;
  columns: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const colIndex = index % columns;

  return (
    <motion.div
      ref={ref}
      key={img.src}
      layout
      layoutId={img.src}
      className="group overflow-hidden cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
        delay: colIndex * 0.08,
        layout: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={1920}
        height={1440}
        className="w-full h-auto object-contain"
        sizes={`(max-width: 640px) 100vw, ${Math.round(100 / columns)}vw`}
      />
    </motion.div>
  );
}

interface HorizontalGalleryProps {
  columns?: number;
  gap?: number;
}

export function HorizontalGallery({ columns = 3, gap = 12 }: HorizontalGalleryProps) {
  const [shuffled, setShuffled] = useState(images);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setShuffled(shuffle(images));
  }, []);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorSide, setCursorSide] = useState<"left" | "right">("right");
  const [onImage, setOnImage] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(
    () => setSelected((s) => (s !== null ? (s - 1 + shuffled.length) % shuffled.length : null)),
    [shuffled],
  );
  const next = useCallback(
    () => setSelected((s) => (s !== null ? (s + 1) % shuffled.length : null)),
    [shuffled],
  );

  useEffect(() => {
    if (selected !== null) {
      document.body.setAttribute("data-lightbox-open", "");
    } else {
      document.body.removeAttribute("data-lightbox-open");
    }
    return () => document.body.removeAttribute("data-lightbox-open");
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selected, close, prev, next]);

  return (
    <section className="px-8 py-16 md:px-12 lg:px-20">
      <LayoutGroup>
        <motion.div
          layout
          className="grid items-center"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
          }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          {shuffled.map((img, i) => (
            <GalleryItem
              key={img.src}
              img={img}
              index={i}
              columns={columns}
              onClick={() => setSelected(i)}
            />
          ))}
        </motion.div>
      </LayoutGroup>

      {/* Lightbox */}
      <AnimatePresence>
      {selected !== null && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm cursor-none select-none"
          onMouseDown={(e) => e.preventDefault()}
          onMouseMove={(e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
            setCursorSide(e.clientX < window.innerWidth / 2 ? "left" : "right");
            if (imageRef.current) {
              const rect = imageRef.current.getBoundingClientRect();
              setOnImage(
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom
              );
            }
          }}
          onClick={(e) => {
            if (imageRef.current) {
              const rect = imageRef.current.getBoundingClientRect();
              const isOver =
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom;
              if (isOver) {
                if (e.clientX < window.innerWidth / 2) prev();
                else next();
                return;
              }
            }
            close();
          }}
        >
          {/* Custom cursor */}
          <div
            className="pointer-events-none fixed z-[60]"
            style={{ left: cursorPos.x - 16, top: cursorPos.y - 16 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {onImage ? (
                cursorSide === "left"
                  ? <polyline points="15 18 9 12 15 6" />
                  : <polyline points="9 6 15 12 9 18" />
              ) : (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              )}
            </svg>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="pointer-events-none flex items-center justify-center"
            style={{ maxWidth: "90vw", maxHeight: "80vh" }}
          >
            <Image
              src={shuffled[selected].src}
              alt={shuffled[selected].alt}
              width={1600}
              height={1200}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
              sizes="90vw"
              priority
              draggable={false}
            />
          </div>

          {/* Hint bar */}
          <div className="pointer-events-none mt-8 flex items-center gap-8 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <kbd className="inline-flex items-center justify-center rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-xs leading-none">←</kbd>
              <kbd className="inline-flex items-center justify-center rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-xs leading-none">→</kbd>
              <span className="ml-1">navigate</span>
            </span>
            <span className="flex items-center gap-2">
              <kbd className="inline-flex items-center justify-center rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-xs leading-none">esc</kbd>
              <span className="ml-1">close</span>
            </span>
            <span className="text-white/30">
              {selected + 1} / {shuffled.length}
            </span>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
