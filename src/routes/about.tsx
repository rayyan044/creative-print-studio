import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kara Printing Print Studio" },
      { name: "description", content: "A bilingual print and design studio crafting books, packaging and stationery with care." },
      { property: "og:title", content: "About — Kara Printing" },
      { property: "og:description", content: "The team and craft behind every print run." },
    ],
  }),
  component: AboutPage,
});

const values = [
  ["Bilingual by design", "Fluent in Arabic and English layout, typography and binding."],
  ["End-to-end studio", "Design, print, lamination, die-cut and binding — all in-house."],
  ["Quality without compromise", "Calibrated presses, sharp dies and finishes that hold up."],
  ["Honest deadlines", "We commit only to dates we can deliver."],
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">About us</p>
          <h1 className="mt-2 text-5xl md:text-6xl font-extrabold leading-tight">
            A studio where <span className="text-gradient">ink meets ideas.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Kara Printing is a full-service print and design studio. We design and produce
            books in Arabic and English, package products, prepare confidential exam
            materials and craft the small printed things — invitations, ID cards,
            stickers — that tie a brand together.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            From the first sketch to the last stitch, we obsess over the details so the
            final piece feels intentional in your hands.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {values.map(([title, body]) => (
            <li
              key={title}
              className="rounded-2xl border-2 border-foreground bg-card p-5 shadow-[var(--shadow-pop)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Check className="h-5 w-5 text-coral" />
                <h3 className="font-bold">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
