import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useSpring } from "framer-motion";
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
import pythonCertificate1 from "@/assets/sertifikat/python-programming-1.png";
import pythonCertificate2 from "@/assets/sertifikat/python-programming-2.png";
import pythonCertificate3 from "@/assets/sertifikat/python-programming-3.png";
import visualizationCertificate1 from "@/assets/sertifikat/data-visualization-1.png";
import visualizationCertificate2 from "@/assets/sertifikat/data-visualization-2.png";
import aiCreativeWork from "@/assets/sertifikat/AI Fluency for Creative Work.png";
import aiBuilders from "@/assets/sertifikat/AI Fluency for Builders.png";
import webDevComp1 from "@/assets/Sertifikasi 2/bnsp-web-1.png";
import webDevComp2 from "@/assets/Sertifikasi 2/bnsp-web-2.png";
import toeflCertificate from "@/assets/Sertifikasi 2/toefl-1.png";
import eptCertificate from "@/assets/Sertifikasi 2/ept-1.png";
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
import jrGD3 from "@/assets/Sertifikasi 2/bnsp-design-1.png";
import jrGD4 from "@/assets/Sertifikasi 2/bnsp-design-2.png";
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
  "Applied Bachelor's Degree (D4) graduate in Informatics Engineering from State Polytechnic of Jember, with experience in Full-Stack Web Development, Software Quality Assurance (SQA), Technical Writing, and Data Analysis.",
  "Experienced in developing web applications across frontend and backend, conducting software testing, and preparing technical documentation, including API documentation, user guides, and test reports. Also experienced in data processing, data cleaning, and data analysis using various tools and programming languages.",
  "Interested in developing digital solutions through application development, software quality assurance, technical documentation, and data analysis."
];

