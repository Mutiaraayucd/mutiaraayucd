import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

// ---------- Cursor ----------
function Cursor() {
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <motion.div
        animate={{ scale: hover ? 3 : 1, opacity: hover ? 0.4 : 1 }}
        className="-translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-ink mix-blend-difference"
        style={{ background: "var(--ink)" }}
      />
    </motion.div>
  );
}

// ---------- Nav ----------
function Nav() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
      <motion.a
        href="#"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-xl font-semibold tracking-tight"
      >
        hk<span className="text-accent-hot">.</span>
      </motion.a>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-1 rounded-full border border-border bg-background/60 px-2 py-1.5 backdrop-blur-md"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            {l.label}
          </a>
        ))}
      </motion.nav>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  const word = "Annyeonghaseyo";
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Made with <span className="inline-block size-2 rounded-full bg-accent-hot" />
      </motion.p>

      <h1 className="font-display text-center text-[14vw] font-light leading-[0.9] tracking-tight md:text-[12vw]">
        {word.split("").map((c, i) => (
          <motion.span
            key={i}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
            style={{ fontStyle: i === 4 || i === 9 ? "italic" : "normal" }}
          >
            {c}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="mt-8 flex w-full max-w-3xl items-center gap-4 text-sm tracking-widest text-muted-foreground"
      >
        <span>HASAN</span>
        <span className="h-px flex-1 bg-foreground/30" />
        <span>KILABI</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex size-12 items-center justify-center rounded-full bg-foreground text-background"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

// ---------- Marquee ----------
function Marquee() {
  const items = ["Branding", "•", "Web Design", "•", "UI / UX", "•", "Illustration", "•", "Motion", "•", "Art Direction", "•"];
  return (
    <div className="overflow-hidden border-y border-border py-6">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-5xl italic md:text-7xl">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} className={i % 2 ? "text-accent-hot" : ""}>{it}</span>
        ))}
      </div>
    </div>
  );
}

// ---------- About with parallax ----------
function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <motion.div style={{ y }} className="md:col-span-4">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">01 — About</p>
          <p className="font-display text-3xl italic">Hello there 👋</p>
        </motion.div>
        <div className="md:col-span-8">
          {[
            "I'm a multidisciplinary designer based in Jakarta, crafting brand identities and digital experiences for ambitious teams.",
            "For the last 5 years I've helped startups and studios turn complex ideas into clear, delightful products — from the first sketch to the last pixel.",
          ].map((t, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="mb-6 font-display text-3xl font-light leading-snug md:text-5xl"
            >
              {t}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Work ----------
const projects = [
  { n: "01", title: "Lumen Studio", tag: "Brand Identity", year: "2025", color: "oklch(0.7 0.18 50)" },
  { n: "02", title: "Northwind Bank", tag: "Product Design", year: "2024", color: "oklch(0.45 0.12 240)" },
  { n: "03", title: "Kopi Senja", tag: "Packaging", year: "2024", color: "oklch(0.55 0.15 30)" },
  { n: "04", title: "Atlas OS", tag: "Web App", year: "2023", color: "oklch(0.35 0.08 160)" },
];

function Work() {
  return (
    <section id="work" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">02 — Selected Work</p>
            <h2 className="font-display text-5xl font-light md:text-7xl">
              Recent <span className="italic">projects</span>
            </h2>
          </div>
        </div>

        <ul className="border-t border-border">
          {projects.map((p, i) => (
            <ProjectRow key={p.n} {...p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectRow({ n, title, tag, year, color, index }: typeof projects[number] & { index: number }) {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      data-cursor
      className="group relative flex cursor-pointer items-center justify-between border-b border-border py-8 transition-colors hover:bg-foreground hover:text-background"
    >
      <div className="flex items-baseline gap-6 md:gap-12">
        <span className="font-mono text-sm text-muted-foreground group-hover:text-background/60">{n}</span>
        <h3 className="font-display text-3xl font-light md:text-6xl">
          <motion.span animate={{ x: hover ? 12 : 0 }} transition={{ ease: [0.22, 1, 0.36, 1] }} className="inline-block">
            {title}
          </motion.span>
        </h3>
      </div>
      <div className="hidden items-center gap-12 md:flex">
        <span className="text-sm uppercase tracking-widest">{tag}</span>
        <span className="font-mono text-sm">{year}</span>
        <motion.span animate={{ rotate: hover ? 45 : 0 }} className="text-2xl">→</motion.span>
      </div>

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            style={{ left: pos.x, top: pos.y, background: color }}
            className="pointer-events-none absolute z-10 hidden h-48 w-72 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl md:block"
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
}

// ---------- Big quote ----------
function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  return (
    <section ref={ref} className="overflow-hidden py-32">
      <motion.h2 style={{ x }} className="whitespace-nowrap font-display text-[16vw] font-light italic leading-none">
        design — with intention.
      </motion.h2>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          03 — Let's talk
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl font-light leading-[0.95] md:text-9xl"
        >
          Got a <span className="italic text-accent-hot">project</span><br />in mind?
        </motion.h2>

        <motion.a
          href="mailto:hello@hasankilabi.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-background"
        >
          hello@hasankilabi.com <span>↗</span>
        </motion.a>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          {["Instagram", "Dribbble", "Behance", "LinkedIn"].map((s) => (
            <a key={s} href="#" className="hover:text-foreground">{s}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-8 text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:px-12">
      <span>© 2025 Hasan Kilabi</span>
      <span>Crafted in Jakarta</span>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="grain relative min-h-screen">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
