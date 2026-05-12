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
  const cellGap = Math.max(1, Math.round(gap / 12));
  return (
    <div
      className="grid transition-all duration-300"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: cellGap,
        width: 28,
        height: 20,
      }}
    >
      {Array.from({ length: cells }).map((_, i) => (
        <div
          key={i}
          className="rounded-[1px] bg-foreground/40 transition-all duration-300"
        />
      ))}
    </div>
  );
}

export function GridControls({
  visible,
  columns,
  gap,
  onColumnsChange,
  onGapChange,
}: GridControlsProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <div
        className={`flex items-center overflow-hidden rounded-full border border-border bg-white shadow-sm transition-all duration-500 ease-out ${
          expanded ? "gap-6 px-6 py-3" : "gap-0 px-5 py-3"
        }`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* Mini grid preview — always visible */}
        <div className="flex shrink-0 items-center gap-2.5">
          <MiniGrid columns={columns} gap={gap} />
          <span
            className={`whitespace-nowrap text-sm text-muted transition-all duration-300 ${
              expanded ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}
          >
            {columns} &times; {gap}
          </span>
        </div>

        {/* Sliders — expand on hover */}
        <div
          className={`flex items-center gap-5 overflow-hidden transition-all duration-500 ease-out ${
            expanded
              ? "max-w-[400px] opacity-100"
              : "max-w-0 opacity-0"
          }`}
        >
          <div className="flex shrink-0 items-center gap-2.5">
            <span className="text-sm text-muted">Col</span>
            <input
              type="range"
              min={1}
              max={6}
              step={1}
              value={columns}
              onChange={(e) => onColumnsChange(Number(e.target.value))}
              className="h-[3px] w-20 appearance-none rounded-full bg-muted/20 transition-all [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:hover:scale-125"
            />
            <span className="w-3 text-center text-sm tabular-nums text-foreground">
              {columns}
            </span>
          </div>

          <div className="h-4 w-px bg-border/60" />

          <div className="flex shrink-0 items-center gap-2.5">
            <span className="text-sm text-muted">Gap</span>
            <input
              type="range"
              min={0}
              max={48}
              step={4}
              value={gap}
              onChange={(e) => onGapChange(Number(e.target.value))}
              className="h-[3px] w-20 appearance-none rounded-full bg-muted/20 transition-all [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:hover:scale-125"
            />
            <span className="w-5 text-center text-sm tabular-nums text-foreground">
              {gap}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
