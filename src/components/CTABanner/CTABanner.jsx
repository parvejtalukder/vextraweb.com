import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal/Reveal";

const CTABanner = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 pb-16 pt-8 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
          Ready to start your project?{" "}
          <span className="text-gradient-brand">Get an instant estimate.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Tell us what you&apos;re building and we&apos;ll prepare a clear roadmap and
          a transparent quote — free, with no obligation.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/free-consultation"
            className="group inline-flex items-center gap-2 rounded-full btn-gradient px-7 py-3.5 text-sm font-semibold text-white"
          >
            Book a Consultation
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#3391e7]/60 hover:text-white"
          >
            Request a Quote
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default CTABanner;