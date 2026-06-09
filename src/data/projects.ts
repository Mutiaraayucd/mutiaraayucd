import img0 from "@/assets/sage/0.png";
import img1 from "@/assets/sage/1.png";
import img2 from "@/assets/sage/2.png";
import img3 from "@/assets/sage/3.png";
import img4 from "@/assets/sage/4.png";
import img5 from "@/assets/sage/5.png";
import img6 from "@/assets/sage/6.png";
import sijo1 from "@/assets/sijo/1.png";
import sijo2 from "@/assets/sijo/2.png";
import sijo3 from "@/assets/sijo/3.png";
import sijo4 from "@/assets/sijo/4.png";
import sijo5 from "@/assets/sijo/5.png";
import sijo6 from "@/assets/sijo/6.png";
import sijo7 from "@/assets/sijo/7.png";
import sijo8 from "@/assets/sijo/8.png";
import siakad1 from "@/assets/siakad/1.png";
import siakad2 from "@/assets/siakad/2.png";
import siakad3 from "@/assets/siakad/3.png";
import siakad4 from "@/assets/siakad/4.png";
import siakad5 from "@/assets/siakad/5.png";
import siakad6 from "@/assets/siakad/6.png";
import siakad7 from "@/assets/siakad/7.png";
import siakad8 from "@/assets/siakad/8.png";
import siakad9 from "@/assets/siakad/9.png";
import siakad10 from "@/assets/siakad/10.png";
import siakad11 from "@/assets/siakad/11.png";
import kampsewaLogin from "@/assets/kampsewa/login.png";
import kampsewaLanding1 from "@/assets/kampsewa/landingpage1.png";
import kampsewaLanding2 from "@/assets/kampsewa/landingpage2.png";
import kampsewaLanding3 from "@/assets/kampsewa/landingpage3.png";
import kampsewaCust from "@/assets/kampsewa/cust.png";
import kampsewaDev from "@/assets/kampsewa/dev.png";
import iqacs1 from "@/assets/iqacs/---.png";
import iqacs2 from "@/assets/iqacs/--.png";
import iqacs3 from "@/assets/iqacs/-.png";
import iqacs4 from "@/assets/iqacs/Bearanda.png";
import iqacs5 from "@/assets/iqacs/Kontak Kami.png";
import iqacs6 from "@/assets/iqacs/Layanan.png";
import iqacs7 from "@/assets/iqacs/Tentang Kami.png";
import iqacs8 from "@/assets/iqacs/blog.png";
import iqacs9 from "@/assets/iqacs/desain 3d prototype.png";
import iqacs10 from "@/assets/iqacs/desain sistem iot.png";
import iqacs11 from "@/assets/iqacs/mobile.png";
import jt1 from "@/assets/juragantravel/Cuplikan layar 2026-06-05 194653.png";
import jt2 from "@/assets/juragantravel/Cuplikan layar 2026-06-05 194804.png";
import jt3 from "@/assets/juragantravel/Cuplikan layar 2026-06-05 194826.png";
import jt4 from "@/assets/juragantravel/Cuplikan layar 2026-06-05 194844.png";
import jt5 from "@/assets/juragantravel/Cuplikan layar 2026-06-05 194855.png";
import jt6 from "@/assets/juragantravel/Cuplikan layar 2026-06-05 194917.png";
import jt7 from "@/assets/juragantravel/Cuplikan layar 2026-06-05 194936.png";
import jt8 from "@/assets/juragantravel/Cuplikan layar 2026-06-05 195006.png";

// Sembako Previews
import sembako1 from "@/assets/sembako/WhatsApp Image 2026-06-05 at 19.59.54.jpeg";
import sembako2 from "@/assets/sembako/WhatsApp Image 2026-06-05 at 19.59.47.jpeg";
import sembako3 from "@/assets/sembako/WhatsApp Image 2026-06-05 at 19.59.05.jpeg";
import sembako4 from "@/assets/sembako/WhatsApp Image 2026-06-05 at 19.59.27.jpeg";
import sembako5 from "@/assets/sembako/WhatsApp Image 2026-06-05 at 19.59.11.jpeg";
import sembako6 from "@/assets/sembako/WhatsApp Image 2026-06-05 at 19.59.32.jpeg";

