import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Project from "../pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "project",
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: ":id",
        element: <Project />,
      },
    ],
  },
]);

export default router;
