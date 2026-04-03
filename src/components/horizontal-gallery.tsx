"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { LayoutGroup, motion, AnimatePresence, useInView } from "framer-motion";

const images = [
  { src: "/gallery/1a.png", alt: "1a" },
  { src: "/gallery/1m.png", alt: "1m" },
  { src: "/gallery/1q.png", alt: "1q" },
  { src: "/gallery/1w.png", alt: "1w" },
  { src: "/gallery/1x.png", alt: "1x" },
  { src: "/gallery/2a.png", alt: "2a" },
  { src: "/gallery/2e.png", alt: "2e" },
  { src: "/gallery/2m.png", alt: "2m" },
  { src: "/gallery/2p.png", alt: "2p" },
  { src: "/gallery/2q.png", alt: "2q" },
  { src: "/gallery/2w.png", alt: "2w" },
  { src: "/gallery/2x.png", alt: "2x" },
  { src: "/gallery/3a.png", alt: "3a" },
  { src: "/gallery/3e.png", alt: "3e" },
  { src: "/gallery/3m.png", alt: "3m" },
  { src: "/gallery/3p.png", alt: "3p" },
  { src: "/gallery/3w.png", alt: "3w" },
  { src: "/gallery/3x.png", alt: "3x" },
  { src: "/gallery/4a.png", alt: "4a" },
  { src: "/gallery/4e.png", alt: "4e" },
  { src: "/gallery/4m.png", alt: "4m" },
  { src: "/gallery/4p.png", alt: "4p" },
  { src: "/gallery/4q.png", alt: "4q" },
  { src: "/gallery/4w.png", alt: "4w" },
  { src: "/gallery/4x.png", alt: "4x" },
  { src: "/gallery/5a.png", alt: "5a" },
  { src: "/gallery/5e.png", alt: "5e" },
  { src: "/gallery/5m.png", alt: "5m" },
  { src: "/gallery/5q.png", alt: "5q" },
  { src: "/gallery/5w.png", alt: "5w" },
  { src: "/gallery/5x.png", alt: "5x" },
  { src: "/gallery/6a.png", alt: "6a" },
  { src: "/gallery/6e.png", alt: "6e" },
  { src: "/gallery/6p.png", alt: "6p" },
  { src: "/gallery/6q.png", alt: "6q" },
  { src: "/gallery/6w.png", alt: "6w" },
  { src: "/gallery/6x.png", alt: "6x" },
  { src: "/gallery/7e.png", alt: "7e" },
  { src: "/gallery/7m.png", alt: "7m" },
  { src: "/gallery/7p.png", alt: "7p" },
  { src: "/gallery/7q.png", alt: "7q" },
  { src: "/gallery/7w.png", alt: "7w" },
  { src: "/gallery/7x.png", alt: "7x" },
  { src: "/gallery/8a.png", alt: "8a" },
  { src: "/gallery/8e.png", alt: "8e" },
  { src: "/gallery/8m.png", alt: "8m" },
  { src: "/gallery/8w.png", alt: "8w" },
  { src: "/gallery/8x.png", alt: "8x" },
  { src: "/gallery/9a.png", alt: "9a" },
  { src: "/gallery/9e.png", alt: "9e" },
  { src: "/gallery/9m.png", alt: "9m" },
  { src: "/gallery/9p.png", alt: "9p" },
  { src: "/gallery/9w.png", alt: "9w" },
  { src: "/gallery/9x.png", alt: "9x" },
  { src: "/gallery/108.png", alt: "108" },
  { src: "/gallery/111.png", alt: "111" },
  { src: "/gallery/112.png", alt: "112" },
  { src: "/gallery/114.png", alt: "114" },
  { src: "/gallery/0222c.jpg", alt: "Wave — poster design" },
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setShuffled(shuffle(images));
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const effectiveColumns = isMobile ? 1 : columns;
  const effectiveGap = isMobile ? 16 : gap;
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
            gridTemplateColumns: `repeat(${effectiveColumns}, 1fr)`,
            gap: `${effectiveGap}px`,
          }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          {shuffled.map((img, i) => (
            <GalleryItem
              key={img.src}
              img={img}
              index={i}
              columns={effectiveColumns}
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
