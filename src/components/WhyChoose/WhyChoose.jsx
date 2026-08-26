import React from "react";
import { Gauge, ShieldCheck, Server, Wrench } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";

const features = [
  {
    icon: Gauge,
    title: "Fast by default",
    description:
      "Every build is optimised for performance, so your web app loads quickly and feels instant.",
  },
  {
    icon: Server,
    title: "Scalable architecture",
    description:
      "Modern stacks like React, Node and Next.js that scale from a simple site to high-traffic platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & secure",
    description:
      "Secure auth, safe integrations and dependable infrastructure built into every project.",
  },
  {
    icon: Wrench,
    title: "Dedicated support",
    description:
      "A long-term partner who stays after launch with hands-on monitoring and maintenance.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="py-12 text-white">
      <Reveal>
        <SectionHeading
          eyebrow="Why VextraWeb"
          title="An agency built for modern web development"
          description="We combine senior full-stack craft with a constant focus on performance, reliability and long-term partnership."
        />
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-white/10 p-6 transition-colors duration-300 hover:border-[#3391e7]/50">
              <Icon className="size-7 text-[#3391e7]" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;