import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pochir" },
    { name: "description", content: "Welcome to Pochir" },
  ];
}

export default function Home() {
  return <>Pochir home</>;
}
