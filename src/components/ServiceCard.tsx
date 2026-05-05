import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
  accent: "coral" | "teal" | "marigold" | "ink";
};

const accentMap: Record<Props["accent"], string> = {
  coral: "bg-coral",
  teal: "bg-teal",
  marigold: "bg-marigold",
  ink: "bg-ink",
};

export function ServiceCard({ title, description, icon, accent }: Props) {
  return (
    <article className="group relative rounded-3xl border-2 border-foreground bg-card p-6 shadow-[var(--shadow-pop)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none transition-[var(--transition-bounce)]">
      <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accentMap[accent]} text-primary-foreground`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </article>
  );
}
