import type { Route } from "./+types/logout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pochir" },
    { name: "description", content: "Pochir logout" },
  ];
}

export default function Logout() {
  return <>Pochir logout</>;
}
