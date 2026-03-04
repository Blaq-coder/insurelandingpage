import type { JSX } from "react";

import imageIntroMobile from "../assets/images/image-intro-mobile.jpg";
import imageIntroDesktop from "../assets/images/image-intro-desktop.jpg";

import bgPatternLeftDesktop from "../assets/images/bg-pattern-intro-left-desktop.svg";
import bgPatternRightDesktop from "../assets/images/bg-pattern-intro-right-desktop.svg";

import bgPatternLeftMobile from "../assets/images/bg-pattern-intro-left-mobile.svg";
import bgPatternRightMobile from "../assets/images/bg-pattern-intro-right-mobile.svg";

export default function Hero(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">

      {/* ================= DESKTOP HERO ================= */}
      <div className="hidden md:block relative bg-[#2C2640] pb-40">

        {/* Desktop Patterns */}
        <img
          src={bgPatternRightDesktop}
          alt=""
          className="absolute top-0 right-0 z-10"
        />

        <img
          src={bgPatternLeftDesktop}
          alt=""
          className="absolute bottom-[-120px] left-0 z-10"
        />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 px-6 pt-28 relative z-20">

          {/* TEXT SIDE */}
          <div className="text-white flex flex-col justify-center">

            {/* Top line */}
            <div className="w-28 h-[1px] bg-white mb-10" />

            {/* Heading */}
            <h1 className="font-serif text-6xl leading-tight mb-6">
              Humanizing <br /> your insurance.
            </h1>

            {/* Paragraph */}
            <p className="text-white/80 max-w-md mb-8">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>

            {/* Button */}
            <button className="border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-[#2C2640] transition w-fit">
              View plans
            </button>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative">

            <img
              src={imageIntroDesktop}
              alt="Family"
              className="
                absolute
                right-0
                top-28
                w-full
                max-w-md
              "
            />

          </div>
        </div>
      </div>

      {/* ================= MOBILE HERO ================= */}
      <div className="md:hidden relative">

        {/* Top Mobile Pattern */}
        <img
          src={bgPatternRightMobile}
          alt=""
          className="absolute top-0 right-0 z-10"
        />

        {/* Image FIRST */}
        <img
          src={imageIntroMobile}
          alt="Family"
          className="w-full"
        />

        {/* Purple Text Section */}
        <div className="bg-[#2C2640] text-white px-6 py-16 text-center relative">

          <h1 className="font-serif text-5xl leading-tight mb-6">
            Humanizing your insurance.
          </h1>

          <p className="text-white/80 mb-8">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the coverage that’s right
            for you. Ensure you and your loved ones are protected.
          </p>

          <button className="border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-[#2C2640] transition">
            View plans
          </button>

          {/* Bottom Mobile Pattern */}
          <img
            src={bgPatternLeftMobile}
            alt=""
            className="absolute left-0 bottom-0"
          />
        </div>
      </div>

    </section>
  );
}
