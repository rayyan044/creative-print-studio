import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pressmark Print Studio" },
      { name: "description", content: "Books, packaging, exams, lamination, die-cut, printing, binding and stationery design." },
      { property: "og:title", content: "Services — Pressmark Print Studio" },
      { property: "og:description", content: "Eight print and design services under one roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">Services</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-extrabold leading-tight">
          Everything print, <span className="text-gradient">beautifully made.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Whether you're publishing a bilingual book, packaging a product, or sending out
          1,000 wedding invitations — we handle every step in-house.
        </p>
      </header>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  );
}
