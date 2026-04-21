import React from "react";
import { GraduationCap, Award, Zap } from "lucide-react";
import { personalInfo, education, certifications } from "../data/mock";

const SectionHeading = ({ eyebrow, title, description, align = "left" }) => (
  <div
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1 text-xs text-violet-300">
      <Zap className="h-3 w-3" /> {eyebrow}
    </div>
    <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-gray-400 leading-relaxed">{description}</p>
    )}
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative section">
      <div className="glow-blob bg-violet-700 h-[360px] w-[360px] top-10 left-[60%]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              A developer who cares about{" "}
              <span className="gradient-text">the details</span>.
            </>
          }
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-gray-400 leading-relaxed">
              I enjoy turning complex requirements into clean, scalable
              interfaces. My sweet spot is the intersection of thoughtful UI
              design, robust React architecture and dependable Node.js APIs.
              I\u2019ve built production e-commerce experiences with payment
              gateways like Razorpay & PhonePe, and I\u2019m deeply invested in
              making motion and micro-interactions feel effortless.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {[
                { k: "Role", v: personalInfo.title },
                { k: "Based in", v: personalInfo.location },
                { k: "Email", v: personalInfo.email },
              ].map((i) => (
                <div
                  key={i.k}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
                >
                  <div className="text-xs uppercase tracking-widest text-gray-500">
                    {i.k}
                  </div>
                  <div className="mt-1 text-sm text-white truncate">{i.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="glass rounded-2xl border border-white/10 p-6 card-hover">
              <div className="flex items-center gap-2 text-violet-300">
                <GraduationCap className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest">
                  Education
                </span>
              </div>
              <ul className="mt-4 space-y-4">
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="border-l-2 border-violet-500/40 pl-4"
                  >
                    <div className="text-sm text-white font-medium">
                      {e.degree}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {e.school}
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-xs text-gray-500 mono">
                      <span>{e.period}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-600" />
                      <span className="text-violet-300">{e.score}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-6 card-hover">
              <div className="flex items-center gap-2 text-violet-300">
                <Award className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest">
                  Certifications
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.title}
                    className="flex items-start justify-between gap-4 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                  >
                    <div>
                      <div className="text-sm text-white">{c.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {c.issuer}
                      </div>
                    </div>
                    <div className="text-xs mono text-violet-300">{c.year}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