const certifications = [
  {
    title: "AI Fluency for Creative Work",
    description: "Integrating AI into creative workflows using the 4D framework, Creative Value Lens, and Production Lens to improve writing, media design, and content evaluation while preserving quality and originality.",
    category: "training",
    issuer: "Anthropic Academy",
    year: "2026",
    period: "Sep 2026",
    startDate: "2026-09",
    skills: "4D Framework, Creative Workflows, Content Evaluation, AI-Assisted Writing",
    image: aiCreativeWork,
  },
  {
    title: "AI Fluency for Builders",
    description: "Applying the 4D framework (Delegation, Description, Discernment, and Diligence) to AI-assisted product development, from defining briefs and acceptance tests to evaluating code, refining UX, and preparing for release.",
    category: "training",
    issuer: "Anthropic Education",
    year: "2026",
    period: "Sep 2026",
    startDate: "2026-09",
    skills: "4D Framework, AI-Assisted Development, Acceptance Testing, Code Review",
    image: aiBuilders,
  },
  {
    title: "Getting Started with Python Programming",
    description: "Completed 60 hours of Python training covering data handling, control flow, arrays, matrices, functions, OOP, and popular libraries, with practice in VS Code, Jupyter Notebook, and Google Colab.",
    category: "training",
    issuer: "Dicoding Indonesia",
    year: "2025",
    period: "Oct 2025",
    startDate: "2025-10",
    skills: "Python, Control Flow, Functions, Object-Oriented Programming",
    images: [pythonCertificate1, pythonCertificate2, pythonCertificate3],
  },
  {
    title: "Data Visualization Fundamentals",
    description: "Completed 16 hours of training in data preparation and visualization with Google Sheets, applying storytelling, Gestalt principles, preattentive attributes, and visual design to communicate data effectively.",
    category: "training",
    issuer: "Dicoding Indonesia",
    year: "2025",
    period: "Oct 2025",
    startDate: "2025-10",
    skills: "Google Sheets, Data Preparation, Data Visualization, Data Storytelling",
    images: [visualizationCertificate1, visualizationCertificate2],
  },
  {
    title: "Web Developer Competency Certificate",
    category: "certifications",
    issuer: "National Professional Certification Agency (BNSP)",
    year: "2026",
    period: "Apr 2026 – Apr 2029",
    startDate: "2026-04",
    score: 0,
    skills: "OOP, SQL, Algorithms, Debugging, Code Review, Software Testing",
    images: [webDevComp1, webDevComp2],
  },
  {
    title: "Test of English Proficiency and Academic (TOEFL Prediction Test)",
    category: "certifications",
    issuer: "Elskill English Course",
    year: "2026",
    period: "Sep 2026 – Sep 2028",
    startDate: "2026-09",
    score: 640,
    skills: "English Proficiency",
    image: toeflCertificate,
  },
  {
    title: "English Proficiency Test (EPT)",
    category: "certifications",
    issuer: "Language Unit (UPA Bahasa), State Polytechnic of Jember",
    year: "2026",
    period: "Mar 2026 – Mar 2026",
    startDate: "2026-03",
    score: 54,
    skills: "English Proficiency",
    image: eptCertificate,
  },
  {
    title: "Junior Graphic Designer",
    category: "certifications",
    issuer: "National Professional Certification Agency (BNSP)",
    year: "2024",
    period: "Aug 2024 – Aug 2027",
    startDate: "2024-08",
    score: 0,
    skills: "Graphic Design, Visual Communication, Design Brief",
    images: [jrGD3, jrGD4],
  },
  {
    title: "Fundamentals of Artificial Intelligence",
    description: "Explored AI fundamentals, data preparation for AI development, and practical applications of machine learning and deep learning.",
    category: "training",
    issuer: "Dicoding Indonesia",
    year: "2025",
    period: "Oct 2025",
    startDate: "2025-10",
    skills: "AI Fundamentals, Data Preparation, Machine Learning, Deep Learning",
    images: [funAI1, funAI2],
  },
  {
    title: "1st Place Best Poster (KampSewa)",
    category: "achievements",
    issuer: "TIF Exhibition",
    year: "2025",
    skills: "Poster Design, Visual Creativity, Visual Communication",
    images: [bestPoster1, bestPoster2],
  },
  {
    title: "Front-End Web Development for Beginners",
    description: "Completed 45 hours of training in BOM, DOM manipulation, JavaScript events, and the Web Storage API, culminating in an interactive website with browser-based data storage.",
    category: "training",
    issuer: "Dicoding Indonesia",
    year: "2025",
    period: "Jan 2025",
    startDate: "2025-01",
    skills: "JavaScript, DOM Manipulation, Event Handling, Web Storage API",
    images: [frontEnd1, frontEnd2],
  },
  {
    title: "Introduction to Data Science with R",
    description: "Learned data science fundamentals and practiced basic R commands for data processing through hands-on exercises in the DQLab LiveCode Editor.",
    category: "training",
    issuer: "DQLab",
    year: "2025",
    period: "Jan 2025",
    startDate: "2025-01",
    skills: "R Programming, Data Science Fundamentals, Data Processing",
    image: introDataSci,
  },
  {
    title: "Mini Bootcamp: Introduction to Data Analytics Batch 4",
    description: "Practiced data processing and analysis with Excel, SQL, and Python through case studies, alongside an introduction to machine learning and AI.",
    category: "training",
    issuer: "DQLab",
    year: "2025",
    period: "Jan 2025",
    startDate: "2025-01",
    skills: "Excel, SQL, Python, Data Analytics",
    image: miniBootcampDA,
  },
  {
    title: "Basic Excel Quiz",
    description: "Validated foundational Microsoft Excel skills through quizzes covering essential spreadsheet functions and features for independent data processing.",
    category: "training",
    issuer: "DQLab",
    year: "2025",
    period: "Jan 2025",
    startDate: "2025-01",
    skills: "Microsoft Excel, Spreadsheet Fundamentals, VLOOKUP, Charts",
    image: basicExcel,
  },
  {
    title: "Study Case Bootcamp: Data Analyst with Excel",
    description: "Practiced cleaning, processing, and analyzing data in Microsoft Excel through case studies to extract business insights and support data analyst workflows.",
    category: "training",
    issuer: "DQLab",
    year: "2025",
    period: "Jan 2025",
    startDate: "2025-01",
    skills: "Microsoft Excel, Data Cleaning, Data Analysis, Pivot Tables",
    image: studyCaseExcel,
  },
  {
    title: "Study Case Bootcamp: Data Analyst with SQL & Python",
    description: "Solved data analysis case studies using SQL queries for database management and Python for data processing and analysis.",
    category: "training",
    issuer: "DQLab",
    year: "2025",
    period: "Jan 2025",
    startDate: "2025-01",
    skills: "SQL Queries, Python, Data Processing, Data Analysis",
    image: studyCaseSQLPy,
  },
  {
    title: "Study Case Bootcamp: Machine Learning & AI for Beginners",
    description: "Explored introductory AI and machine learning concepts through case studies, learning how basic algorithms can address data problems.",
    category: "training",
    issuer: "DQLab",
    year: "2025",
    period: "Jan 2025",
    startDate: "2025-01",
    skills: "Machine Learning Fundamentals, AI Fundamentals, Data Preprocessing",
    image: studyCaseMLAI,
  },
  {
    title: "Short Class Graphic Design: Color and Typography",
    description: "Studied color theory and typography fundamentals to create clear, visually engaging designs through effective color combinations and type selection.",
    category: "training",
    issuer: "MySkill",
    year: "2025",
    period: "Mar 2025",
    startDate: "2025-03",
    skills: "Color Theory, Typography, Visual Communication",
    image: shortClassGD,
  },
  {
    title: "Short Class Software Engineering: Frontend Development",
    description: "Learned frontend development fundamentals and the technologies used to build functional, interactive user interfaces for websites and applications.",
    category: "training",
    issuer: "MySkill",
    year: "2025",
    period: "Mar 2025",
    startDate: "2025-03",
    skills: "HTML, Frontend Fundamentals, User Interfaces",
    image: shortClassSE,
  },
  {
    title: "Short Class Product Management: Introduction to Product Management",
    description: "Explored the Product Manager role and product development workflow, from identifying user problems and planning features to delivering business value.",
    category: "training",
    issuer: "MySkill",
    year: "2025",
    period: "Mar 2025",
    startDate: "2025-03",
    skills: "Product Management, User Needs, Feature Planning, Business Value",
    image: shortClassPM,
  },
  {
    title: "IQACS for Coffee Greenhouse Nursery",
    category: "training",
    issuer: "Merdeka Belajar Kampus Merdeka Program",
    year: "2024",
    skills: "UI/UX Design, Web & Mobile Development, IoT Integration, System Testing",
    images: [iqacsCoffee1, iqacsCoffee2],
  },
  {
    title: "2nd Place Video Competition (KampSewa)",
    category: "achievements",
    issuer: "TIF Exhibition",
    year: "2024",
    skills: "Visual Creativity, Video Editing",
    image: videoComp2nd,
  },
  {
    title: "3rd Place Poster Competition (KampSewa)",
    category: "achievements",
    issuer: "TIF Exhibition",
    year: "2024",
    skills: "Graphic Design, Poster Design, Visual Creativity, Visual Communication",
    image: posterComp3rd,
  },
  {
    title: "Junior Graphic Designer (Vocational School Graduate Academy 2024)",
    description: "Applied design and visual communication principles, interpreted design briefs, and used design software to produce complete graphic design work.",
    category: "training",
    issuer: "Ministry of Communication and Informatics / BPSDMP Surabaya",
    year: "2024",
    period: "Jul 2024",
    startDate: "2024-07",
    skills: "Design Principles, Visual Communication, Design Briefs, Design Software",
    images: [jrGD1, jrGD2],
  },
  {
    title: "Junior Web Developer (Vocational School Graduate Academy 2023)",
    description: "Practiced building web interfaces, writing structured code, using existing libraries and components, and following programming best practices.",
    category: "training",
    issuer: "Ministry of Communication and Informatics / BPSDMP Surabaya",
    year: "2023",
    period: "Jun – Jul 2023",
    startDate: "2023-06",
    skills: "Web Development, User Interfaces, Structured Programming, Code Quality",
    images: [jrWD1, jrWD2],
  },
  {
    title: "1st Place Application Development (Ngantin Kuy)",
    category: "achievements",
    issuer: "TIF Exhibition",
    year: "2023",
    skills: "Innovation & Application Development",
    image: appDevNgantinKuy,
  },
  {
    title: "Fundamental Graphic Design",
    description: "Studied visual principles, layout, color combinations, and design software for visual communication. Completed the program with an Excellent Grade.",
    category: "training",
    issuer: "YBM BRILiaN",
    year: "2023",
    period: "Jan – Mar 2023",
    startDate: "2023-01",
    skills: "Design Principles, Layout Design, Color Theory, CorelDRAW",
    image: fundamentalGD,
  }
];

