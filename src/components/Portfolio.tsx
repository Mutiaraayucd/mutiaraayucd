import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  ChartColumn,
  Clapperboard,
  Clock3,
  Code2,
  Lightbulb,
  Languages,
  MessageCircleMore,
  Palette,
  Presentation,
  Puzzle,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  ExternalLink,
  Monitor,
  Lock,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Cpu,
  Smartphone,
  Terminal,
  Handshake,
  FileText,
} from "lucide-react";
import mutiaraPhoto from "@/assets/profile/mutiara3.png";
import { projects } from "@/data/projects";

// Certificate Imports
import webDevComp1 from "@/assets/sertifikat/Web Developer Competency Certificate 1.jpeg";
import webDevComp2 from "@/assets/sertifikat/Web Developer Competency Certificate 2.jpeg";
import funAI1 from "@/assets/sertifikat/Fundamentals of Artificial Intelligence 1.jpg";
import funAI2 from "@/assets/sertifikat/Fundamentals of Artificial Intelligence 2.png";
import bestPoster1 from "@/assets/sertifikat/1st Place Best Poster (KampSewa) 1.jpg";
import bestPoster2 from "@/assets/sertifikat/1st Place Best Poster (KampSewa) 2.png";
import frontEnd1 from "@/assets/sertifikat/Front-End Web Development for Beginners 1.png";
import frontEnd2 from "@/assets/sertifikat/Front-End Web Development for Beginners 2.png";
import introDataSci from "@/assets/sertifikat/Introduction to Data Science with R.png";
import miniBootcampDA from "@/assets/sertifikat/Mini Bootcamp Introduction to Data Analytics Batch 4.png";
import basicExcel from "@/assets/sertifikat/Basic Excel.png";
import studyCaseExcel from "@/assets/sertifikat/Study Case Bootcamp Data Analyst with Excel.png";
import studyCaseSQLPy from "@/assets/sertifikat/Study Case Bootcamp Data Analyst with SQL & Python.png";
import studyCaseMLAI from "@/assets/sertifikat/Study Case Bootcamp Machine Learning & AI for Beginner.png";
import shortClassGD from "@/assets/sertifikat/Short Class Graphic Design.png";
import shortClassSE from "@/assets/sertifikat/Short Class Software Engineering.png";
import shortClassPM from "@/assets/sertifikat/Short Class Product Management.png";
import iqacsCoffee1 from "@/assets/sertifikat/IQACS for Coffee Greenhouse Nursery 1.png";
import iqacsCoffee2 from "@/assets/sertifikat/IQACS for Coffee Greenhouse Nursery 2.png";
import videoComp2nd from "@/assets/sertifikat/2nd Place Video Competition (KampSewa).png";
import posterComp3rd from "@/assets/sertifikat/3rd Place Poster Competition (KampSewa).png";
import jrGD1 from "@/assets/sertifikat/Junior Graphic Designer 1.png";
import jrGD2 from "@/assets/sertifikat/Junior Graphic Designer 2.png";
import jrGD3 from "@/assets/sertifikat/Junior Graphic Designer 3.png";
import jrGD4 from "@/assets/sertifikat/Junior Graphic Designer 4.png";
import jrWD1 from "@/assets/sertifikat/Junior Web Developer 1.png";
import jrWD2 from "@/assets/sertifikat/Junior Web Developer 2.png";
import appDevNgantinKuy from "@/assets/sertifikat/1st Place Application Development (Ngantin Kuy).png";
import fundamentalGD from "@/assets/sertifikat/Fundamental Graphic Design.png";

