import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import AddSkill from "./pages/AddSkill";
import skillDetailLoader from "./pages/SkillDetail.loader";
import SkillDetail from "./pages/SkillDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "add", Component: AddSkill },
      { path: "skills/:id", loader: skillDetailLoader, Component: SkillDetail },
      // { path: "*", Component: NotFound },
    ],
  },
]);
