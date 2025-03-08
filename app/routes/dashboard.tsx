import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pochir" },
    { name: "description", content: "Pochir dashboard" },
  ];
}

export default function Dashboard() {
  return <>Pochir dashboard</>;
}
