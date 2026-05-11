import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import mutiaraPhoto from "@/assets/mutiara.png";

const EMOJI = {
  wave: "https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png",
  pin: "https://em-content.zobj.net/source/microsoft-teams/337/round-pushpin_1f4cd.png",
  cap: "https://em-content.zobj.net/source/microsoft-teams/337/graduation-cap_1f393.png",
  chart: "https://em-content.zobj.net/source/microsoft-teams/337/bar-chart_1f4ca.png",
  spark: "https://em-content.zobj.net/source/microsoft-teams/337/sparkles_2728.png",
};
const E = ({ src, className = "" }: { src: string; className?: string }) => (
  <img src={src} alt="" className={`inline-block align-middle ${className}`} loading="lazy" />
);

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
    <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block">
      <motion.div
        animate={{ scale: hover ? 3 : 1, opacity: hover ? 0.4 : 1 }}
        className="-translate-x-1/2 -translate-y-1/2 size-3 rounded-full mix-blend-difference"
        style={{ background: "var(--ink)" }}
      />
    </motion.div>
  );
}

// ---------- Nav ----------
function Nav() {
  const links = [
    { label: "Tentang", href: "#about" },
    { label: "Pengalaman", href: "#work" },
    { label: "Skill", href: "#skills" },
    { label: "Kontak", href: "#contact" },
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
        macd<span className="text-accent-hot">.</span>
      </motion.a>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="hidden items-center gap-1 rounded-full border border-border bg-background/60 px-2 py-1.5 backdrop-blur-md md:flex"
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
  const greetings = ["Halo", "Annyeong", "Hello", "Hola", "Bonjour", "Konnichiwa", "Salam"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % greetings.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Portofolio <span className="inline-block size-2 rounded-full bg-accent-hot" /> 2026
      </motion.p>

      <h1 className="font-display text-center text-[14vw] font-light leading-[0.9] tracking-tight md:text-[10vw]">
        <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom" style={{ minWidth: "5ch" }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[idx]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block italic"
            >
              {greetings[idx]},
            </motion.span>
          </AnimatePresence>
        </span>
        <br />
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display"
        >
          saya <span className="italic text-accent-hot">Mutiara Ayu</span>
        </motion.span>
      </h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="mt-10 flex w-full max-w-3xl items-center gap-4 text-xs tracking-widest text-muted-foreground md:text-sm"
      >
        <span>UX WRITER</span>
        <span className="h-px flex-1 bg-foreground/30" />
        <span>UI/UX DESIGNER</span>
        <span className="h-px flex-1 bg-foreground/30" />
        <span>WEB DEVELOPER</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
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
  const items = ["UX Writing", "•", "UI/UX Design", "•", "Graphic Design", "•", "Web Development", "•", "Copywriting", "•", "Content Creation", "•"];
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

// ---------- About ----------
function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
        <motion.div style={{ y }} className="md:col-span-5">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">01 — Tentang</p>
          <p className="mb-6 flex items-center gap-3 font-display text-3xl italic">
            Senang berkenalan
            <motion.span
              animate={{ rotate: [0, 18, -8, 18, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4 }}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
            >
              <E src={EMOJI.wave} className="size-10" />
            </motion.span>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-4 overflow-hidden rounded-3xl border border-border bg-secondary"
          >
            <img src={mutiaraPhoto} alt="Mutiara Ayu Candra Dewi" className="block w-full" />
            <div className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs backdrop-blur-md">
              Mutiara Ayu Candra Dewi
            </div>
          </motion.div>

          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><E src={EMOJI.pin} className="size-5" /> Jember, Jawa Timur</p>
            <p className="flex items-center gap-2"><E src={EMOJI.cap} className="size-5" /> D4 Teknik Informatika</p>
            <p className="flex items-center gap-2"><E src={EMOJI.chart} className="size-5" /> IPK 3.85 / 4.0</p>
          </div>
        </motion.div>
        <div className="md:col-span-7">
          {[
            "Fresh graduate D4 Teknik Informatika Politeknik Negeri Jember dengan spesialisasi UI/UX Design dan UX Writing.",
            "Berpengalaman merancang antarmuka, menyusun microcopy, serta mengembangkan konten digital yang berfokus pada peningkatan kualitas pengalaman pengguna.",
            "Detail-oriented, mampu bekerja mandiri maupun kolaboratif, dengan komunikasi efektif dan berorientasi hasil.",
          ].map((t, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="mb-6 font-display text-2xl font-light leading-snug md:text-3xl"
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
  { n: "01", title: "Kominfo Jatim", tag: "UX Writer · Majadigi & Maja.AI", year: "2025", color: "oklch(0.55 0.18 250)" },
  { n: "02", title: "SEAL Indonesia", tag: "UX Writer · Content Plan", year: "2025", color: "oklch(0.62 0.18 30)" },
  { n: "03", title: "IQACS Greenhouse", tag: "UI/UX · IoT Monitoring", year: "2024", color: "oklch(0.55 0.15 150)" },
  { n: "04", title: "KampSewa", tag: "UI/UX · Marketplace", year: "2024", color: "oklch(0.6 0.16 60)" },
  { n: "05", title: "Juragan Travel", tag: "UI/UX · Haji & Umroh", year: "2023", color: "oklch(0.5 0.15 200)" },
  { n: "06", title: "Ngantinkuy", tag: "UI/UX · Kasir RFID", year: "2022", color: "oklch(0.45 0.14 320)" },
  { n: "07", title: "Toko Sembako Andika", tag: "UI/UX · Desktop App", year: "2022", color: "oklch(0.55 0.14 100)" },
];

function Work() {
  return (
    <section id="work" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">02 — Pengalaman & Project</p>
            <h2 className="font-display text-5xl font-light md:text-7xl">
              Selected <span className="italic">work</span>
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
      className="group relative flex cursor-pointer items-center justify-between border-b border-border py-6 transition-colors hover:bg-foreground hover:text-background md:py-8"
    >
      <div className="flex items-baseline gap-6 md:gap-12">
        <span className="font-mono text-sm text-muted-foreground group-hover:text-background/60">{n}</span>
        <h3 className="font-display text-2xl font-light md:text-5xl">
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

// ---------- Skills ----------
const skillGroups = [
  { title: "Design", items: ["Figma", "Adobe Photoshop", "Canva", "CorelDRAW"] },
  { title: "Development", items: ["HTML", "CSS", "JavaScript", "React", "Laravel", "PHP", "MySQL"] },
  { title: "Content & Writing", items: ["UX Writing", "Copywriting", "Microcopy", "CapCut", "Content Plan"] },
  { title: "Lainnya", items: ["MS Office", "Problem Solving", "Time Management", "Bahasa: ID (aktif), EN (pasif)"] },
];

function Skills() {
  return (
    <section id="skills" className="bg-foreground px-6 py-32 text-background md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-background/60">03 — Keterampilan</p>
        <h2 className="mb-16 font-display text-5xl font-light md:text-7xl">
          Tools & <span className="italic text-accent-hot">stack</span>
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-background/20 pt-6"
            >
              <h3 className="mb-6 font-display text-2xl italic">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-background/30 px-4 py-2 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Education & Achievements ----------
const education = [
  { place: "Politeknik Negeri Jember", detail: "D4 Teknik Informatika · IPK 3.85", year: "2022 — Sekarang" },
  { place: "SMA Negeri 3 Jember", detail: "MIPA · Rata-rata Ujian 89.81", year: "2019 — 2022" },
];

const achievements = [
  "Juara 1 Poster Terbaik (KampSewa) · TIF Exhibition 2025",
  "Juara 1 Pengembangan Aplikasi (Ngantin Kuy) · TIF Exhibition 2023",
  "Juara 2 Lomba Video (KampSewa) · TIF Exhibition 2024",
  "Juara 3 Lomba Poster (KampSewa) · TIF Exhibition 2024",
  "Junior Graphic Designer · Digital Talent Scholarship 2024",
  "Junior Web Developer · Digital Talent Scholarship 2024",
  "MBKM IQACS Greenhouse Kopi Nursery 2024",
];

function EduAchieve() {
  return (
    <section className="px-6 py-32 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">04 — Pendidikan</p>
          <h2 className="mb-10 font-display text-4xl font-light md:text-5xl">Riwayat <span className="italic">pendidikan</span></h2>
          <div className="space-y-8">
            {education.map((e, i) => (
              <motion.div
                key={e.place}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-accent-hot pl-6"
              >
                <p className="font-mono text-xs text-muted-foreground">{e.year}</p>
                <h3 className="mt-1 font-display text-2xl">{e.place}</h3>
                <p className="text-sm text-muted-foreground">{e.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">05 — Pencapaian</p>
          <h2 className="mb-10 font-display text-4xl font-light md:text-5xl">Highlight <span className="italic">prestasi</span></h2>
          <ul className="space-y-4">
            {achievements.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 border-b border-border pb-3 text-sm"
              >
                <span className="text-accent-hot">★</span>
                <span>{a}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Quote ----------
function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  return (
    <section ref={ref} className="overflow-hidden py-32">
      <motion.h2 style={{ x }} className="whitespace-nowrap font-display text-[14vw] font-light italic leading-none">
        words shape — experiences.
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
          06 — Mari berkolaborasi
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl font-light leading-[0.95] md:text-8xl"
        >
          Punya <span className="italic text-accent-hot">project</span><br />menarik?
        </motion.h2>

        <motion.a
          href="mailto:mutiaraayucd56@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-background"
        >
          mutiaraayucd56@gmail.com <span>↗</span>
        </motion.a>

        <div className="mt-20 grid gap-6 text-sm md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <a href="mailto:mutiaraayucd56@gmail.com" className="hover:text-accent-hot">mutiaraayucd56@gmail.com</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Telepon</p>
            <a href="tel:+6289686404940" className="hover:text-accent-hot">0896 8640 4940</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
            <a href="https://www.linkedin.com/in/mutiara-ayu-05b96a346/" target="_blank" rel="noreferrer" className="hover:text-accent-hot">/in/mutiara-ayu</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-8 text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:px-12">
      <span>© 2026 Mutiara Ayu Candra Dewi</span>
      <span>Made in Jember, Jawa Timur</span>
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
      <Skills />
      <EduAchieve />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
