import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
    { title: "Contact — Kara Printing Print Studio" },
    { name: "description", content: "Get in touch for quotes on books, packaging, printing, lamination, die-cut and design." },
    { property: "og:title", content: "Contact — Kara Printing" },
    { property: "og:description", content: "Request a quote or visit the studio." }]

  }),
  component: ContactPage
});

const info = [
{ icon: Mail, label: "Email", value: "arafakhamis93@gmail.com" },
{ icon: Phone, label: "Phone", value: "0754 054 910" },
{ icon: MapPin, label: "Studio", value: "Kariakoo – Makonde" },
{ icon: Clock, label: "Hours", value: "Mon–Fri · 9–6 · Sat 10–2" }];


function ContactPage() {
  const [sending, setSending] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      e.target.reset();
      toast.success("Thanks! We'll get back to you within one business day.");
    }, 600);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <Toaster richColors position="top-center" />
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-marigold">Contact</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-extrabold leading-tight">
          Let's print <span className="text-gradient">something great.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Tell us about your project — formats, quantity, deadline. We reply within one business day.
        </p>
      </header>

      <div className="mt-14 grid lg:grid-cols-5 gap-10">
        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-3xl border-2 border-foreground bg-card p-8 shadow-[var(--shadow-pop)] space-y-5">
          
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="text-sm font-semibold mb-2 block">Project details</label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-xl border-2 border-foreground bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral" />
            
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition disabled:opacity-50">
            
            {sending ? "Sending..." : "Send message"}
          </button>
        </form>

        <aside className="lg:col-span-2 space-y-4">
          {info.map(({ icon: Icon, label, value }) =>
          <div
            key={label}
            className="flex items-start gap-4 rounded-2xl border-2 border-foreground bg-card p-5 shadow-[var(--shadow-pop)]">
            
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal text-primary-foreground shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</p>
                <p className="mt-1 font-medium">{value}</p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>);

}

function Field({
  label, name, type = "text", required
}) {
  return (
    <div>
      <label className="text-sm font-semibold mb-2 block">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border-2 border-foreground bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral" />
      
    </div>);

}