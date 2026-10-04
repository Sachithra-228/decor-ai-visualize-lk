import { CheckCircle2 } from "lucide-react";

export function DesignCard({
  title,
  prompt,
  colors,
  score
}: {
  title: string;
  prompt: string;
  colors: string[];
  score: string;
}) {
  return (
    <article className="overflow-hidden rounded-lg border bg-card shadow-sm">
      <div className="relative aspect-[4/3] bg-muted">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 25% 20%, ${colors[2]} 0 10%, transparent 11%),
            radial-gradient(circle at 75% 70%, ${colors[3]} 0 13%, transparent 14%),
            linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
          }}
        />
        <div className="absolute inset-x-6 top-6 h-5 rounded-full border-2 border-white/70" />
        <div className="absolute inset-x-10 bottom-8 grid grid-cols-5 gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="h-8 rounded-sm bg-white/45 ring-1 ring-white/40" />
          ))}
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold">{title}</h3>
          <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {score}
          </span>
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{prompt}</p>
        <div className="flex gap-2">
          {colors.map((color) => (
            <span
              key={color}
              className="h-7 w-7 rounded-full border"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
