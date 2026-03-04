import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import Features from "../components/Features.tsx";
import CTA from "../components/CTA.tsx";
import Footer from "../components/Footer.tsx";
import type { JSX } from "react/jsx-dev-runtime";

export default function Home(): JSX.Element {
  return (
    <div className="font-karla text-gray-800 scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
