"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { asset } from "@/lib/asset";

const images = [
  "/gallery/pj_001.png", "/gallery/pj_002.png", "/gallery/pj_003.png",
  "/gallery/pj_004.png", "/gallery/pj_005.png", "/gallery/pj_006.png",
  "/gallery/pj_007.png", "/gallery/pj_008.png", "/gallery/pj_009.png",
  "/gallery/pj_010.png", "/gallery/pj_011.png", "/gallery/pj_012.png",
  "/gallery/pj_013.png", "/gallery/pj_014.png", "/gallery/pj_015.png",
  "/gallery/pj_016.png", "/gallery/pj_017.png", "/gallery/pj_018.png",
  "/gallery/pj_019.png", "/gallery/pj_020.png", "/gallery/pj_021.png",
  "/gallery/pj_022.png", "/gallery/pj_023.png", "/gallery/pj_025.png",
  "/gallery/pj_026.png", "/gallery/pj_027.png", "/gallery/pj_028.png",
  "/gallery/pj_029.png", "/gallery/pj_030.png", "/gallery/pj_031.png",
  "/gallery/pj_032.png", "/gallery/pj_033.png", "/gallery/pj_034.png",
  "/gallery/pj_035.png", "/gallery/pj_036.png", "/gallery/pj_037.png",
  "/gallery/pj_038.png", "/gallery/pj_039.png", "/gallery/pj_040.png",
  "/gallery/pj_041.png", "/gallery/pj_042.png", "/gallery/pj_043.png",
  "/gallery/pj_044.png", "/gallery/pj_045.png", "/gallery/pj_046.png",
  "/gallery/pj_047.png", "/gallery/pj_048.png", "/gallery/pj_049.png",
  "/gallery/pj_050.png", "/gallery/pj_051.png", "/gallery/pj_052.png",
  "/gallery/pj_053.png", "/gallery/pj_054.png", "/gallery/pj_055.png",
  "/gallery/pj_056.png", "/gallery/pj_057.png", "/gallery/pj_058.png",
  "/gallery/pj_059.png", "/gallery/pj_060.png", "/gallery/pj_061.png",
  "/gallery/pj_062.png", "/gallery/pj_063.png", "/gallery/pj_064.png",
  "/gallery/pj_065.png", "/gallery/pj_066.png",
];

function shuffle(arr: string[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function AutoCarousel() {
  const [list] = useState(() => shuffle(images));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % list.length);
    }, 460);
    return () => clearInterval(id);
  }, [list.length]);

  return (
    <div className="w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={list[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Image
            src={asset(list[index])}
            alt="Project"
            width={1920}
            height={1440}
            className="w-full h-auto object-contain"
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