// Ngantinkuy Previews
import ngantinkuy1 from "@/assets/ngantinkuy/WhatsApp Image 2026-06-05 at 19.54.58.jpeg";
import ngantinkuy2 from "@/assets/ngantinkuy/WhatsApp Image 2026-06-05 at 19.55.40.jpeg";
import ngantinkuy3 from "@/assets/ngantinkuy/WhatsApp Image 2026-06-05 at 19.55.55.jpeg";
import ngantinkuy4 from "@/assets/ngantinkuy/WhatsApp Image 2026-06-05 at 19.55.30.jpeg";
import ngantinkuy5 from "@/assets/ngantinkuy/WhatsApp Image 2026-06-05 at 19.55.10.jpeg";
import ngantinkuy6 from "@/assets/ngantinkuy/WhatsApp Image 2026-06-05 at 19.54.38.jpeg";
import ngantinkuy7 from "@/assets/ngantinkuy/WhatsApp Image 2026-06-05 at 19.54.30.jpeg";

export type ProjectEntry = {
  n: string;
  slug: string;
  title: string;
  tag: string;
  year: string;
  period?: string;
  website?: string;
  github?: string;
  demoAccess?: {
    email: string;
    password: string;
  };
  color: string;
  summary: string;
  challenge: string;
  outcome: string;
  role: string[];
  deliverables: string[];
  details: string[];
  stack?: string;
  image?: string;
  images?: string[];
  imageCaptions?: string[];
};

