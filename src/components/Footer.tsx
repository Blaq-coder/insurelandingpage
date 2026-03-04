import type { JSX } from "react";
import logo from "../assets/images/logo.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import bgPatternFooter from "../assets/images/bg-pattern-footer-desktop.svg";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#FAFAFA] relative overflow-hidden pt-20">

      {/* Background Pattern */}
      <img
        src={bgPatternFooter}
        alt=""
        className="absolute top-0 left-0 max-w-full z-10 pointer-events-none"
      />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* Logo + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-16">
          <img src={logo} alt="logo" className="w-32 md:w-40" />
          <div className="flex gap-4">
            <img src={iconFacebook} alt="Facebook" className="h-6 hover:opacity-70 cursor-pointer" />
            <img src={iconTwitter} alt="Twitter" className="h-6 hover:opacity-70 cursor-pointer" />
            <img src={iconInstagram} alt="Instagram" className="h-6 hover:opacity-70 cursor-pointer" />
            <img src={iconPinterest} alt="Pinterest" className="h-6 hover:opacity-70 cursor-pointer" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-[#5C5770] border-t border-gray-300 pt-10 justify-items-center md:justify-items-start">


          {/* Column 1 */}
          <div>
            <h5 className="font-bold text-[#2C2640] uppercase tracking-wider mb-4">Our Company</h5>
            <ul className="space-y-3 text-center md:text-left">
              <li className="hover:text-[#2C2640] cursor-pointer">How we work</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Why Insure?</li>
              <li className="hover:text-[#2C2640] cursor-pointer">View plans</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Reviews</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="font-bold text-[#2C2640] uppercase tracking-wider mb-4">Help Me</h5>
            <ul className="space-y-3 text-center md:text-left">
              <li className="hover:text-[#2C2640] cursor-pointer">FAQ</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Terms of Use</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Cookies</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="font-bold text-[#2C2640] uppercase tracking-wider mb-4">Contact</h5>
            <ul className="space-y-3 text-center md:text-left">
              <li className="hover:text-[#2C2640] cursor-pointer">Sales</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Support</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Live Chat</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="font-bold text-[#2C2640] uppercase tracking-wider mb-4">Others</h5>
            <ul className="space-y-3 text-center md:text-left">
              <li className="hover:text-[#2C2640] cursor-pointer">Careers</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Press</li>
              <li className="hover:text-[#2C2640] cursor-pointer">Licenses</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
