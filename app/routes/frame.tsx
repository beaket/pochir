import type { Route } from "./+types/frame";
import { type LoaderFunctionArgs, data } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Pochir" }, { name: "description", content: "Frame" }];
}

export async function loader({ params }: LoaderFunctionArgs) {
  // TODO: Fetch teams from an API or database instead of using a hardcoded list.
  const fakeDb = ["frame1", "frame2", "frame3"];

  let record = fakeDb.find((r) => r === params.frame);
  if (!record) throw data("Record Not Found", { status: 404 });

  return record;
}

export default function Frame({ params, loaderData }: Route.ComponentProps) {
  return <>Your frame: {loaderData}</>;
}
