import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import skillDetailLoader from "./pages/SkillDetail.loader";
import SkillDetail from "./pages/SkillDetail";

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
