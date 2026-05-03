import { createFileRoute } from "@tanstack/react-router";
import { ClayHero3D } from "@/components/ClayHero3D";
import { TiltCard } from "@/components/TiltCard";
import { Github, ArrowRight, MessageCircle, User, Bot } from "lucide-react";
import purpleImg from "@/assets/purple.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nakhun — Developer Portfolio" },
      {
        name: "description",
        content: "Nakhun — developer building futuristic web experiences. Skills in Python, Lua, and JavaScript.",
      },
      { property: "og:title", content: "Nakhun — Developer Portfolio" },
      { property: "og:description", content: "Futuristic web experiences by Nakhun." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Fatty Hub",
    desc: "Realtime roblox scripting hub. (closed)",
    tags: ["Lua", "Python (for the bot.)"],
    color: "var(--clay-pink)",
  },
  {
    title: "Discord Bot Making",
    desc: "hmm!!!! i make moderation bots, and problably more.",
    tags: ["Python", "JS", "TypeScript (not oftened)"],
    color: "var(--clay-mint)",
  },
];

const languages = [
  { name: "Python", level: 92, color: "oklch(0.65 0.2 295)" },
  { name: "Lua", level: 85, color: "oklch(0.7 0.2 320)" },
  { name: "JavaScript", level: 88, color: "oklch(0.7 0.18 270)" },
];

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      {/* AI NOTICE */}
      <div className="flex items-center justify-center gap-2 bg-primary/10 px-4 py-2 text-center text-xs font-medium text-primary backdrop-blur">
        <Bot className="h-3.5 w-3.5" />
        Heads up — this website is AI generated.
      </div>

      {/* NAV */}
      <header className="sticky top-4 z-40 mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full clay-sm px-5 py-3 backdrop-blur">
        <a href="#top" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.15)]">
            N
          </span>
          <span className="hidden sm:inline">Nakhun</span>
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
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--clay-pink)]" />
          Available for new projects
        </span>
        <h1 className="text-balance text-5xl font-extrabold leading-[1.05] sm:text-7xl md:text-8xl animate-fade-up [animation-delay:80ms]">
          I build <span className="text-gradient">futuristic</span>
          <br /> web things that <span className="text-gradient">scale</span>.
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground animate-fade-up [animation-delay:160ms]">
          Hey, I'm Nakhun — a developer obsessed with delightful UI,
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
                className="mb-6 grid h-44 place-items-center rounded-2xl"
                style={{
                  background: `linear-gradient(145deg, color-mix(in oklch, ${p.color} 80%, white), ${p.color})`,
                  boxShadow: "inset 4px 4px 10px rgba(0,0,0,0.12), inset -4px -4px 10px rgba(255,255,255,0.5)",
                }}
              >
                {/* Futuristic floating square */}
                <div
                  className="relative h-20 w-20 rotate-12 animate-float bg-white/70 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.15),inset_4px_4px_8px_rgba(255,255,255,0.6),0_8px_24px_rgba(124,58,237,0.35)]"
                  style={{ animationDelay: `${i * 0.7}s`, borderRadius: "0.6rem" }}
                >
                  <div className="absolute inset-2 rounded-md border border-primary/40" />
                </div>
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

      {/* SKILLS — image + language progress bars */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Skills</p>
          <h2 className="text-4xl font-extrabold sm:text-5xl">What I work with</h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Profile image */}
          <div className="clay mx-auto aspect-square w-full max-w-sm p-4">
            <img
              src={purpleImg}
              alt="Nakhun"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>

          {/* Language progress bars */}
          <div className="clay p-8 sm:p-10">
            <h3 className="mb-1 text-2xl font-bold">Languages</h3>
            <p className="mb-8 text-sm text-muted-foreground">My current proficiency.</p>
            <ul className="space-y-7">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-sm font-bold text-primary">{lang.level}%</span>
                  </div>
                  <div className="clay-pressed h-4 overflow-hidden rounded-full bg-muted/60">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${lang.level}%`,
                        background: `linear-gradient(90deg, ${lang.color}, var(--primary))`,
                        boxShadow: `0 0 12px ${lang.color}, inset 0 -2px 4px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.4)`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-28">
        <div className="clay relative overflow-hidden p-10 sm:p-16">
          <div className="absolute -right-10 -top-10 h-48 w-48 rotate-12 animate-float" style={{ background: "var(--clay-peach)", borderRadius: "1.5rem", boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.15)" }} />
          <div className="absolute -bottom-12 -left-8 h-40 w-40 -rotate-6 animate-float-slow" style={{ background: "var(--clay-sky)", borderRadius: "1.5rem", boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.15)" }} />
          <div className="relative">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About</p>
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl">Hi, I'm Nakhun 👋</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I love turning fuzzy ideas into things people actually use. I build with
              Python, Lua and JavaScript, ship side projects on the regular, and care a lot
              about how interfaces feel. Outside the editor you'll find me sketching,
              gaming, or breaking and fixing my own setups.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "3", v: "Core languages" },
                { k: "3", v: "Projects completed" },
                { k: "∞", v: "Ideas in queue" },
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
          I'm taking on a couple of new projects. Drop a line and tell me what you're cooking.
        </p>
        <a
          href="https://discord.gg/C9Em7m5vhE"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-5 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-glow),inset_-3px_-3px_6px_rgba(0,0,0,0.2),inset_3px_3px_6px_rgba(255,255,255,0.35)] transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" /> Join my Discord server
        </a>
        <div className="mt-10 flex items-center justify-center gap-4">
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: MessageCircle, href: "https://discord.gg/C9Em7m5vhE", label: "Discord" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-12 w-12 place-items-center rounded-full clay-sm transition hover:-translate-y-1 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nakhun · This website is AI generated.
      </footer>
    </main>
  );
}
