export function MetricCard({
  label,
  value,
  note,
  change
}: {
  label: string;
  value: string;
  note?: string;
  change?: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p className="text-3xl font-bold">{value}</p>
        {change && <span className="rounded-md bg-accent/20 px-2 py-1 text-sm font-semibold">{change}</span>}
      </div>
      {note && <p className="mt-2 text-sm text-muted-foreground">{note}</p>}
    </div>
  );
}
