export function ProgressBar({ label, value, valueLabel }: { label: string; value: number; valueLabel?: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="body-sm font-medium text-text">{label}</span>
        <span className="body-sm font-bold text-primary">{valueLabel ?? `${value}%`}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-offwhite" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
        <div
          className="h-full rounded-full bg-gradient-to-l from-primary-soft to-primary transition-[width] duration-700"
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}
