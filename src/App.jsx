import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
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

{
  /* <NavigationBar />
      <Header />
      <main className="h-screen">
        <TechnologyStack />
        <About />
        <Projects projects={projects} />
        <Services />
      </main> */
}

{
  /* <footer>
<Contact />
<div className="flex flex-col items-center justify-center gap-4 px-3 py-4">
  <IconContext.Provider value={{ size: "1.4rem" }}>
    <div>
      <Button variant="link">
        <FaFacebook />
      </Button>
      <Button variant="link">
        <FaGithub />
      </Button>
      <Button variant="link">
        <FaLinkedin />
      </Button>
    </div>
    <small>
      &copy; 2024 <a href="">John Cedric Panti.</a> All rights reserved.
    </small>
  </IconContext.Provider>
</div>
</footer> */
}
