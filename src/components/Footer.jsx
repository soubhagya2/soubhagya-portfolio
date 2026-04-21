import React from "react";
import { personalInfo, navLinks } from "../data/mock";
import { Mail, Sparkles, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="glow-blob bg-violet-700 h-[260px] w-[260px] -top-10 left-[30%] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-12">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2"
            >
              <span className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-semibold text-white">
                {personalInfo.name}
              </span>
            </button>
            <p className="mt-4 text-sm text-gray-400 max-w-sm leading-relaxed">
              {personalInfo.title} — building thoughtful interfaces & reliable
              full-stack products.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-violet-400/40"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-violet-400/40"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-violet-400/40"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-gray-500">
              Explore
            </div>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-gray-400 hover:text-white link-reveal"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-gray-500">
              Get in touch
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-4 block text-lg text-white font-medium link-reveal"
            >
              {personalInfo.email}
            </a>
            <div className="mt-1 text-sm text-gray-400">
              {personalInfo.phone}
            </div>
            <div className="mt-1 text-sm text-gray-500">
              {personalInfo.location}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with
            <span className="text-violet-300"> React</span> &
            <span className="text-violet-300"> Tailwind</span>.
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
