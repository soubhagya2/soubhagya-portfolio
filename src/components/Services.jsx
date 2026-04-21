import React from "react";
import { services } from "../data/mock";
import { Code2, Layers, Wand2, ArrowRight } from "lucide-react";

const iconMap = { Code2, Layers, Wand2 };

const Services = () => {
  return (
    <section className="relative section">
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1 text-xs text-violet-300">
              <Wand2 className="h-3 w-3" /> What I do
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Services built for{" "}
              <span className="gradient-text">modern teams</span>.
            </h2>
          </div>
          <p className="max-w-md text-gray-400">
            I help founders and product teams turn ideas into launch-ready web
            apps — without sacrificing craft.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon] || Code2;
            return (
              <div
                key={s.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 glass p-6 card-hover"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="flex items-center justify-between">
                  <span className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 border border-white/10 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mono text-xs text-gray-500">0{idx + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs text-violet-300 link-reveal">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
