import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Hasan Kilabi — Multidisciplinary Designer" },
      { name: "description", content: "Portfolio of Hasan Kilabi — brand identity, product design, and digital experiences crafted with intention." },
    ],
  }),
});
