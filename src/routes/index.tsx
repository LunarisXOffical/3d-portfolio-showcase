import { createFileRoute } from "@tanstack/react-router";
import { ClayHero3D } from "@/components/ClayHero3D";
import { TiltCard } from "@/components/TiltCard";
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles, Rocket, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rivers — Full-stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Full-stack developer crafting playful, performant web experiences. Selected projects, skills, and a way to get in touch.",
      },
      { property: "og:title", content: "Alex Rivers — Full-stack Developer" },
      { property: "og:description", content: "Playful, performant web experiences." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Nimbus Analytics",
    desc: "Realtime dashboard with edge-streamed data and buttery 60fps charts.",
    tags: ["Next.js", "WebSockets", "D3"],
    color: "var(--clay-pink)",
  },
  {
    title: "Pebble Notes",
    desc: "Local-first note app with collaborative editing and offline sync.",
    tags: ["CRDT", "IndexedDB", "React"],
    color: "var(--clay-mint)",
  },
  {
    title: "Orbit UI Kit",
    desc: "An open-source claymorphism component library used by 3k+ devs.",
    tags: ["TypeScript", "Tailwind", "Storybook"],
    color: "var(--clay-sky)",
  },
  {
    title: "Lumen API",
    desc: "Type-safe RPC framework with sub-millisecond serverless cold starts.",
    tags: ["Edge", "tRPC", "Rust"],
    color: "var(--clay-lavender)",
  },
];

const skills = [
  { icon: Code2, label: "Frontend", items: ["React", "TypeScript", "Tailwind", "Three.js"] },
  { icon: Rocket, label: "Backend", items: ["Node", "Postgres", "Edge functions", "Redis"] },
  { icon: Sparkles, label: "Design", items: ["Figma", "Motion", "Design systems", "3D"] },
  { icon: Zap, label: "Tooling", items: ["Vite", "Bun", "Docker", "GitHub Actions"] },
];

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-4 z-40 mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full clay-sm px-5 py-3 backdrop-blur">
        <a href="#top" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.15)]">
            A
          </span>
          <span className="hidden sm:inline">Alex Rivers</span>
        </a>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <a href="#work" className="rounded-full px-3 py-1.5 hover:bg-muted">Work</a>
          <a href="#skills" className="rounded-full px-3 py-1.5 hover:bg-muted">Skills</a>
          <a href="#about" className="rounded-full px-3 py-1.5 hover:bg-muted">About</a>
          <a
            href="#contact"
            className="ml-2 rounded-full bg-primary px-4 py-1.5 text-primary-foreground shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.18),inset_2px_2px_4px_rgba(255,255,255,0.35)] transition hover:scale-105"
          >
            Hire me
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-6 pt-12 text-center">
        <ClayHero3D />
        <span className="mb-6 inline-flex items-center gap-2 rounded-full clay-sm px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--clay-mint)]" />
          Available for new projects
        </span>
        <h1 className="text-balance text-5xl font-extrabold leading-[1.05] sm:text-7xl md:text-8xl animate-fade-up [animation-delay:80ms]">
          I build <span className="text-gradient">playful</span>
          <br /> web things that <span className="text-gradient">scale</span>.
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground animate-fade-up [animation-delay:160ms]">
          Hey, I'm Alex — a full-stack developer obsessed with delightful UI,
          performance, and shipping ideas that actually feel alive.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:240ms]">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow),inset_-3px_-3px_6px_rgba(0,0,0,0.2),inset_3px_3px_6px_rgba(255,255,255,0.35)] transition-transform duration-300 hover:scale-105"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full clay-sm px-7 py-4 text-base font-semibold transition-transform hover:scale-105">
            Get in touch
          </a>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Selected work</p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Things I've shipped recently</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A handful of projects spanning realtime apps, dev tooling and open source.
          </p>
        </div>

        <div className="perspective grid gap-7 md:grid-cols-2">
          {projects.map((p, i) => (
            <TiltCard key={p.title} className="clay group cursor-pointer p-8 animate-fade-up" intensity={8}>
              <div
                className="mb-6 flex h-44 items-center justify-center rounded-2xl"
                style={{
                  background: `linear-gradient(145deg, color-mix(in oklch, ${p.color} 80%, white), ${p.color})`,
                  boxShadow:
                    "inset 4px 4px 10px rgba(0,0,0,0.12), inset -4px -4px 10px rgba(255,255,255,0.5)",
                }}
              >
                <div
                  className="h-20 w-20 animate-blob bg-white/60"
                  style={{ animationDelay: `${i * 0.7}s` }}
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-background/70 transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Toolkit</p>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Stack I reach for</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, label, items }, i) => (
            <div key={label} className="clay-sm p-6 transition hover:-translate-y-1">
              <div
                className="mb-5 grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground"
                style={{
                  background: [
                    "var(--clay-pink)",
                    "var(--clay-mint)",
                    "var(--clay-lavender)",
                    "var(--clay-butter)",
                  ][i],
                  boxShadow: "inset -3px -3px 6px rgba(0,0,0,0.15), inset 3px 3px 6px rgba(255,255,255,0.5)",
                }}
              >
                <Icon className="h-6 w-6 text-foreground/80" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{label}</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-28">
        <div className="clay relative overflow-hidden p-10 sm:p-16">
          <div className="absolute -right-10 -top-10 h-48 w-48 animate-float rounded-full" style={{ background: "var(--clay-peach)", boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.15)" }} />
          <div className="absolute -bottom-12 -left-8 h-40 w-40 animate-float-slow rounded-full" style={{ background: "var(--clay-sky)", boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.15)" }} />
          <div className="relative">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About</p>
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl">Hi, I'm Alex 👋</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Six years in, I still get a kick out of turning fuzzy ideas into things people
              actually use. I've shipped products at startups and an agency, led small frontend
              teams, and contributed to open-source UI tools. Outside the editor you'll find me
              sketching, climbing, or losing chess games online.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "6+", v: "Years building" },
                { k: "40+", v: "Projects shipped" },
                { k: "3k+", v: "GitHub stars" },
              ].map((s) => (
                <div key={s.v} className="clay-sm p-5 text-center">
                  <div className="text-3xl font-extrabold text-gradient">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Let's talk</p>
        <h2 className="text-4xl font-extrabold sm:text-6xl">Have an idea? <span className="text-gradient">Let's build it.</span></h2>
        <p className="mt-5 text-lg text-muted-foreground">
          I'm taking on a couple of new projects this quarter. Drop a line and tell me what you're cooking.
        </p>
        <a
          href="mailto:hello@alexrivers.dev"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-5 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-glow),inset_-3px_-3px_6px_rgba(0,0,0,0.2),inset_3px_3px_6px_rgba(255,255,255,0.35)] transition-transform hover:scale-105"
        >
          <Mail className="h-5 w-5" /> hello@alexrivers.dev
        </a>
        <div className="mt-10 flex items-center justify-center gap-4">
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:hello@alexrivers.dev", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-12 w-12 place-items-center rounded-full clay-sm transition hover:-translate-y-1 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Alex Rivers · Crafted with clay & code.
      </footer>
    </main>
  );
}
