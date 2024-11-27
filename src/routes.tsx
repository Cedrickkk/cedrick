import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
