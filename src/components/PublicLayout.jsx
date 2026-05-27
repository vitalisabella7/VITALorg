import { Outlet, Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X, Lock } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/announcements", label: "Announcements" },
  { to: "/resources", label: "Resources" },
  { to: "/schedule", label: "Schedule" },
  { to: "/journey", label: "Our Journey" },
  { to: "/apply", label: "Apply" },
];

export default function PublicLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Leaf className="h-6 w-6" /> VITAL
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === l.to ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground hover:bg-accent"}`}>
                {l.label}
              </Link>
            ))}
            <Link to="/admin-login" className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
              <Lock className="h-3.5 w-3.5" /> Admin
            </Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-border px-4 pb-4 pt-2 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === l.to ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground hover:bg-accent"}`}>
                {l.label}
              </Link>
            ))}
            <Link to="/admin-login" onClick={() => setOpen(false)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
              <Lock className="h-3.5 w-3.5" /> Admin
            </Link>
          </nav>
        )}
      </header>
      <main className="flex-1"><Outlet /></main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} VITAL. All rights reserved.</p>
      </footer>
    </div>
  );
}