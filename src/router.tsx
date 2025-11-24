import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import SkillDetail from "./pages/SkillDetail";
import Dashboard from "./pages/Dashboard";
import AddSkill from "./pages/AddSkill";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "add", Component: AddSkill },
      { path: "detail", Component: SkillDetail },
    ],
  },
]);
