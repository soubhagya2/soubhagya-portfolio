import React from "react";
import { experience } from "../data/mock";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative section">
      <div className="glow-blob bg-indigo-700 h-[320px] w-[320px] top-16 left-[55%]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1 text-xs text-violet-300">
            <Briefcase className="h-3 w-3" /> Experience
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Where I’ve <span className="gradient-text">been building</span>.
          </h2>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experience.map((e, idx) => (
              <div key={idx} className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-2 h-8 w-8 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-[1px]">
                  <div className="h-full w-full rounded-[11px] bg-[#0b0b15] grid place-items-center">
                    <Briefcase className="h-4 w-4 text-violet-300" />
                  </div>
                </div>

                <div className="glass rounded-2xl border border-white/10 p-6 card-hover">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {e.role}
                      </h3>
                      <div className="mt-1 text-violet-300 text-sm">
                        {e.company}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mono">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" /> {e.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {e.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
