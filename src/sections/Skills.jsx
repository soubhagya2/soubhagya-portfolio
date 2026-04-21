import React from "react";
import { skills, skillLevels } from "../data/mock";
import { Code2, Layers, Database, Wrench, Globe, Boxes } from "lucide-react";

const categoryMeta = {
  Languages: { icon: Code2, color: "from-violet-500/20 to-fuchsia-500/10" },
  Frontend: { icon: Layers, color: "from-fuchsia-500/20 to-pink-500/10" },
  Backend: { icon: Boxes, color: "from-indigo-500/20 to-violet-500/10" },
  Databases: { icon: Database, color: "from-sky-500/20 to-violet-500/10" },
  Tools: { icon: Wrench, color: "from-violet-500/20 to-indigo-500/10" },
  Web: { icon: Globe, color: "from-pink-500/20 to-violet-500/10" },
};

const Skills = () => {
  const allChips = Object.values(skills).flat();

  return (
    <section id="skills" className="relative section">
      <div className="glow-blob bg-fuchsia-700 h-[340px] w-[340px] top-20 -left-24" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1 text-xs text-violet-300">
              <Code2 className="h-3 w-3" /> Toolbox
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
              The stack I <span className="gradient-text">ship with</span>.
            </h2>
          </div>
          <p className="max-w-md text-gray-400">
            Battle-tested tools I reach for on almost every project \u2014 from
            bootstrap to production.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {Object.entries(skills).map(([cat, list]) => {
              const meta = categoryMeta[cat] || { icon: Code2, color: "" };
              const Icon = meta.icon;
              return (
                <div
                  key={cat}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${meta.color} p-5 card-hover`}
                >
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
                  <div className="flex items-center gap-2 relative">
                    <span className="h-8 w-8 grid place-items-center rounded-lg bg-white/5 border border-white/10 text-violet-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white">
                      {cat}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 relative">
                    {list.map((s) => (
                      <span
                        key={s}
                        className="mono text-xs px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5">
            <div className="glass-strong rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white font-medium">
                  Proficiency
                </div>
                <div className="text-xs text-gray-500 mono">self-rated</div>
              </div>
              <div className="mt-5 space-y-5">
                {skillLevels.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{s.name}</span>
                      <span className="mono text-violet-300">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee chips */}
        <div className="mt-14 overflow-hidden border-y border-white/10 py-5">
          <div className="flex gap-6 w-max marquee-track">
            {[...allChips, ...allChips].map((c, i) => (
              <span
                key={i}
                className="mono text-sm text-gray-400 whitespace-nowrap"
              >
                <span className="text-violet-400 mr-2">\u25c6</span>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
