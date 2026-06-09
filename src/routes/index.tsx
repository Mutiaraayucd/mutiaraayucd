import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Mutiara Ayu Candra Dewi — UX Writer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Mutiara Ayu Candra Dewi's portfolio — UX Writer, UI/UX Designer, Graphic Designer, and Web Developer based in Jember.",
      },
    ],
  }),
});