const education = [
  {
    place: "State Polytechnic of Jember - East Java",
    detail: "Applied Bachelor's Degree (D4) - Informatics Engineering",
    year: "Sep 2022 - Jun 2026",
    activities: [
      "General Secretary – Student Cooperative Organization POLIJE (Dec 2023–Nov 2024): Directed administrative operations across 138 official documents and 16 statutory record books, supported 27 governance meetings, and formulated TORs and strategic funding priorities for 37 work programs.",
      "Digital Media Staff – Student Cooperative Organization POLIJE (Jan–Dec 2023): Managed social media branding and promotional campaigns, executed 3 key work programs, and led the end-to-end design, verification, printing, and distribution of official member ID cards (KTA).",
    ],
  },
  {
    place: "State Senior High School 3 Jember - East Java",
    detail: "Science Major",
    year: "Jul 2019 - May 2022",
    activities: [
      "Second Vice Chair, PMR Wira (2021–2022): coordinated members and planned social and humanitarian activities.",
      "Won 3rd Place in the health and humanitarian poster competition at Laga Paramaduta XIII Special Virtual Edition, organized by KSR PMI.",
      "Participated in a Ministry of Health poster design competition, strengthening visual communication and design skills.",
    ],
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

const workExperience = [
  {
    role: "Data Analyst",
    company: "Codveda Technologies",
    period: "Sep 2026 – Oct 2026",
    type: "Apprenticeship",
    location: "Kebonsari, Sumbersari, Jember Regency, East Java",
    highlights: [
      "Transformed datasets into actionable insights through data cleaning, exploratory analysis, visualization, and machine learning with Python.",
      "Analyzed housing prices and historical stock trends, clustered Iris flowers, and predicted customer churn while addressing data leakage, class imbalance, and feature scaling.",
      "Developed a Random Forest churn model achieving 94.15% accuracy and a 79.58% F1-score on test data, supported by clear visualizations and structured documentation.",
    ],
  },
  {
    role: "Technical Writer & Software Quality Assurance (SQA)",
    company: "ADS Digital Partner (PT Adma Digital Solusi)",
    period: "Jun 2026 – Oct 2026",
    type: "Apprenticeship",
    location: "Kedung Baruk, Rungkut, Surabaya, East Java",
    highlights: [
      "Created and maintained API specifications, user guides, test reports, and feature documentation for web and mobile systems.",
      "Performed functional testing, regression testing, and retesting; prepared test cases, logged bugs, and documented test results.",
      "Facilitated daily scrums to track team progress and blockers, and collaborated with developers to verify bug fixes and keep documentation aligned with the latest implementation.",
    ],
  },
  {
    role: "UI/UX Writer",
    company: "SEAL (Social Economic Accelerator Lab)",
    period: "Aug 2025 – Dec 2025",
    type: "Internship",
    location: "Purwoasri, Singosari, Malang Regency, East Java",
    highlights: [
      "Developed UX content informed by user research and usability testing, including chatbot and interactive form microcopy with a consistent tone and voice.",
      "Created content strategies based on user journeys, conducted A/B testing, and iterated UX copy based on evaluation results.",
      "Collaborated with teams and stakeholders on digital product development using design thinking and agile practices.",
    ],
  },
  {
    role: "UX Writer",
    company: "Department of Communication and Informatics, East Java Province",
    period: "Aug 2025 – Nov 2025",
    type: "Internship",
    location: "Gayungan, Surabaya, East Java",
    highlights: [
      "Developed and managed digital service content for Majapahit Digital (Majadigi), making information clearer, more informative, and easier to understand.",
      "Published and maintained content through the CMS, validated and edited information, and prepared content plans.",
      "Contributed to usability testing and Maja.AI chatbot content by defining intents and question variations to improve the user experience.",
    ],
  },
  {
    role: "Data Entry Specialist",
    company: "Statistics Indonesia (BPS)",
    period: "Feb 2022 – Mar 2022",
    type: "Apprenticeship",
    location: "Slawu, Patrang, Jember Regency, East Java",
    highlights: [
      "Entered and verified national survey data to ensure accuracy and completeness.",
      "Organized survey records in structured databases and maintained accurate, timely data storage.",
    ],
  },
];

const toolkitGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "Typescript", "React"],
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: ["PHP", "Laravel", "MySQL", "Java", "Python"],
  },
  {
    title: "Mobile & IoT",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Kotlin", "IoT"],
  },
  {
    title: "Data Analysis",
    icon: ChartColumn,
    skills: ["Microsoft Excel", "Google Sheets", "Python", "SQL", "Jupyter Notebook", "Anaconda", "Google Colab"],
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
    skills: ["Communication", "Teamwork", "Problem Solving", "Project Management"],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["English — Intermediate", "Bahasa Indonesia — Professional"],
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
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#work" },
    { label: "Skills", href: "#skills" },
  ];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 16);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`rounded-full border px-4 py-2 font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 ${scrolled ? "border-border bg-background shadow-sm" : "border-transparent bg-transparent"}`}
          onClick={() => setOpen(false)}
        >
          macd<span className="text-accent-hot">.</span>
        </motion.a>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-background/60 backdrop-blur-md md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="block h-px w-5 bg-foreground origin-center"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
            className="block h-px w-5 bg-foreground"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="block h-px w-5 bg-foreground origin-center"
          />
        </button>
      </header>

      {/* Mobile full-screen overlay menu */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl md:hidden"
      >
        <nav className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={false}
              animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
              transition={{ delay: open ? i * 0.08 : 0, duration: 0.35 }}
              onClick={() => setOpen(false)}
              className="font-display text-5xl font-light tracking-tight transition-colors hover:text-accent-hot"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <motion.p
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ delay: open ? 0.3 : 0 }}
          className="absolute bottom-10 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          mutiaraayucd.vercel.app
        </motion.p>
      </motion.div>
    </>
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
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-12 pt-20 md:pt-24">
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

      <h1 className="max-w-full font-display text-center text-[clamp(1.5rem,6vw,4.5rem)] font-light leading-[1.2] tracking-tight">
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
            <span className="font-bold italic text-accent-hot">
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
        className="mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-[10px] uppercase tracking-[0.15em] text-muted-foreground lg:gap-4"
      >
        <span>Full-Stack Web Development</span>
        <span className="hidden h-px flex-1 bg-foreground/30 md:block" />
        <span>Software Quality Assurance (SQA)</span>
        <span className="hidden h-px flex-1 bg-foreground/30 md:block" />
        <span>Technical Writing</span>
        <span className="hidden h-px flex-1 bg-foreground/30 md:block" />
        <span>Data Analysis</span>
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
    "Full-Stack Web Development",
    "•",
    "Software Quality Assurance (SQA)",
    "•",
    "Technical Writing",
    "•",
    "Data Analysis",
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
  return (
    <section id="about" className="relative px-6 py-16 md:px-12 md:py-24 lg:py-32" style={{
      backgroundImage: "radial-gradient(#d1d1d1 1px, transparent 1px)",
      backgroundSize: "24px 24px"
    }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Info */}
          <div className="min-w-0 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">01 - About</p>
                <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight">About Me</h2>
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
                <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight">Let&apos;s Connect</h3>
                <div className="mt-8 grid gap-x-6 gap-y-4 text-sm sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 [&_svg]:shrink-0">
                  <a href="mailto:mutiaraayucd56@gmail.com" className="flex min-w-0 items-center gap-3 [overflow-wrap:anywhere] transition-colors hover:text-accent-hot">
                    <Mail className="size-5" /> mutiaraayucd56@gmail.com
                  </a>
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
          <div className="relative order-first min-w-0 lg:order-last lg:col-span-5">
            <div className="relative flex justify-center px-4 py-4">
              <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
                <img src={mutiaraPhoto} alt="Mutiara Ayu" className="relative z-10 block h-auto max-h-[65svh] w-full object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.18)]" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-4 right-0 text-yellow-400/70"
                >
                  <Sparkles className="size-20 md:size-28" fill="currentColor" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-32">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">03 - Academic Background</p>
            <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight">Education</h3>
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
                    <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground md:text-base marker:text-accent-hot">
                      {edu.activities.map((activity) => <li key={activity}>{activity}</li>)}
                    </ul>
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
function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">04 - Experience</p>
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight">Work Experience</h2>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {workExperience.map((experience) => (
            <article key={experience.company} className="grid min-w-0 gap-6 py-8 md:gap-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-accent-hot">{experience.period}</p>
                <span className="mt-3 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium">{experience.type}</span>
                <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                  {experience.location}
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold leading-snug md:text-2xl">{experience.role}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground md:text-base">{experience.company}</p>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground md:text-base marker:text-accent-hot">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const credentialGridRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<"work" | "certifications" | "training" | "achievements">("work");
  useEffect(() => {
    const grid = credentialGridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>("[data-credential-card]"));
    const resizeCards = () => {
      const height = Math.max(0, ...cards.map((card) => {
        const preview = card.querySelector<HTMLElement>("[data-card-preview]");
        const action = card.querySelector<HTMLElement>("[data-card-action]");
        const style = getComputedStyle(card);
        return (preview?.offsetHeight ?? 0) + (action?.offsetHeight ?? 0)
          + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
          + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      }));
      grid.style.setProperty("--credential-card-height", `${Math.ceil(height)}px`);
    };
    const observer = new ResizeObserver(resizeCards);
    grid.querySelectorAll("[data-card-preview], [data-card-action]").forEach((element) => observer.observe(element));
    resizeCards();
    return () => observer.disconnect();
  }, [view]);
  const visibleCredentials = certifications
    .filter((item) => item.category === view)
    .sort((a, b) => (b.startDate ?? b.year).localeCompare(a.startDate ?? a.year));

  return (
    <section id="work" className="px-6 py-20 md:py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex min-w-0 flex-col gap-6 md:mb-16 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              05 - Portfolio
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight">
              <span className="italic">Portfolio</span>
            </h2>
          </div>

          <div className="w-full min-w-0 xl:w-auto">
            <div className="inline-flex items-center rounded-full border border-border bg-background/50 p-1 backdrop-blur-sm">
              <nav aria-label="Portfolio categories" className="flex flex-wrap items-center gap-1">
                {([
                  { id: "work", label: "Projects" },
                  { id: "certifications", label: "Certifications" },
                  { id: "training", label: "Training" },
                  { id: "achievements", label: "Achievements" },
                ] as const).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setView(tab.id)}
                    aria-pressed={view === tab.id}
                    className="group relative rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all md:px-6 md:py-3"
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
        </div>

        {view === "work" ? (
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectRow key={project.slug} index={index} {...project} />
            ))}
          </div>
        ) : (
          <div ref={credentialGridRef} className="grid items-start gap-4 md:grid-cols-2">
            {visibleCredentials.map((item, index) => (
              <ExpandableCard
                key={`${item.title}-${item.year}`}
                item={item}
                type={view}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ExpandableCard({ item, type, index }: { item: any; type: "org" | "certifications" | "training" | "achievements"; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      data-credential-card
      style={{ minHeight: "var(--credential-card-height, auto)" }}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card/40 p-5 md:p-8 hover:bg-card/60 transition-colors"
    >
      <div>
        <div data-card-preview>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-hot">
            {item.period ?? item.year}
          </p>
          <span className="text-[10px] font-mono text-muted-foreground">
            {{ org: "Internship & Organization", certifications: "Certification", training: "Training", achievements: "Achievement" }[type]}
          </span>
        </div>

        <h3 className="mt-6 font-display text-2xl leading-tight md:text-3xl">{item.title}</h3>

        {(type === "training" || type === "certifications") && (
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            {typeof item.score === "number" && <p className="font-medium text-foreground">Score: {item.score}</p>}
            {item.description && <p className="leading-relaxed">{item.description}</p>}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {(type === "org" ? item.tags : item.skills).split(",").map((tag: string) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {tag.trim()}
            </span>
          ))}
        </div>

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

      <div data-card-action className="mt-auto pt-8">
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
        className="flex w-full flex-col gap-3 py-6 text-left md:flex-row md:items-center md:justify-between"
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
    <section id="skills" className="bg-foreground px-6 py-20 text-background md:py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              06 - Skills
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight">
              Tools & <span className="italic text-accent-hot">Stack</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-background/65">
            The tools, technologies, testing methods, soft skills, and languages I use across design,
            development, and product evaluation.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toolkitGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex h-full min-h-[180px] min-w-0 flex-col rounded-[1.5rem] border border-background/15 bg-background/6 p-6 transition-all hover:bg-background/8 hover:border-background/25"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-background/15 bg-background/8 text-accent-hot">
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
      <Experience />
      <Work />
      <Skills />
      <Footer />
    </main>
  );
}