// Internship & Organization Imports
import kominfoOrg1 from "@/assets/Internship & Organization/UX Writer - Department of Communication and Informatics, East Java Province 1.png";
import kominfoOrg2 from "@/assets/Internship & Organization/UX Writer - Department of Communication and Informatics, East Java Province 2.png";
import sealOrg1 from "@/assets/Internship & Organization/UIUX Writer - SEAL (Social Economic Accelerator Lab) 1.png";
import sealOrg2 from "@/assets/Internship & Organization/UIUX Writer - SEAL (Social Economic Accelerator Lab) 2.png";
import secGenKopma from "@/assets/Internship & Organization/General Secretary - Student Cooperative Organization POLIJE.png";
import mediaStaffKopma1 from "@/assets/Internship & Organization/Digital Media Staff - Student Cooperative Organization POLIJE 1.png";
import mediaStaffKopma2 from "@/assets/Internship & Organization/Digital Media Staff - Student Cooperative Organization POLIJE 2.png";

const years = ["2021", "2022", "2023", "2024", "2025", "2026"];

const aboutParagraphs = [
  "Fresh graduate in Applied Bachelor's (D4) Informatics Engineering from State Polytechnic of Jember, specializing in UI/UX Design and UX Writing.",
  "Experienced in designing interfaces, crafting microcopy, and developing digital content focused on enhancing user experience quality.",
  "Strongly passionate about user research, usability testing, and technical content writing to create user-friendly digital products."
];

const certifications = [
  {
    title: "Web Developer Competency Certificate",
    issuer: "National Professional Certification Agency (BNSP)",
    year: "2026",
    skills: "OOP, SQL, Algorithms, Debugging, Code Review, Software Testing",
    images: [webDevComp1, webDevComp2],
  },
  {
    title: "Fundamentals of Artificial Intelligence",
    issuer: "Dicoding",
    year: "2025",
    skills: "Artificial Intelligence (AI), Machine Learning, Deep Learning",
    images: [funAI1, funAI2],
  },
  {
    title: "1st Place Best Poster (KampSewa)",
    issuer: "TIF Exhibition",
    year: "2025",
    skills: "Poster Design, Visual Creativity, Visual Communication",
    images: [bestPoster1, bestPoster2],
  },
  {
    title: "Front-End Web Development for Beginners",
    issuer: "Dicoding Indonesia",
    year: "2025",
    skills: "Front-End Development (HTML, CSS, JavaScript – Basic)",
    images: [frontEnd1, frontEnd2],
  },
  {
    title: "Introduction to Data Science with R",
    issuer: "DQLab",
    year: "2025",
    skills: "Data Science (Basic), R Programming, Data Manipulation",
    image: introDataSci,
  },
  {
    title: "Mini Bootcamp: Introduction to Data Analytics Batch 4",
    issuer: "DQLab",
    year: "2025",
    skills: "Data Analytics, Data Visualization",
    image: miniBootcampDA,
  },
  {
    title: "Basic Excel",
    issuer: "DQLab",
    year: "2025",
    skills: "Excel Workspace Components, VLOOKUP Formula, Charts",
    image: basicExcel,
  },
  {
    title: "Study Case Bootcamp: Data Analyst with Excel",
    issuer: "DQLab",
    year: "2025",
    skills: "Data Analysis, Data Visualization with Charts and Pivot Tables",
    image: studyCaseExcel,
  },
  {
    title: "Study Case Bootcamp: Data Analyst with SQL & Python",
    issuer: "DQLab",
    year: "2025",
    skills: "SQL, Python, Data Analysis",
    image: studyCaseSQLPy,
  },
  {
    title: "Study Case Bootcamp: Machine Learning & AI for Beginner",
    issuer: "DQLab",
    year: "2025",
    skills: "Data Preprocessing and Cleaning",
    image: studyCaseMLAI,
  },
  {
    title: "Short Class Graphic Design",
    issuer: "MySkill",
    year: "2025",
    skills: "Color and Typography Analysis",
    image: shortClassGD,
  },
  {
    title: "Short Class Software Engineering",
    issuer: "MySkill",
    year: "2025",
    skills: "Front-End Development (HTML)",
    image: shortClassSE,
  },
  {
    title: "Short Class Product Management",
    issuer: "MySkill",
    year: "2025",
    skills: "Introduction to Product Management",
    image: shortClassPM,
  },
  {
    title: "IQACS for Coffee Greenhouse Nursery",
    issuer: "Merdeka Belajar Kampus Merdeka Program",
    year: "2024",
    skills: "UI/UX Design, Web & Mobile Development, IoT Integration, System Testing",
    images: [iqacsCoffee1, iqacsCoffee2],
  },
  {
    title: "2nd Place Video Competition (KampSewa)",
    issuer: "TIF Exhibition",
    year: "2024",
    skills: "Visual Creativity, Video Editing",
    image: videoComp2nd,
  },
  {
    title: "3rd Place Poster Competition (KampSewa)",
    issuer: "TIF Exhibition",
    year: "2024",
    skills: "Graphic Design, Poster Design, Visual Creativity, Visual Communication",
    image: posterComp3rd,
  },
  {
    title: "Junior Graphic Designer",
    issuer: "VSGA (BPSDMP Kominfo Surabaya)",
    year: "2024",
    skills: "Graphic Design, Visual Communication, Creative Design",
    images: [jrGD1, jrGD2, jrGD3, jrGD4],
  },
  {
    title: "Junior Web Developer",
    issuer: "Digital Talent Scholarship",
    year: "2024",
    skills: "Web Development, HTML, CSS, JavaScript",
    images: [jrWD1, jrWD2],
  },
  {
    title: "1st Place Application Development (Ngantin Kuy)",
    issuer: "TIF Exhibition",
    year: "2023",
    skills: "Innovation & Application Development",
    image: appDevNgantinKuy,
  },
  {
    title: "Fundamental Graphic Design",
    issuer: "Student Acceleration Space (YBM BRILiaN)",
    year: "2023",
    skills: "Graphic Design (CorelDraw), Visual Communication, Digital Design Basics",
    image: fundamentalGD,
  }
];

