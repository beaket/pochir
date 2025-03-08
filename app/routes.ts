import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/dashboard.tsx"),
  route("login", "routes/login.tsx"),
  route("logout", "routes/logout.tsx"),
  route("home", "routes/home.tsx"),
  ...prefix("settings", [index("routes/settings.tsx")]),
  ...prefix(":team", [
    index("routes/team.tsx"),
    route(":frame", "routes/frame.tsx"),
  ]),
] satisfies RouteConfig;
