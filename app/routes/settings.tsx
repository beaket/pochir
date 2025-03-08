import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Pochir" }, { name: "description", content: "Settings" }];
}

export default function Settings() {
  return <>Pochir settings</>;
}
