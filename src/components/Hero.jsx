import React from "react";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { personalInfo } from "../data/mock";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative section pt-40 md:pt-44">
      {/* Ambient glows */}
      <div className="glow-blob bg-violet-600 h-[420px] w-[420px] -top-20 -left-24" />
      <div className="glow-blob bg-fuchsia-600 h-[380px] w-[380px] top-40 right-0" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              {personalInfo.availability}
              <span className="mx-2 h-3 w-px bg-white/10" />
              <MapPin className="h-3 w-3" /> {personalInfo.location}
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="gradient-text-soft">Hi, I\u2019m </span>
              <span className="gradient-text">{personalInfo.firstName}</span>
              <span className="gradient-text-soft">.</span>
              <br />
              <span className="text-white">I build </span>
              <span className="gradient-text">premium</span>
              <span className="text-white"> web apps.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => scrollTo("projects")}
                className="btn-glow bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 rounded-xl px-6 h-12"
              >
                <Sparkles className="h-4 w-4 mr-2" /> View My Work
              </Button>
              <Button
                onClick={() => scrollTo("contact")}
                variant="outline"
                className="bg-white/[0.02] border-white/15 text-white hover:bg-white/[0.06] hover:text-white rounded-xl px-6 h-12"
              >
                <Mail className="h-4 w-4 mr-2" /> Contact Me
              </Button>
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white link-reveal ml-1"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-violet-400/40 hover:bg-white/[0.05] transition"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-violet-400/40 hover:bg-white/[0.05] transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-violet-400/40 hover:bg-white/[0.05] transition"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="mono text-xs text-gray-500">scroll \u2193</span>
            </div>
          </div>

          {/* Right: Code / profile card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/30 via-fuchsia-600/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative glass-strong rounded-2xl border border-white/10 p-6 floaty">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 mono text-xs text-gray-500">
                    ~ / developer.tsx
                  </span>
                </div>
                <pre className="mono text-[13px] leading-relaxed mt-4 text-gray-300">
                  {`const developer = {
  name: "Soubhagya",
  role: "Full Stack Dev",
  stack: ["React", "Node",
         "MongoDB", "Tailwind"],
  focus: "beautiful UIs",
  status: "building cool things",
  coffee: true,
};

export default developer;`}
                </pre>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {personalInfo.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3"
                    >
                      <div className="text-2xl font-semibold gradient-text-soft">
                        {s.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="mt-20 mx-auto flex flex-col items-center gap-2 text-gray-500 hover:text-white transition"
        >
          <span className="text-xs mono uppercase tracking-widest">
            Discover
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
