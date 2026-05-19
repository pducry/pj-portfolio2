"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { LayoutGroup, motion, AnimatePresence, useInView } from "framer-motion";
import { asset } from "@/lib/asset";

const images = [
  { src: "/gallery/pj_001.png", alt: "Project" },
  { src: "/gallery/pj_002.png", alt: "Project" },
  { src: "/gallery/pj_003.png", alt: "Project" },
  { src: "/gallery/pj_004.png", alt: "Project" },
  { src: "/gallery/pj_005.png", alt: "Project" },
  { src: "/gallery/pj_006.png", alt: "Project" },
  { src: "/gallery/pj_007.png", alt: "Project" },
  { src: "/gallery/pj_008.png", alt: "Project" },
  { src: "/gallery/pj_009.png", alt: "Project" },
  { src: "/gallery/pj_010.png", alt: "Project" },
  { src: "/gallery/pj_011.png", alt: "Project" },
  { src: "/gallery/pj_012.png", alt: "Project" },
  { src: "/gallery/pj_013.png", alt: "Project" },
  { src: "/gallery/pj_014.png", alt: "Project" },
  { src: "/gallery/pj_015.png", alt: "Project" },
  { src: "/gallery/pj_016.png", alt: "Project" },
  { src: "/gallery/pj_017.png", alt: "Project" },
  { src: "/gallery/pj_018.png", alt: "Project" },
  { src: "/gallery/pj_020.png", alt: "Project" },
  { src: "/gallery/pj_021.png", alt: "Project" },
  { src: "/gallery/pj_023.png", alt: "Project" },
  { src: "/gallery/pj_026.png", alt: "Project" },
  { src: "/gallery/pj_027.png", alt: "Project" },
  { src: "/gallery/pj_028.png", alt: "Project" },
  { src: "/gallery/pj_031.png", alt: "Project" },
  { src: "/gallery/pj_032.png", alt: "Project" },
  { src: "/gallery/pj_033.png", alt: "Project" },
  { src: "/gallery/pj_035.png", alt: "Project" },
  { src: "/gallery/pj_037.png", alt: "Project" },
  { src: "/gallery/pj_039.png", alt: "Project" },
  { src: "/gallery/pj_040.png", alt: "Project" },
  { src: "/gallery/pj_041.png", alt: "Project" },
  { src: "/gallery/pj_044.png", alt: "Project" },
  { src: "/gallery/pj_045.png", alt: "Project" },
  { src: "/gallery/pj_046.png", alt: "Project" },
  { src: "/gallery/pj_048.png", alt: "Project" },
  { src: "/gallery/pj_050.png", alt: "Project" },
  { src: "/gallery/pj_051.png", alt: "Project" },
  { src: "/gallery/pj_052.png", alt: "Project" },
  { src: "/gallery/pj_054.png", alt: "Project" },
  { src: "/gallery/pj_055.png", alt: "Project" },
  { src: "/gallery/pj_056.png", alt: "Project" },
  { src: "/gallery/pj_057.png", alt: "Project" },
  { src: "/gallery/pj_059.png", alt: "Project" },
  { src: "/gallery/pj_060.png", alt: "Project" },
  { src: "/gallery/pj_061.png", alt: "Project" },
  { src: "/gallery/pj_063.png", alt: "Project" },
  { src: "/gallery/pj_064.png", alt: "Project" },
  { src: "/gallery/pj_065.png", alt: "Project" },
  { src: "/gallery/pj_066.png", alt: "Project" },
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
  useEffect(() => {
    setShuffled(shuffle(images));
  }, []);

  const effectiveColumns = columns;
  const effectiveGap = gap;
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
    <section className="px-6 py-16">
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
            style={{ left: cursorPos.x - 13, top: cursorPos.y - 13 }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="pointer-events-none mt-7 flex items-center gap-6 text-[12px] text-white/45">
            <span className="flex items-center gap-2">
              <kbd className="inline-flex items-center justify-center rounded border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[11px] leading-none">←</kbd>
              <kbd className="inline-flex items-center justify-center rounded border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[11px] leading-none">→</kbd>
            </span>
            <kbd className="inline-flex items-center justify-center rounded border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[11px] leading-none">esc</kbd>
            <span className="text-white/30">{selected + 1} / {shuffled.length}</span>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
