import type { JSX } from "react";
import FeatureCard from "./FeatureCard";
import iconSnappy from "../assets/images/icon-snappy-process.svg";
import iconAffordable from "../assets/images/icon-affordable-prices.svg";
import iconPeopleFirst from "../assets/images/icon-people-first.svg";

interface FeatureItem {
  icon: string;
  title: string;
  text: string;
}

export default function Features(): JSX.Element {
  const data: FeatureItem[] = [
    { icon: iconSnappy, title: "Snappy Process", text: "Our application process can be completed in minutes, not hours. You just need to fill in a few details about yourself and your vehicle, and we'll handle the rest." },
    { icon: iconAffordable, title: "Affordable Prices", text: "We don't want you worrying about high monthly payments. We use our purchasing power to find you the best rates possible." },
    { icon: iconPeopleFirst, title: "People First", text: "We are a group of humans, not robots. When you call, you'll talk to a real person who will work with you to find the right coverage." },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#D9D9D9] mb-16" />
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2640] mb-16">We're different</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {data.map((item, i) => <FeatureCard key={i} {...item} />)}
        </div>
      </div>
    </section>
  );
}

