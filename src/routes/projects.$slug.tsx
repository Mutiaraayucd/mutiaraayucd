import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BellRing,
  CheckCircle2,
  ClipboardList,
  LayoutDashboard,
  MonitorCog,
  Search,
  Thermometer,
} from "lucide-react";
import berandaImage from "@/assets/iqacs/Bearanda.png";
import blogImage from "@/assets/iqacs/blog.png";
import kontakImage from "@/assets/iqacs/Kontak Kami.png";
import layananImage from "@/assets/iqacs/Layanan.png";
import tentangKamiImage from "@/assets/iqacs/Tentang Kami.png";
import { getProjectBySlug } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    return project ?? null;
  },
  component: ProjectDetailPage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — Mutiara Ayu Candra Dewi`
          : "Project Detail — Mutiara Ayu Candra Dewi",
      },
      {
        name: "description",
        content:
          loaderData?.summary ?? "Project detail page for Mutiara Ayu Candra Dewi's portfolio.",
      },
    ],
  }),
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();
  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="mt-4 text-lg">We couldn't find the requested project. It may have been removed or the URL is incorrect.</p>
          <Link to="/" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-white hover:bg-primary/90">
            Back to Home
          </Link>
        </section>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-5 py-10 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            ← Back to portfolio
          </Link>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-12 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <p className="mb-4 font-mono text-sm text-muted-foreground">
              {project.n} / {project.year}
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-5 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {project.tag}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/80">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.period ? (
                <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
                  {project.period}
                </span>
              ) : null}
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
                >
                  Open project link
                </a>
              ) : null}
            </div>
            {project.demoAccess ? (
              <div className="mt-6 max-w-xl rounded-[1.5rem] border border-border bg-card/40 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Demo Access
                </p>
                <div className="mt-4 space-y-3 text-sm text-foreground/80">
                  <p>
                    <span className="text-muted-foreground">Email:</span>{" "}
                    <span className="font-medium text-foreground">{project.demoAccess.email}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Password:</span>{" "}
                    <span className="font-medium text-foreground">
                      {project.demoAccess.password}
                    </span>
                  </p>
                </div>
              </div>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div
              className="rounded-[2rem] p-8 text-background shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${project.color}, color-mix(in oklch, ${project.color} 58%, black))`,
              }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-background/70">
                Project Snapshot
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-background/60">Outcome</p>
                  <p className="mt-2 text-base leading-7">{project.outcome}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-background/60">Role</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.role.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-background/12 px-3 py-1.5 text-sm backdrop-blur"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-12 md:pb-32">
        <div className="mx-auto max-w-6xl border-t border-border">
          <DetailSection title="Key Focus" items={[project.challenge]} />
          <DetailSection title="Skills Applied" items={project.role} />
          <DetailSection title="Key Outputs" items={project.deliverables} />
          <DetailSection title="Highlights" items={project.details} />
        </div>
      </section>

      {project.slug === "iqacs-greenhouse" ? <GreenhouseLayouts /> : null}
    </main>
  );
}

function GreenhouseLayouts() {
  const adminHighlights = [
    "Admin tetap dipisah dari website publik agar flow operator tidak bercampur dengan flow marketing.",
    "Layout admin diarahkan ke monitoring, data sensor, alert, dan report operasional greenhouse.",
    "Strukturnya saya buat modular supaya nanti bisa diisi screen desain admin saat asset admin sudah tersedia.",
  ];

  return (
    <section className="border-t border-border px-5 py-14 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Greenhouse Layout Direction
          </p>
          <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">
            Dua tampilan untuk <span className="italic">landing page</span> dan{" "}
            <span className="italic">admin dashboard</span>
          </h2>
          <p className="mt-5 leading-7 text-foreground/75">
            Saya pisahkan presentasi desain untuk user publik dan operator internal. Struktur ini
            memudahkan kamu menaruh mockup final nanti tanpa mencampur flow marketing dengan flow
            monitoring.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="rounded-[2rem] border border-border bg-card/40 p-6 md:p-8">
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">Public Website</p>
            <LandingPageMockup />
          </div>

          <LayoutBlock
            eyebrow="Internal Dashboard"
            title="Admin page untuk monitoring dan operasional"
            description="Fokus pada keterbacaan data, kontrol perangkat, status greenhouse, dan respon cepat saat ada anomali."
            notes={adminHighlights}
          >
            <AdminDashboardMockup />
          </LayoutBlock>
        </div>
      </div>
    </section>
  );
}

