import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12">
      <h1 className="text-6xl text-slate-700">
        404 | <span>Page not found.</span>
      </h1>
      <Link to="/" className="text-center hover:underline">
        Redirect to home page.
      </Link>
      <Footer />
    </div>
  );
}
