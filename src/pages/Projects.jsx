import React, { useState } from "react";
import { projects } from "../data/mock";
import { ExternalLink, ArrowUpRight, Star } from "lucide-react";
import { Github } from "../components/Icons";
import { Button } from "../components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="relative section">
      <div className="glow-blob bg-violet-700 h-[360px] w-[360px] top-40 right-0" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1 text-xs text-violet-300">
              <Star className="h-3 w-3" /> Selected work
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Projects that <span className="gradient-text">shipped</span>.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {[
              { id: "all", label: "All" },
              { id: "featured", label: "Featured" },
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setFilter(b.id)}
                className={`px-4 py-2 text-xs rounded-lg border transition ${
                  filter === b.id
                    ? "bg-violet-500/15 border-violet-400/40 text-white"
                    : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {filtered.map((p, idx) => (
            <article
              key={p.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 glass card-hover ${
                idx === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`${
                  idx === 0 ? "grid md:grid-cols-5 gap-0" : "flex flex-col"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    idx === 0 ? "md:col-span-3" : ""
                  }`}
                >
                  <div className="aspect-[16/10] md:aspect-auto md:h-full bg-black">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b15] via-[#0b0b15]/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="mono text-[11px] px-2 py-1 rounded-md bg-black/50 border border-white/10 text-gray-300">
                      {p.year}
                    </span>
                    {p.featured && (
                      <span className="mono text-[11px] px-2 py-1 rounded-md bg-violet-500/20 border border-violet-400/30 text-violet-200">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`p-6 md:p-8 flex flex-col ${
                    idx === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-white tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-sm text-violet-300/90 mt-1">
                        {p.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-violet-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  </div>

                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="mono text-[11px] px-2 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">
                      <Button className="btn-glow bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 rounded-lg h-10">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live
                      </Button>
                    </a>
                    <a href={p.codeUrl} target="_blank" rel="noreferrer">
                      <Button
                        variant="outline"
                        className="bg-white/[0.02] border-white/15 text-white hover:bg-white/[0.06] hover:text-white rounded-lg h-10"
                      >
                        <Github className="h-4 w-4 mr-2" /> Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
