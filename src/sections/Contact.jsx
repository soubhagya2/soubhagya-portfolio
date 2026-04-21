import React, { useState } from "react";
import { toast } from "react-toastify";
import { personalInfo } from "../data/mock";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Copy,
  Check,
} from "lucide-react";
import { Github, Linkedin } from "../components/Icons";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out name, email and message.");
      return;
    }
    setSubmitting(true);
    // Persist locally for the mock phase
    const prev = JSON.parse(localStorage.getItem("contact_messages") || "[]");
    prev.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("contact_messages", JSON.stringify(prev));

    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Thanks! I'll get back to you shortly.");
    }, 900);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      toast.success("Email copied!");
    } catch {
      toast.error("Copy failed");
    }
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative section">
      <div className="glow-blob bg-fuchsia-700 h-[360px] w-[360px] -top-10 right-[55%]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1 text-xs text-violet-300">
            <Send className="h-3 w-3" /> Contact
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let’s build something{" "}
            <span className="gradient-text">remarkable</span>.
          </h2>
          <p className="mt-4 text-gray-400">
            Have a product in mind, a role to discuss, or just want to say hi?
            Drop a message — I reply within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-violet-400/40 hover:bg-white/[0.04] transition"
              >
                <span className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 border border-white/10 text-violet-200">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-gray-500">
                    {c.label}
                  </div>
                  <div className="text-sm text-white truncate">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <Button
                onClick={copyEmail}
                variant="outline"
                className="bg-white/[0.02] border-white/15 text-white hover:bg-white/[0.06] hover:text-white rounded-lg"
              >
                {copied ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : (
                  <Copy className="h-4 w-4 mr-2" />
                )}
                {copied ? "Copied" : "Copy email"}
              </Button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 grid place-items-center rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-violet-400/40 transition"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 grid place-items-center rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-violet-400/40 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 glass-strong rounded-2xl border border-white/10 p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Name
                </label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-violet-500/60 focus-visible:border-violet-500/40 h-11"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="mt-2 bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-violet-500/60 focus-visible:border-violet-500/40 h-11"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Subject
              </label>
              <Input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project, role, collaboration\u2026"
                className="mt-2 bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-violet-500/60 focus-visible:border-violet-500/40 h-11"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Message
              </label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me a little about what you\u2019re building\u2026"
                className="mt-2 bg-white/[0.03] border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-violet-500/60 focus-visible:border-violet-500/40"
              />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
              <p className="text-xs text-gray-500">
                By sending this, you agree to be contacted about your inquiry.
              </p>
              <Button
                type="submit"
                disabled={submitting}
                className="btn-glow bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 rounded-xl h-11 px-6"
              >
                <Send className="h-4 w-4 mr-2" />
                {submitting ? "Sending\u2026" : "Send message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
