import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return (
    <div className="container h-screen max-w-screen-lg">
      <RouterProvider router={router} />
    </div>
  );
}
