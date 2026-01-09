import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "../features/skills/routes/Dashboard";
import skillDetailLoader from "../features/skills/routes/SkillDetail.loader";
import SkillDetail from "../features/skills/routes/SkillDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "skills/:id", loader: skillDetailLoader, Component: SkillDetail },
      // { path: "*", Component: NotFound },
    ],
  },
]);
