import type { JSX } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  text: string;
}

export default function FeatureCard({ icon, title, text }: FeatureCardProps): JSX.Element {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
      <div className="w-20 h-20 rounded-full bg-[#96A694] flex items-center justify-center">
        <img src={icon} alt={title} className="h-10" />
      </div>
      <h4 className="font-serif text-2xl text-[#2C2640]">{title}</h4>
      <p className="text-[#5C5770] text-base leading-relaxed">{text}</p>
    </div>
  );
}