export const projects: ProjectEntry[] = [
  {
    n: "01",
    slug: "jagung-hibrida",
    title: "Hybrid Corn Harvest Prediction & Seed Stock System",
    tag: "Machine Learning · Data Analysis · Web Development",
    year: "2026",
    period: "Apr 2026",
    website: "https://appstokvps.musyah.my.id/dashboard",
    demoAccess: {
      email: "Admin@gmail.com",
      password: "Admin123",
    },
    color: "oklch(0.55 0.18 200)",
    summary:
      "Web-based prediction system for estimating corn harvest yield and seed stock availability using Multiple Linear Regression and Random Forest Regression to support production planning.",
    challenge:
      "Comparing and evaluating multiple regression models to achieve high accuracy while ensuring seamless integration between Python analytical models and the Laravel web framework.",
    outcome:
      "Built an accurate prediction system with MAE, RMSE, MAPE, and R² performance metrics, ensuring system reliability through API testing, Black Box, and UAT.",
    role: ["Machine Learning", "Forecasting System", "Data Visualization", "Full Stack Development"],
    deliverables: [
      "Prediction dashboard",
      "Performance metrics reports",
      "API testing documentation",
      "UAT results",
    ],
    details: [
      "Developed a web-based harvest prediction system using Multiple Linear Regression and Random Forest Regression comparison.",
      "Performed data preprocessing, analysis, and evaluation using MAE, RMSE, MAPE, and R² metrics.",
      "Implemented the system using Laravel, Python, and MySQL, with API testing via Postman.",
      "Ensured system functionality through Black Box Testing and User Acceptance Testing (UAT).",
    ],
    stack: "Machine Learning · Data Analysis · Web Development",
    github: "https://github.com/Mutiaraayucd/prediksi-benih-jagung",
    images: [img0, img1, img2, img3, img4, img5, img6],
    imageCaptions: [
      "Login",
      "Dashboard",
      "Harvest Prediction",
      "Seed Stock Prediction",
      "Prediction History",
      "Stock & Warehouse",
      "Annual Progress"
    ],
  },
  {
    n: "02",
    slug: "sijo-obat",
    title: "SIJO – Drug Sales Information System",
    tag: "Web Development · Database Management",
    year: "2026",
    period: "Feb 2026",
    color: "oklch(0.6 0.15 250)",
    summary:
      "A web-based pharmaceutical sales information system developed using Laravel and MySQL with role-based access control.",
    challenge:
      "Designing a secure and efficient system with three-level user access (Admin, Pharmacist, Customer) while managing complex inventory and transactions.",
    outcome:
      "Delivered an integrated system for managing drugs, suppliers, and real-time stock, significantly improving pharmacy operational efficiency.",
    role: ["Full Stack Development", "Database Design", "Access Control"],
    deliverables: [
      "Sales & Inventory dashboard",
      "User management system",
      "Transaction history",
      "Real-time stock reports",
    ],
    details: [
      "Developed a web-based pharmaceutical sales system using Laravel and MySQL.",
      "Implemented three-level access control (Admin, Pharmacist, Customer).",
      "Built features for managing drugs, suppliers, customers, and transactions (purchase/sales).",
      "Integrated real-time stock monitoring and shopping cart functionality.",
    ],
    stack: "Web Development · Database Management",
    github: "https://github.com/Mutiaraayucd/Sijo_obat",
    images: [sijo1, sijo2, sijo3, sijo4, sijo5, sijo6, sijo7, sijo8],
    imageCaptions: [
      "Login",
      "Drug Data Management",
      "Supplier Management",
      "Purchase Transaction (Restock)",
      "Sales Transaction (Cashier)",
      "Sales Report",
      "User Management (Access)",
      "Transaction History"
    ],
  },
  {
    n: "03",
    slug: "academic-information-system",
    title: "Academic Information System",
    tag: "Full Stack Development · Database Design",
    year: "2026",
    github: "https://github.com/Mutiaraayucd/Siakad",
    color: "oklch(0.58 0.14 210)",
    summary:
      "Developed a web-based Academic Information System to manage and centralize academic data, including students, lecturers, courses, class schedules, course registration (KRS), classrooms, and attendance records.",
    challenge:
      "Building an integrated academic administration system with structured data relationships, reliable validation, and centralized access to multiple academic modules.",
    outcome:
      "Delivered a centralized academic information system that streamlines academic data management and maintains relationships through a structured relational database design.",
    role: ["Full Stack Developer", "Database Designer", "System Analyst"],
    deliverables: [
      "Student management",
      "Lecturer management",
      "Course management",
      "Academic scheduling",
      "Course registration (KRS)",
      "Attendance tracking",
      "Classroom management",
      "Academic data integration and reporting",
    ],
    details: [
      "Designed the relational database schema and entity relationships.",
      "Developed CRUD functionalities for academic data management.",
      "Implemented data validation and database integrity constraints.",
      "Built user interfaces for managing students, lecturers, courses, schedules, and attendance records.",
      "Integrated academic modules into a centralized information system.",
    ],
    stack: "Full Stack Development · Database Design",
    images: [
      siakad1,
      siakad2,
      siakad3,
      siakad4,
      siakad5,
      siakad6,
      siakad7,
      siakad8,
      siakad9,
      siakad10,
      siakad11,
    ],
    imageCaptions: [
      "Login",
      "Dashboard",
      "Class Groups",
      "Classrooms",
      "Lecturers",
      "Students",
      "Courses",
      "Course Assignments",
      "Class Schedule",
      "Course Registration (KRS)",
      "Attendance Summary",
    ],
  },
  {
    n: "04",
    slug: "iqacs-greenhouse",
    title: "IQACS for Coffee Greenhouse Nursery",
    tag: "UI/UX Design · System Analysis · Testing",
    year: "2024",
    period: "Aug - Dec 2024",
    color: "oklch(0.55 0.15 150)",
    summary:
      "UI/UX design for a web and mobile-based air quality monitoring system for coffee greenhouses.",
    challenge:
      "Creating an intuitive interface for real-time air quality data and IoT-integrated features like disease detection.",
    outcome:
      "Designed a comprehensive monitoring system and testing reports that facilitated IoT integration and disease detection features.",
    role: ["UI/UX Design", "System Testing", "IoT Integration Support"],
    deliverables: [
      "Web & Mobile UI design",
      "Testing reports",
      "Disease detection flow",
      "IoT monitoring dashboard",
    ],
    details: [
      "Designed the UI for a coffee greenhouse air quality monitoring system (Web & Mobile).",
      "Responsible for system testing reporting and usability verification.",
      "Supported IoT integration and plant disease detection feature testing.",
    ],
    stack: "UI/UX Design · System Analysis · Testing",
    images: [iqacs4, iqacs6, iqacs7, iqacs5, iqacs8, iqacs9, iqacs10, iqacs11, iqacs1, iqacs2, iqacs3],
    imageCaptions: [
      "Home",
      "Services",
      "About Us",
      "Contact Us",
      "Blog",
      "3D Prototype Design",
      "IoT System Design",
      "Mobile App",
      "Monitoring Dashboard",
      "Data Sensor",
      "Detail Analisis",
    ],
  },
  {
    n: "05",
    slug: "kampsewa",
    title: "KampSewa",
    tag: "UI/UX Design · Graphic Design · Visual Communication",
    year: "2024",
    period: "Feb - Jul 2024",
    github: "https://github.com/Mutiaraayucd/Marketplace-Kamp-Sewa",
    color: "oklch(0.6 0.16 60)",
    summary:
      "UI/UX Designer for a camping equipment rental marketplace available on Web & Mobile.",
    challenge:
      "Building a trustworthy marketplace flow that simplifies equipment discovery and rental transactions.",
    outcome:
      "Developed a cohesive marketplace interface and landing pages that improved user engagement and conversion.",
    role: ["UI/UX Design", "Landing Page Development", "Content Strategy"],
    deliverables: [
      "Website & Mobile UI",
      "Promotional posters & videos",
      "Landing page design",
      "Marketplace user flow",
    ],
    details: [
      "Designed the UI for the KampSewa marketplace on both Web and Mobile platforms.",
      "Created promotional media including posters and videos to support branding.",
      "Developed an optimized landing page to enhance user engagement and conversion.",
    ],
    stack: "UI/UX Design · Graphic Design · Visual Communication",
    images: [kampsewaLogin, kampsewaLanding1, kampsewaLanding2, kampsewaLanding3, kampsewaCust, kampsewaDev],
    imageCaptions: [
      "Login",
      "Landing Page 1",
      "Landing Page 2",
      "Landing Page 3",
      "Customer Toko",
      "Developer View",
    ],
  },
  {
    n: "06",
    slug: "juragan-travel",
    title: "Juragan Travel",
    tag: "UI/UX Design · Usability Testing · Documentation",
    year: "2023",
    period: "Jul - Dec 2023",
    color: "oklch(0.5 0.15 200)",
    summary:
      "UI/UX Design for a Haji and Umroh travel service platform on Web & Mobile.",
    challenge:
      "Designing complex travel package information in a clear and trust-building manner for users.",
    outcome:
      "Ensured optimal user experience through usability testing (UAT & Maze) and clear information architecture.",
    role: ["UI/UX Design", "Usability Testing", "Content Creation"],
    deliverables: [
      "Web & Mobile UI",
      "Promotional media assets",
      "UAT & Maze test reports",
      "Travel booking flow",
    ],
    details: [
      "Designed the UI for a specialized Haji & Umroh travel service (Web & Mobile).",
      "Created promotional materials (posters and videos) to support service marketing.",
      "Conducted usability testing using UAT and Maze to ensure an optimal user experience.",
    ],
    stack: "UI/UX Design · Usability Testing · Documentation",
    images: [jt1, jt2, jt3, jt4, jt5, jt6, jt7, jt8],
    imageCaptions: [
      "Home",
      "Admin Login",
      "Account Registration",
      "Admin Dashboard",
      "Pilgrim Data",
      "Package Options",
      "Flight Schedule",
      "Item List",
    ],
  },
  {
    n: "07",
    slug: "toko-sembako-andika",
    title: "Grocery Store Information System",
    tag: "UI/UX Design · System Documentation",
    year: "2022",
    period: "Sep - Dec 2022",
    color: "oklch(0.55 0.14 100)",
    summary:
      "UI/UX and documentation for a Java-based desktop grocery store management application.",
    challenge:
      "Designing a functional desktop interface for inventory and sales management while preparing comprehensive documentation.",
    outcome:
      "Produced a complete UI design, promotional media, and project reports for the desktop application.",
    role: ["UI/UX Designer", "Documentation Specialist", "Media Creation"],
    deliverables: [
      "Desktop UI design",
      "Promotional poster & video",
      "Final project report",
      "Inventory management flow",
    ],
    details: [
      "Served as UI/UX Designer & Documentation Specialist for a Java-based desktop app.",
      "Designed the desktop UI and created promotional media (poster & video).",
      "Authored the final project report and system documentation.",
    ],
    stack: "UI/UX Design · System Documentation",
    images: [sembako1, sembako2, sembako3, sembako4, sembako5, sembako6],
    imageCaptions: [
      "Main Page / Login Selection",
      "Login Page",
      "Staff Main Dashboard",
      "Data & Stock Management",
      "Cashier & Payment Transaction",
      "Staff Data Management",
    ],
  },
  {
    n: "08",
    slug: "ngantinkuy",
    title: "Ngantinkuy",
    tag: "UI/UX Design · System Analysis · Documentation",
    year: "2022",
    period: "Jan - Jun 2022",
    color: "oklch(0.45 0.14 320)",
    summary:
      "UI/UX design for a desktop-based cashier application featuring RFID and payment scanning.",
    challenge:
      "Integrating RFID and payment scan interactions into a clean and efficient cashier workflow.",
    outcome:
      "Designed a functional cashier interface and compiled thorough technical documentation and marketing materials.",
    role: ["UI/UX Design", "Technical Documentation", "Product Promotion"],
    deliverables: [
      "Cashier UI design",
      "RFID integration flow",
      "Technical documentation",
      "Promotional assets",
    ],
    details: [
      "Designed the UI/UX for a desktop cashier app with RFID and payment scan features.",
      "Prepared comprehensive technical documentation and promotional materials.",
    ],
    stack: "UI/UX Design · System Analysis · Documentation",
    images: [ngantinkuy1, ngantinkuy2, ngantinkuy3, ngantinkuy4, ngantinkuy5, ngantinkuy6, ngantinkuy7],
    imageCaptions: [
      "User Login Page",
      "Canteen Stand List",
      "Employee Data & Management",
      "Financial Reports & Stand Transactions",
      "Daily Sales Report Details",
      "Food & Beverage Menu Management",
      "Edit Stand Menu Form",
    ],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
