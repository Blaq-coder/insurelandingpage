import type { JSX } from "react";
import bgPatternWork from "../assets/images/bg-pattern-how-we-work-desktop.svg";

export default function CTA(): JSX.Element {
return (
<section className="py-24 px-6">
<div className="max-w-7xl mx-auto bg-[#2C2640] text-white rounded-lg relative py-16 md:py-20">
  <div className="text-center md:text-left px-6 md:px-16">
    <h3 className="font-serif text-4xl md:text-5xl mb-8 md:max-w-xl">
      Find out more about how we work
    </h3>
    <button className="border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-[#2C2640] transition mx-auto md:mx-0 block">
      How we work
    </button>
  </div>
  <img 
    src={bgPatternWork} 
    alt="" 
    className="absolute top-0 right-0 z-10"
  />
</div>
</section>
);
}
