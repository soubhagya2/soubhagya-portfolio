import React, { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks, personalInfo } from "../data/mock";
import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "glass-strong border-white/10"
              : "border-white/5 bg-white/[0.02] backdrop-blur-md"
          }`}
        >
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 group"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-tight text-white">
              {personalInfo.firstName}
              <span className="text-violet-400">.</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative px-4 py-2 text-sm transition-colors ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {active === link.id && (
                  <span className="absolute inset-0 rounded-lg bg-white/5 border border-white/10" />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => handleNav("contact")}
              className="btn-glow bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 rounded-xl px-5"
            >
              Let\u2019s Talk
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 glass-strong rounded-2xl border border-white/10 p-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("contact")}
              className="w-full mt-2 btn-glow bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 rounded-xl"
            >
              Let\u2019s Talk
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