const education = [
  {
    place: "State Polytechnic of Jember - East Java",
    detail: "Applied Bachelor's Degree (D4) - Informatics Engineering",
    year: "Sep 2022 - Jun 2026",
  },
  {
    place: "State Senior High School 3 Jember - East Java",
    detail: "Science Major",
    year: "Jul 2019 - May 2022",
  },
];

const achievements = [
  "1st Place Best Poster (KampSewa) - TIF Exhibition 2025",
  "1st Place Application Development (Ngantinkuy) - TIF Exhibition 2023",
  "2nd Place Video Competition (KampSewa) - TIF Exhibition 2024",
  "3rd Place Poster Competition (KampSewa) - TIF Exhibition 2024",
  "Junior Graphic Designer - Digital Talent Scholarship 2024",
  "Junior Web Developer - Digital Talent Scholarship 2024",
  "MBKM IQACS Greenhouse Kopi Nursery 2024",
];

const organizations = [
  {
    title: "UX Writer - Department of Communication and Informatics, East Java Province",
    year: "Aug – Nov 2025",
    tags: "UX Writing, Content Validation, CMS Publishing, AI Knowledge Base",
    description: `• Compiled and validated the Majadigi service catalog (168+ services) and rewrote content using UX Writing principles.
• Built an AI Knowledge Base for the Maja.AI chatbot (intent, Q&A, keywords, context phrases).
• Uploaded and published content to the Majadigi CMS (staging & live) and performed quality checks.
• Developed and monitored monthly Content Plans.
• Conducted usability testing, user feedback analysis, and standardized Majadigi dashboard naming conventions.`,
    images: [kominfoOrg1, kominfoOrg2]
  },
  {
    title: "UI/UX Writer - SEAL (Social Economic Accelerator Lab)",
    year: "Aug – Dec 2025",
    tags: "UX Writing, A/B Testing, Copy Optimization, User Feedback Analysis",
    description: `• Compiled and validated the Majadigi service catalog (168+ services) and rewrote content using UX Writing principles.
• Built an AI Knowledge Base for the Maja.AI chatbot (intent, Q&A, keywords, context phrases).
• Uploaded and published content to the Majadigi CMS (staging & live) and performed quality checks.
• Developed and monitored monthly Content Plans.
• Conducted usability testing, user feedback analysis, and standardized Majadigi dashboard naming conventions.`,
    images: [sealOrg1, sealOrg2]
  },
  {
    title: "General Secretary - Student Cooperative Organization POLIJE",
    year: "Dec 2023 - Nov 2024",
    tags: "Administrative Management, Team Coordination, Communication",
    description: `• Managed administration, meeting coordination, and internal & external communication. Developed organizational policies and supported program execution for 1 term.`,
    image: secGenKopma
  },
  {
    title: "Digital Media Staff - Student Cooperative Organization POLIJE",
    year: "Jan - Dec 2023",
    tags: "Graphic Design, Social Media Management, Content Creation",
    description: `• Managed social media, created creative content, and increased member engagement. Utilized graphic design and digital marketing strategies for organizational branding.`,
    images: [mediaStaffKopma1, mediaStaffKopma2]
  },
  {
    title: "Data Entry Specialist - Central Bureau of Statistics (BPS)",
    year: "Feb - Mar 2022",
    tags: "Data Entry, Verification, Database Management",
    description: `• Ensured national survey data accuracy through meticulous data entry and verification to maintain data quality.
• Managed survey databases, ensuring data was stored neatly and on time.`,
  },
];

const toolkitGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: ["PHP", "Laravel", "MySQL", "Java", "Python"],
  },
  {
    title: "Mobile & IoT",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "IoT"],
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "Docker", "Linux", "CI/CD", "Postman"],
  },
  {
    title: "Testing & QA",
    icon: ShieldCheck,
    skills: ["Katalon Studio", "Maze", "Black Box Testing", "UAT", "Usability Testing"],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "Photoshop", "Canva", "CorelDRAW", "CapCut"],
  },
  {
    title: "Professional Skills",
    icon: Handshake,
    skills: ["Communication", "Teamwork", "Problem Solving", "Project Management", "English", "Bahasa Indonesia"],
  },
];

function Cursor() {
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHover(Boolean(target?.closest("a,button,[data-cursor]")));
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
        className="-translate-x-1/2 -translate-y-1/2 size-3 rounded-full mix-blend-difference"
        style={{ background: "var(--ink)" }}
      />
    </motion.div>
  );
}

function Nav() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
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
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            {link.label}
          </a>
        ))}
      </motion.nav>
    </header>
  );
}

function Hero() {
  const greetings = [
    "Hello", "Hi", "Hallo", "Bonjour", "Hola", "Ciao", "Hoi",
    "Nǐ hǎo (你好)", "Konnichiwa (こんにちは)", "Annyeong (안녕)",
    "Ahlan (أهلاً)", "Privet (Привет)", "Namaste (नमस्ते)",
  ];
  const [index, setIndex] = useState(0);
  const [heroCycle, setHeroCycle] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % greetings.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [greetings.length]);

  useEffect(() => {
    const cycleTimer = window.setInterval(() => {
      setHeroCycle((current) => current + 1);
    }, 15000);
    return () => window.clearInterval(cycleTimer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-12 pt-24">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Portfolio <span className="inline-block size-2 rounded-full bg-accent-hot" />{" "}
        <div className="relative h-[1.2em] overflow-hidden">
          <motion.div
            key={heroCycle}
            initial={{ y: 0 }}
            animate={{ y: "-6em" }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col text-center will-change-transform"
          >
            {years.map((year, index) => (
              <span
                key={year}
                className={`h-[1.2em] leading-[1.2em] transition-all duration-300 ${index === years.length - 1
                  ? "font-semibold text-accent-hot"
                  : "opacity-40"
                  }`}
              >
                {year}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.p>

      <h1 className="font-display text-center text-5xl font-light leading-[1.1] tracking-tight md:text-7xl">
        <span
          className="relative inline-block h-[1.1em] overflow-hidden align-bottom"
          style={{ minWidth: "5ch" }}
        >
          <motion.span
            key={greetings[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block italic"
          >
            {greetings[index]},
          </motion.span>
        </span>
        <br />
        <motion.div
          key={heroCycle}
          initial="hidden"
          animate="show"
          className="relative inline-flex items-center justify-center"
        >
          <motion.div
            variants={{
              hidden: {
                scale: 0,
                opacity: 0,
              },
              show: {
                scale: [0, 1, 1.35, 0],
                opacity: [0, 0.95, 0.65, 0],
                transition: {
                  duration: 1.15,
                  times: [0, 0.28, 0.68, 1],
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="absolute left-1/2 top-1/2 z-10 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-hot/90 blur-md"
          />

          <motion.span
            variants={{
              hidden: { opacity: 1 },
              show: {
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.4,
                },
              },
            }}
            className="font-display"
          >
            {"I'm ".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.3, y: 18, filter: "blur(10px)" },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="italic text-accent-hot">
              {"Mutiara Ayu".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.25, y: 28, rotate: 8, filter: "blur(12px)" },
                    show: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      rotate: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="inline-block origin-bottom"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.span>
        </motion.div>
      </h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="mt-10 flex w-full max-w-5xl flex-nowrap items-center justify-center gap-1.5 overflow-hidden text-center text-[7px] uppercase tracking-[0.15em] text-muted-foreground md:gap-4 md:text-[9px]"
      >
        <span>UX Writer</span>
        <span className="hidden h-px flex-1 bg-foreground/30 md:block" />
        <span>UI/UX Designer</span>
        <span className="hidden h-px flex-1 bg-foreground/30 md:block" />
        <span>Graphic Designer</span>
        <span className="hidden h-px flex-1 bg-foreground/30 md:block" />
        <span>Web Developer</span>
        <span className="hidden h-px flex-1 bg-foreground/30 md:block" />
        <span>Quality Assurance</span>
        <span className="hidden h-px flex-1 bg-foreground/30 md:block" />
        <span>Data Analyst</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-12 flex flex-col items-center gap-3 md:mt-16"
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

function Marquee() {
  const items = [
    "UX Writer",
    "•",
    "UI/UX Designer",
    "•",
    "Graphic Designer",
    "•",
    "Web Developer",
    "•",
    "Quality Assurance",
    "•",
    "Data Analyst",
    "•",
  ];

  return (
    <div className="overflow-hidden border-y border-border py-6">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-3xl italic md:text-5xl">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className={index % 2 === 1 ? "text-accent-hot" : ""}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden px-6 py-32 md:px-12 md:py-48" style={{
      backgroundImage: "radial-gradient(#d1d1d1 1px, transparent 1px)",
      backgroundSize: "24px 24px"
    }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          {/* Left Column: Info */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">01 - About</p>
                <h2 className="font-display text-5xl font-light tracking-tight md:text-7xl">About Me</h2>
                <div className="mt-8 space-y-6">
                  {aboutParagraphs.map((text, i) => (
                    <p key={i} className="max-w-[55ch] text-lg font-light leading-relaxed text-foreground md:text-xl">
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* Let's Connect */}
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">02 - Contact</p>
                <h3 className="font-display text-5xl font-light tracking-tight md:text-7xl">Let&apos;s Connect</h3>
                <div className="mt-8 grid gap-x-12 gap-y-4 text-base sm:grid-cols-2">
                  <a href="mailto:mutiaraayucd56@gmail.com" className="flex items-center gap-3 transition-colors hover:text-accent-hot">
                    <Mail className="size-5" /> mutiaraayucd56@gmail.com
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5" /> Jember, East Java
                  </div>
                  <a href="https://www.instagram.com/mutiaacd/" className="flex items-center gap-3 transition-colors hover:text-accent-hot">
                    <Instagram className="size-5" /> @mutiaacd
                  </a>
                  <a href="https://www.linkedin.com/in/mutiara-ayu-candra-dewi-05b96a346/" className="flex items-center gap-3 transition-colors hover:text-accent-hot">
                    <Linkedin className="size-5" /> Mutiara Ayu
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Portrait */}
          <div className="relative md:col-span-5">
            <motion.div
              style={{ y }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-[500px]">
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <img src={mutiaraPhoto} alt="Mutiara Ayu" className="w-full object-contain drop-shadow-[0_32px_60px_rgba(0,0,0,0.18)]" />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute bottom-10 -right-8 -z-10 text-yellow-400/70"
                >
                  <Sparkles className="size-20 md:size-28" fill="currentColor" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-32">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">03 - Academic Background</p>
            <h3 className="font-display text-5xl font-light tracking-tight md:text-7xl">Education</h3>
            <div className="mt-10 space-y-10">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.place}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="size-3 rounded-full bg-accent-hot" />
                    <div className="h-full w-px bg-border" />
                  </div>
                  <div className="-mt-1.5 pb-2">
                    <p className="font-mono text-sm font-bold text-accent-hot">{edu.year}</p>
                    <h4 className="mt-2 font-display text-2xl font-light md:text-3xl">{edu.place}</h4>
                    <p className="mt-1 text-muted-foreground">{edu.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Work() {
  const [view, setView] = useState<"work" | "certifications" | "organization">("work");

  return (
    <section id="work" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              04 - Projects
            </p>
            <h2 className="font-display text-5xl font-light md:text-7xl">
              <span className="italic">Project</span>
            </h2>
          </div>

          <div className="inline-flex items-center rounded-full border border-border bg-background/50 p-1 backdrop-blur-sm">
            <nav className="flex items-center gap-1">
              {[
                { id: "work", label: "Project" },
                { id: "organization", label: "Internship & Organization" },
                { id: "certifications", label: "Licenses & Certifications" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setView(tab.id as any)}
                  className="group relative rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all md:px-6 md:py-3"
                >
                  {view === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-foreground shadow-sm"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className={`relative z-10 whitespace-nowrap transition-colors duration-300 ${view === tab.id ? "text-background" : "text-muted-foreground group-hover:text-foreground"
                    }`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {view === "work" ? (
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectRow key={project.slug} index={index} {...project} />
            ))}
          </div>
        ) : view === "organization" ? (
          <div className="grid gap-4 md:grid-cols-2">
            {organizations.map((item, index) => (
              <ExpandableCard
                key={`${item.title}-${item.year}`}
                item={item}
                type="org"
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item, index) => (
              <ExpandableCard
                key={`${item.title}-${item.year}`}
                item={item}
                type="cert"
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ExpandableCard({ item, type, index }: { item: any; type: "org" | "cert"; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card/40 p-8 hover:bg-card/60 transition-colors"
    >
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-hot">
            {item.year}
          </p>
          <span className="text-[10px] font-mono text-muted-foreground">
            {type === "org" ? "Internship & Organization" : "License & Certification"}
          </span>
        </div>

        <h3 className="mt-6 font-display text-2xl leading-tight md:text-3xl">{item.title}</h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {(type === "org" ? item.tags : item.skills).split(",").map((tag: string) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {tag.trim()}
            </span>
          ))}
        </div>

        <motion.div
          layout
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="mt-8 space-y-6 border-t border-border/50 pt-8">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {type === "org" ? "About" : "Issuer"}
              </p>
              <p className="text-sm leading-relaxed text-foreground whitespace-pre-line">
                {type === "org" ? item.description : `Issued by ${item.issuer}`}
              </p>
            </div>

            {type === "org" && item.files && item.files.length > 0 && (
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certificate Attachments</p>
                <PdfCarousel files={item.files} />
              </div>
            )}

            {(item.images || item.image) && (
              <div className="mt-4">
                {item.images && item.images.length > 0 ? (
                  <div className="relative overflow-hidden rounded-xl border border-border bg-muted/10 shadow-sm w-full">
                    <ImageCarousel images={item.images} title={item.title} />
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group/img relative block overflow-hidden rounded-xl border border-border bg-muted/30 shadow-sm transition-all hover:border-accent-hot/30"
                  >
                    <img src={item.image} alt={item.title} className="w-full object-contain transition-transform duration-500 group-hover/img:scale-[1.02]" />
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="mt-auto pt-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent-hot transition-all hover:translate-x-1"
        >
          <span className="flex size-6 items-center justify-center rounded-full border border-accent-hot/20 bg-accent-hot/5 text-[14px]">
            {isExpanded ? "−" : "+"}
          </span>
          {isExpanded ? "Collapse Details" : "Discover More"}
        </button>
      </div>
    </motion.article>
  );
}

function PdfCarousel({ files }: { files: { name: string; path: string }[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % files.length);
  const prev = () => setCurrent((prev) => (prev - 1 + files.length) % files.length);

  return (
    <div className="group/pdf-carousel relative w-full border border-border/60 bg-[#0f1720]/5 rounded-[1.5rem] p-3 shadow-inner">
      <div className="flex items-center justify-between px-3 pb-2 mb-2 border-b border-border/40">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground truncate max-w-[70%]">
          {files[current].name}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={files[current].path}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full border border-border bg-background/80 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground hover:text-accent-hot hover:border-accent-hot/40 transition-all"
          >
            <ExternalLink className="size-3" />
            Open Full
          </a>

          {files.length > 1 && (
            <div className="flex items-center gap-1">
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="flex size-7 items-center justify-center rounded-full border border-border bg-background/80 hover:bg-muted text-foreground transition-all"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="flex size-7 items-center justify-center rounded-full border border-border bg-background/80 hover:bg-muted text-foreground transition-all"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-white shadow-sm w-full aspect-[1.414/1] h-auto">
        <iframe
          key={files[current].path}
          src={`${files[current].path}#toolbar=0&navpanes=0&view=FitH`}
          className="absolute -top-[3.5%] -left-[3.5%] w-[107%] h-[107%] border-none rounded-xl max-w-none"
          title={files[current].name}
        />
      </div>
    </div>
  );
}

function ImageCarousel({ images, captions, title }: { images: string[]; captions?: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="group/carousel relative h-full w-full bg-card/40 flex items-center justify-center">
      {/* Current Image Container - Vertically Scrollable for long screenshots */}
      <div className="h-full w-full overflow-y-auto scrollbar-hide flex flex-col justify-start p-2">
        <motion.img
          key={current}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="w-full h-auto object-contain align-top rounded-lg"
        />
      </div>

      {/* Caption Overlay */}
      {captions && captions[current] && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            key={`caption-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="whitespace-nowrap rounded-full bg-background/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-lg backdrop-blur-md border border-white/10"
          >
            {captions[current]}
          </motion.div>
        </div>
      )}

      {/* Navigation Controls - Always Visible on Left/Right Middle */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground hover:text-accent-hot shadow-lg backdrop-blur-md border border-border transition-all z-20 hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground hover:text-accent-hot shadow-lg backdrop-blur-md border border-border transition-all z-20 hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`size-1.5 rounded-full transition-all hover:bg-accent-hot/50 ${
                  i === current ? "bg-accent-hot w-4" : "bg-foreground/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectRow({
  n,
  slug,
  title,
  tag,
  year,
  summary,
  stack,
  role: roles,
  website,
  github,
  images,
  imageCaptions,
  demoAccess,
  index,
}: (typeof projects)[number] & { index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border-b border-border transition-colors hover:bg-muted/30"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full flex-col gap-4 py-8 text-left md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="font-mono text-sm text-muted-foreground">{n}</span>
          <h3 className="font-display text-2xl font-light leading-tight md:text-3xl">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-4 pl-8 md:gap-8 md:pl-0">
          <span className="text-sm text-muted-foreground">{tag}</span>
          <span className="font-mono text-sm text-muted-foreground">{year}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 90 : 0 }}
            className="text-lg text-accent-hot"
          >
            →
          </motion.span>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-16 pt-4">
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: Mockup */}
            <div className="space-y-10">
              {demoAccess && (
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-accent-hot/10 bg-accent-hot/[0.03] px-5 py-3 mx-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-hot">Demo Access</span>
                    <div className="h-3 w-px bg-accent-hot/20" />
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] uppercase text-muted-foreground/60">Email</span>
                        <span className="font-mono text-[11px] font-medium">{demoAccess.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] uppercase text-muted-foreground/60">PW</span>
                        <span className="font-mono text-[11px] font-medium">{demoAccess.password}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card/60 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                {/* Browser Header */}
                <div className="flex h-10 items-center gap-2 border-b border-border bg-muted/40 px-4">
                  <div className="size-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="size-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="size-2.5 rounded-full bg-[#28C840]" />
                </div>

                {/* Preview Area */}
                <div className="h-[calc(100%-2.5rem)] w-full">
                  {images && images.length > 0 ? (
                    <ImageCarousel images={images} captions={imageCaptions} title={title} />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-card/40">
                      <div className="flex flex-col items-center gap-4 text-muted-foreground/40">
                        <Monitor className="size-16" strokeWidth={1} />
                        <span className="text-xs font-medium uppercase tracking-[0.2em]">Screenshot / Preview UI</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Metadata */}
            <div className="flex flex-col space-y-10">
              {/* Roles */}
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Role</p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <span key={role} className="rounded-full border border-border px-4 py-1.5 text-[11px] font-medium transition-colors hover:border-accent-hot/50">
                      {role.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border/50" />

              {/* Description */}
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Brief Description</p>
                <p className="text-xl font-light leading-relaxed text-muted-foreground/90">
                  {summary}
                </p>
              </div>

              <div className="h-px bg-border/50" />

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {website ? (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center justify-center gap-2.5 rounded-full bg-foreground px-8 text-xs font-bold uppercase tracking-widest text-background transition-all hover:scale-[1.03] hover:shadow-lg active:scale-95"
                  >
                    <ExternalLink className="size-3.5" />
                    Live Demo
                  </a>
                ) : null}
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center justify-center gap-2.5 rounded-full border border-border bg-card px-8 text-xs font-bold uppercase tracking-widest transition-all hover:bg-muted hover:scale-[1.03] active:scale-95"
                  >
                    <Github className="size-3.5" />
                    GitHub
                  </a>
                ) : null}
                {!website && !github && null}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-foreground px-6 py-32 text-background md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              05 - Skills
            </p>
            <h2 className="font-display text-5xl font-light md:text-7xl">
              Tools & <span className="italic text-accent-hot">Stack</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-background/65">
            The tools, technologies, testing methods, soft skills, and languages I use across design,
            development, and product evaluation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {toolkitGroups.map((group, index) => {
            const Icon = group.icon;
            const isProfessional = group.title === "Professional Skills";

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`flex flex-col rounded-[1.5rem] border border-background/15 bg-background/6 p-6 h-full min-h-[150px] md:min-h-[180px] transition-all hover:bg-background/8 hover:border-background/25 ${isProfessional ? "sm:col-span-2 lg:col-span-3 xl:col-span-2" : ""
                  }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full border border-background/15 bg-background/8 text-accent-hot">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="font-display text-lg font-medium tracking-tight">{group.title}</h3>
                </div>

                <p className="mt-2 text-sm md:text-base text-background/80 font-light leading-relaxed tracking-wide">
                  {group.skills.join("  •  ")}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}





function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-8 text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:px-12">
      <span>© 2026 Mutiara Ayu Candra Dewi</span>
      <span>Made in Jember, East Java</span>
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
      <Footer />
    </main>
  );
}
