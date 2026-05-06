import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import machine1 from "@/assets/machine-1.jpg";
import machine2 from "@/assets/machine-2.jpg";
import productSpiceBox from "@/assets/product-spice-box.jpg";
import productGiftBoxes from "@/assets/product-gift-boxes.jpg";
import productSpiceCollection from "@/assets/product-spice-collection.jpg";
import productMedicineBoxes from "@/assets/product-medicine-boxes.jpg";
import productPaperStack from "@/assets/product-paper-stack.jpg";
import productLabels from "@/assets/product-labels.jpg";
import productIncenseLabels from "@/assets/product-incense-labels.jpg";
import weddingCards from "@/assets/wedding-cards.jpg";

const machines = [
{ src: machine1, label: "Industrial Roll Press" },
{ src: machine2, label: "Offset Printing Press" }];


const products = [
{ src: productSpiceBox, label: "Custom Spice Packaging" },
{ src: weddingCards, label: "Wedding Cards & Invitations" },
{ src: productGiftBoxes, label: "Premium Gift Boxes" },
{ src: productMedicineBoxes, label: "Medicine Boxes" },
{ src: productSpiceCollection, label: "Branded Spice Box Range" },
{ src: productLabels, label: "Decorative Product Labels" },
{ src: productIncenseLabels, label: "Incense & Sleeve Labels" },
{ src: productPaperStack, label: "Premium Paper Stocks" }];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
    { title: "Kara Printing — Print, Design & Packaging Studio" },
    { name: "description", content: "A creative print studio offering books, packaging, exams, lamination, die-cut, binding and card design." }]

  }),
  component: Index
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-soft)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-[var(--shadow-pop)]">
              <span className="h-2 w-2 rounded-full bg-coral" /> Print · Design · Packaging
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[0.95]">
              Ideas that{" "}
              <span className="text-gradient">come off the press</span> beautifully.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              From bilingual books and exam booklets to die-cut packaging and
              wedding invitations — Kara Printing is the studio behind print done
              right.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]">
                
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-6 py-3 font-semibold hover:bg-muted transition">
                
                Request a quote
              </Link>
            </div>

          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-hero)] blur-2xl opacity-30" aria-hidden />
            <img
              src={heroImg}
              alt="Colorful collage of printed books, papers and ink splashes"
              width={1536}
              height={1024}
              className="relative rounded-3xl border-2 border-foreground shadow-[var(--shadow-pop)]" />
            
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-coral">What we do</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold">Eight crafts, one studio.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold underline underline-offset-4 hover:text-coral">
            View all services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((s) =>
          <ServiceCard key={s.title} {...s} />
          )}
        </div>
      </section>

      {/* Our Machines */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">Our equipment</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold">The machines behind the work.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Industrial-grade presses and finishing equipment that power every job.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {machines.map((m) =>
          <figure key={m.label} className="group relative rounded-3xl overflow-hidden border-2 border-foreground shadow-[var(--shadow-pop)]">
              <img src={m.src} alt={m.label} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-ink/80 text-primary-foreground px-5 py-3 text-sm font-semibold">
                {m.label}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Our Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">Our work</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold">Products we've printed.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A small sample of packaging, labels and boxes designed and produced in our studio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) =>
          <figure key={p.label} className="group relative rounded-3xl overflow-hidden border-2 border-foreground bg-card shadow-[var(--shadow-pop)] hover:-translate-y-1 transition">
              <img src={p.src} alt={p.label} className="w-full h-56 object-cover" />
              <figcaption className="px-5 py-3 text-sm font-semibold border-t-2 border-foreground">
                {p.label}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-3xl bg-primary text-primary-foreground p-12 md:p-16 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-coral opacity-30 blur-3xl" aria-hidden />
          <div className="absolute -left-12 -bottom-12 h-64 w-64 rounded-full bg-teal opacity-30 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold">Got a project in mind?</h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Tell us about your book, packaging or print run. We'll get back with a tailored quote.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-marigold text-ink px-6 py-3 font-semibold hover:opacity-90 transition">
              
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>);

}