function LayoutBlock({
  eyebrow,
  title,
  description,
  notes,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  notes: string[];
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-border bg-card/40 p-6 md:grid-cols-[1.1fr_1.5fr] md:p-8">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
        <h3 className="mt-4 font-display text-3xl font-light md:text-4xl">{title}</h3>
        <p className="mt-4 leading-7 text-foreground/75">{description}</p>
        <ul className="mt-6 space-y-3 text-sm text-foreground/80">
          {notes.map((note) => (
            <li key={note} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-hot" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </section>
  );
}

function LandingPageMockup() {
  const sections = [
    {
      title: "Beranda",
      description: "Hero utama dan pintu masuk website publik IQACS.",
      image: berandaImage,
    },
    {
      title: "Tentang Kami",
      description: "Menjelaskan latar belakang sistem dan konteks greenhouse.",
      image: tentangKamiImage,
    },
    {
      title: "Layanan",
      description: "Menampilkan layanan atau fitur utama yang ditawarkan platform.",
      image: layananImage,
    },
    {
      title: "Blog",
      description: "Area konten untuk edukasi, update sistem, atau artikel terkait greenhouse.",
      image: blogImage,
    },
    {
      title: "Kontak Kami",
      description: "Penutup flow publik untuk pertanyaan, demo, atau kerja sama.",
      image: kontakImage,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sections.map((section, index) => (
        <figure
          key={section.title}
          className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Section {String(index + 1).padStart(2, "0")}
              </p>
              <h5 className="mt-1 font-display text-2xl font-light">{section.title}</h5>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Website
            </span>
          </div>
          <div className="bg-[#edf5ea] p-3">
            <div className="h-[320px] overflow-y-auto rounded-[1rem] border border-slate-200 bg-white">
              <img
                src={section.image}
                alt={`${section.title} screen`}
                className="w-full align-top"
              />
            </div>
          </div>
          <figcaption className="px-5 py-4 text-sm leading-6 text-foreground/72">
            {section.description}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function AdminDashboardMockup() {
  const adminSections = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Overview",
      text: "Ringkasan KPI utama seperti suhu rata-rata, kelembapan, status AQI, dan device aktif.",
    },
    {
      icon: Thermometer,
      title: "Sensor Monitoring",
      text: "Grid data sensor untuk suhu, kelembapan, kualitas udara, dan histori pembacaan.",
    },
    {
      icon: MonitorCog,
      title: "Device Management",
      text: "Daftar device, status koneksi, lokasi pemasangan, dan kontrol perangkat greenhouse.",
    },
    {
      icon: BellRing,
      title: "Alerts & Notifications",
      text: "Kartu alert untuk anomali threshold, device offline, atau pembacaan yang perlu dicek.",
    },
    {
      icon: ClipboardList,
      title: "Reports",
      text: "Area export dan tabel laporan untuk evaluasi periodik kondisi greenhouse.",
    },
    {
      icon: Search,
      title: "Filter & Search",
      text: "Kontrol pencarian dan filter per zona, tanggal, device, dan jenis data monitoring.",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {adminSections.map((section) => {
        const Icon = section.icon;

        return (
          <article
            key={section.title}
            className="overflow-hidden rounded-[1.5rem] border border-slate-800 bg-[#0f1720] text-white shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-4">
              <span className="flex size-11 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-300">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Admin</p>
                <h5 className="mt-1 font-display text-2xl font-light">{section.title}</h5>
              </div>
            </div>

            <div className="p-5">
              <div className="rounded-[1.25rem] border border-slate-800 bg-slate-900/70 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-950/60 p-3">
                    <div className="h-2 w-16 rounded-full bg-slate-700" />
                    <div className="mt-4 h-8 w-20 rounded-full bg-emerald-400/30" />
                  </div>
                  <div className="rounded-2xl bg-slate-950/60 p-3">
                    <div className="h-2 w-14 rounded-full bg-slate-700" />
                    <div className="mt-4 h-8 w-16 rounded-full bg-sky-400/30" />
                  </div>
                  <div className="col-span-2 rounded-2xl bg-slate-950/60 p-3">
                    <div className="h-2 w-24 rounded-full bg-slate-700" />
                    <div className="mt-4 flex h-24 items-end gap-2">
                      {[36, 52, 44, 68, 57, 73, 61].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-full bg-emerald-400/50"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{section.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="grid gap-6 border-b border-border py-8 md:grid-cols-12 md:gap-10 md:py-10">
      <div className="md:col-span-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{title}</p>
      </div>
      <div className="md:col-span-9">
        <ul className="space-y-4 text-foreground/80">
          {items.map((item) => (
            <li key={item} className="flex gap-3 leading-7">
              <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-foreground/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
