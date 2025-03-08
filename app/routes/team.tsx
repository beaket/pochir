import type { Route } from "./+types/team";
import { Link, type LoaderFunctionArgs, data, useLocation } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Pochir" }, { name: "description", content: "Team" }];
}

export async function loader({ params }: LoaderFunctionArgs) {
  // TODO: Fetch teams from an API or database instead of using a hardcoded list.
  const fakeDb = [
    {
      name: "team1",
      frames: [{ name: "frame1" }, { name: "frame2" }],
    },
    {
      name: "team2",
      frames: [{ name: "frame1" }],
    },
  ];

  let record = fakeDb.find(({ name }) => name === params.team);
  if (!record) throw data("Record Not Found", { status: 404 });

  return record;
}

export default function Team({ loaderData, matches }: Route.ComponentProps) {
  const { pathname } = useLocation();

  return (
    <>
      <>Your frames:</>
      <ul>
        {loaderData.frames.map((frame) => (
          <li key={frame.name}>
            <Link to={`${pathname}/${frame.name}`}>{frame.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
