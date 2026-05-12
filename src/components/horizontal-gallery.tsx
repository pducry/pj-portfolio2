"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { LayoutGroup, motion, AnimatePresence, useInView } from "framer-motion";
import { asset } from "@/lib/asset";

const images = [
  { src: "/gallery/101.png",         alt: "Project" },
  { src: "/gallery/11b.png",         alt: "Project" },
  { src: "/gallery/125.png",         alt: "Project" },
  { src: "/gallery/128.png",         alt: "Project" },
  { src: "/gallery/129.png",         alt: "Project" },
  { src: "/gallery/131.png",         alt: "Project" },
  { src: "/gallery/132.png",         alt: "Project" },
  { src: "/gallery/133.png",         alt: "Project" },
  { src: "/gallery/135.png",         alt: "Project" },
  { src: "/gallery/13b.png",         alt: "Project" },
  { src: "/gallery/17.png",          alt: "Project" },
  { src: "/gallery/19.png",          alt: "Project" },
  { src: "/gallery/2.png",           alt: "Project" },
  { src: "/gallery/41.png",          alt: "Project" },
  { src: "/gallery/46.png",          alt: "Project" },
  { src: "/gallery/47.png",          alt: "Project" },
  { src: "/gallery/5.png",           alt: "Project" },
  { src: "/gallery/56.png",          alt: "Project" },
  { src: "/gallery/61.png",          alt: "Project" },
  { src: "/gallery/62.png",          alt: "Project" },
  { src: "/gallery/96c.png",         alt: "Project" },
  { src: "/gallery/Artas01-1.png",   alt: "Artas" },
  { src: "/gallery/Artas01.png",     alt: "Artas" },
  { src: "/gallery/Cisco-02.png",    alt: "Cisco" },
  { src: "/gallery/FFForma1.png",    alt: "FFForma" },
  { src: "/gallery/FFForma10.png",   alt: "FFForma" },
  { src: "/gallery/FFForma11-1.png", alt: "FFForma" },
  { src: "/gallery/FFForma11.png",   alt: "FFForma" },
  { src: "/gallery/FFForma12.png",   alt: "FFForma" },
  { src: "/gallery/FFForma18.png",   alt: "FFForma" },
  { src: "/gallery/FFForma22.png",   alt: "FFForma" },
  { src: "/gallery/FFForma22b.png",  alt: "FFForma" },
  { src: "/gallery/FFForma23.png",   alt: "FFForma" },
  { src: "/gallery/FFForma25.png",   alt: "FFForma" },
  { src: "/gallery/FFForma27.png",   alt: "FFForma" },
  { src: "/gallery/FFForma28.png",   alt: "FFForma" },
  { src: "/gallery/FFForma29.png",   alt: "FFForma" },
  { src: "/gallery/FFForma30.png",   alt: "FFForma" },
  { src: "/gallery/FFForma31.png",   alt: "FFForma" },
  { src: "/gallery/FFForma32.png",   alt: "FFForma" },
  { src: "/gallery/FFForma33.png",   alt: "FFForma" },
  { src: "/gallery/FFForma34.png",   alt: "FFForma" },
  { src: "/gallery/FFForma34b.png",  alt: "FFForma" },
  { src: "/gallery/FFForma35.png",   alt: "FFForma" },
  { src: "/gallery/FFForma3b.png",   alt: "FFForma" },
  { src: "/gallery/FFForma51.png",   alt: "FFForma" },
  { src: "/gallery/FFForma53.png",   alt: "FFForma" },
  { src: "/gallery/FFForma54.png",   alt: "FFForma" },
  { src: "/gallery/FFForma55.png",   alt: "FFForma" },
  { src: "/gallery/FFForma56.png",   alt: "FFForma" },
  { src: "/gallery/FFForma57.png",   alt: "FFForma" },
  { src: "/gallery/FFForma59.png",   alt: "FFForma" },
  { src: "/gallery/FFForma60.png",   alt: "FFForma" },
  { src: "/gallery/FFForma7.png",    alt: "FFForma" },
  { src: "/gallery/MPCraft61.png",   alt: "MP Craft" },
  { src: "/gallery/MPCraft7.png",    alt: "MP Craft" },
  { src: "/gallery/Mude5.png",       alt: "Mude" },
  { src: "/gallery/Mude6.png",       alt: "Mude" },
  { src: "/gallery/Mudethumb.png",   alt: "Mude" },
  { src: "/gallery/Myphone2.png",    alt: "Mobile" },
  { src: "/gallery/Myphone3.png",    alt: "Mobile" },
  { src: "/gallery/Myphone5.png",    alt: "Mobile" },
  { src: "/gallery/Myphonethumb.png",alt: "Mobile" },
  { src: "/gallery/combustion1.png", alt: "Combustion" },
  { src: "/gallery/combustion6.png", alt: "Combustion" },
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
        duration: 0.54,
        ease: [0.25, 1, 0.5, 1],
        delay: colIndex * 0.08,
        layout: { duration: 0.54, ease: [0.25, 1, 0.5, 1] },
      }}
    >
      <Image
        src={asset(img.src)}
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
  const [autoIndex, setAutoIndex] = useState(0);

  useEffect(() => {
    setShuffled(shuffle(images));
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-play infinito no mobile
  useEffect(() => {
    if (!isMobile || shuffled.length === 0) return;
    const id = setInterval(() => {
      setAutoIndex(i => (i + 1) % shuffled.length);
    }, 460);
    return () => clearInterval(id);
  }, [isMobile, shuffled.length]);

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

  // Mobile: auto-play slideshow
  if (isMobile) {
    return (
      <section className="py-8">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={shuffled[autoIndex]?.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {shuffled[autoIndex] && (
                <Image
                  src={asset(shuffled[autoIndex].src)}
                  alt={shuffled[autoIndex].alt}
                  width={1920}
                  height={1440}
                  className="w-full h-auto object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  }

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
          transition={{ duration: 0.54, ease: [0.25, 1, 0.5, 1] }}
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
              src={asset(shuffled[selected].src)}
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
