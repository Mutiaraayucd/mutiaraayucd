import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Mutiara Ayu Candra Dewi — UX Writer & UI/UX Designer" },
      { name: "description", content: "Portofolio Mutiara Ayu Candra Dewi — UX Writer, UI/UX Designer, Graphic Designer, dan Web Developer dari Jember." },
    ],
  }),
});
