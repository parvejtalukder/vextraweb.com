import React from "react";
import { Link } from "react-router";
import { motion as Motion } from "motion/react";
import TwoButton from "../../../utils/Button/TwoButton";

const words = [
  { text: "Custom", accent: true },
  { text: "Web", accent: true },
  { text: "Application", accent: false },
  { text: "Development", accent: false },
];

const Hero = () => {
  return (
    <section className="relative flex flex-col gap-6 px-4 pb-20 pt-60 lg:gap-8 lg:pt-60">
      <div className="max-w-5xl">
        {/* Headline with staggered word entrance */}
        <Motion.h1
          className="pb-4 font-medium leading-[1.05] text-2xl sm:text-4xl lg:text-6xl"
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
        >
          {words.map((word) => (
            <span key={word.text}>
              <Motion.span
                className={`inline-block whitespace-pre ${
                  word.accent ? "text-gradient-brand" : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {word.text}
              </Motion.span>
              {"\u00A0"}
            </span>
          ))}
        </Motion.h1>

        {/* Subheading + actions */}
        <Motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            VextraWeb builds fast, scalable and reliable custom web
            applications, websites and e-commerce stores — engineered to help
            your business grow online.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to={"/free-consultation"}>
              <TwoButton className="w-full sm:w-auto" text={"Start Your Project"} />
            </Link>
            <Link
              to={"/services"}
              className="group inline-flex h-[46px] items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 text-sm font-semibold text-white transition-all duration-300 hover:border-[#3391e7]/60 hover:bg-white/5"
            >
              Explore Services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;