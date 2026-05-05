import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-7 w-7 rounded-lg bg-[var(--gradient-hero)]" />
            <span className="font-display font-extrabold text-lg">Pressmark</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Print, design & packaging crafted with care.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@pressmark.example</li>
            <li>+000 000 0000</li>
            <li>123 Print Street</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon – Fri · 9am – 6pm</li>
            <li>Sat · 10am – 2pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pressmark. All rights reserved.
      </div>
    </footer>
  );
}
