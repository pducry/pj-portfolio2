"use client";

import { useState } from "react";

interface GridControlsProps {
  visible: boolean;
  columns: number;
  gap: number;
  onColumnsChange: (v: number) => void;
  onGapChange: (v: number) => void;
}

function MiniGrid({ columns, gap }: { columns: number; gap: number }) {
  const cells = columns * 2;
  const cellGap = Math.max(1, Math.round(gap / 10));
  return (
    <div
      className="grid shrink-0"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: cellGap, width: 28, height: 22 }}
    >
      {Array.from({ length: cells }).map((_, i) => (
        <div key={i} className="rounded-[1px] bg-white/80" />
      ))}
    </div>
  );
}

export function GridControls({ visible, columns, gap, onColumnsChange, onGapChange }: GridControlsProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div
        className="flex items-center gap-[12px] rounded-full bg-neutral-900 px-[18px] py-[12px] shadow-xl ring-1 ring-white/10"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* Always visible: mini grid preview */}
        <MiniGrid columns={columns} gap={gap} />

        {/* Collapsed label */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: expanded ? "0fr" : "1fr",
            transition: "grid-template-columns 280ms ease",
          }}
        >
          <div className="overflow-hidden">
            <span className="text-[13px] tabular-nums text-white/40 whitespace-nowrap pl-[4px] pr-[6px]">
              {columns} · {gap}
            </span>
          </div>
        </div>

        {/* Expanded controls */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: expanded ? "1fr" : "0fr",
            transition: "grid-template-columns 280ms ease",
          }}
        >
          <div className="overflow-hidden">
            <div className="flex items-center gap-[18px] pl-[4px] pr-[4px]">
              <div className="h-[18px] w-px bg-white/15 shrink-0" />

              {/* Col slider */}
              <div className="flex items-center gap-[12px] shrink-0">
                <span className="text-[13px] font-medium uppercase tracking-wide text-white/50">Col</span>
                <input
                  type="range"
                  min={1} max={6} step={1}
                  value={columns}
                  onChange={(e) => onColumnsChange(Number(e.target.value))}
                  className="h-[2px] w-[96px] cursor-pointer appearance-none rounded-full bg-white/25
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[13px]
                    [&::-webkit-slider-thumb]:w-[13px] [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing
                    [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-100
                    [&::-webkit-slider-thumb]:hover:scale-110"
                />
                <span className="w-[16px] text-right text-[13px] tabular-nums text-white/70">{columns}</span>
              </div>

              <div className="h-[18px] w-px bg-white/15 shrink-0" />

              {/* Gap slider */}
              <div className="flex items-center gap-[12px] shrink-0">
                <span className="text-[13px] font-medium uppercase tracking-wide text-white/50">Gap</span>
                <input
                  type="range"
                  min={0} max={48} step={4}
                  value={gap}
                  onChange={(e) => onGapChange(Number(e.target.value))}
                  className="h-[2px] w-[96px] cursor-pointer appearance-none rounded-full bg-white/25
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[13px]
                    [&::-webkit-slider-thumb]:w-[13px] [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing
                    [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-100
                    [&::-webkit-slider-thumb]:hover:scale-110"
                />
                <span className="w-[22px] text-right text-[13px] tabular-nums text-white/70">{gap}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
