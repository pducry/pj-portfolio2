"use client";

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
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: cellGap,
        width: 26,
        height: 20,
      }}
    >
      {Array.from({ length: cells }).map((_, i) => (
        <div key={i} className="rounded-[1px] bg-white/70" />
      ))}
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[11px] font-medium uppercase tracking-wider text-white/50 w-6">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="
          h-[2px] w-24 cursor-pointer appearance-none rounded-full
          bg-white/25
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-[14px]
          [&::-webkit-slider-thumb]:w-[14px]
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:cursor-grab
          [&::-webkit-slider-thumb]:active:cursor-grabbing
          [&::-webkit-slider-thumb]:transition-transform
          [&::-webkit-slider-thumb]:duration-100
          [&::-webkit-slider-thumb]:hover:scale-110
        "
      />
      <span className="w-5 text-right text-[11px] tabular-nums text-white/70">{display}</span>
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
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-4 rounded-full bg-neutral-900 px-5 py-3 shadow-xl ring-1 ring-white/10">
        <MiniGrid columns={columns} gap={gap} />

        <div className="h-4 w-px bg-white/15" />

        <Slider
          label="Col"
          value={columns}
          min={1}
          max={6}
          step={1}
          display={String(columns)}
          onChange={onColumnsChange}
        />

        <div className="h-4 w-px bg-white/15" />

        <Slider
          label="Gap"
          value={gap}
          min={0}
          max={48}
          step={4}
          display={String(gap)}
          onChange={onGapChange}
        />
      </div>
    </div>
  );
}
