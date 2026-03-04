import { useState, type JSX } from "react";
import logo from "../assets/images/logo.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import bgPatternMobileNav from "../assets/images/bg-pattern-mobile-nav.svg";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <img src={logo} alt="logo" className="h-6" />

        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase text-[#5C5770]">
          <li onClick={() => scrollTo("features")} className="cursor-pointer hover:text-[#2C2640] transition">How we work</li>
          <li className="cursor-pointer hover:text-[#2C2640] transition">Blog</li>
          <li className="cursor-pointer hover:text-[#2C2640] transition">Account</li>
          <li className="border border-[#2C2640] px-6 py-2 hover:bg-[#2C2640] hover:text-white transition cursor-pointer uppercase">
            View plans
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <img src={iconClose} alt="Close" /> : <img src={iconHamburger} alt="Menu" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#2C2640] text-white flex flex-col items-center gap-8 py-10 uppercase tracking-widest relative min-h-screen">
          <img 
            src={bgPatternMobileNav} 
            alt="" 
            className="absolute bottom-0 left-0"
          />
          <p onClick={() => scrollTo("features")} className="cursor-pointer">How we work</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">Account</p>
          <button className="border border-white px-6 py-2 cursor-pointer uppercase">
            View plans
          </button>
        </div>
      )}
    </nav>
  );
}
