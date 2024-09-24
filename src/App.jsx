import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import PageNotFound from "@/pages/PageNotFound";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return (
    <div className="container mx-auto max-w-6xl">
      <RouterProvider router={router} />
    </div>
  );
}
