import type { Route } from "./+types/login";
import { Form, redirect, type ActionFunctionArgs } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pochir" },
    { name: "description", content: "Pochir login" },
  ];
}

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries((await request.formData()).entries());
  return redirect("/");
}

export default function Login() {
  return (
    <Form method="post" action={"/login"}>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">login</button>
    </Form>
  );
}
