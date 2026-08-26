import React from "react";
import { Reviews } from "../Reviews/Reviews";
import ReviewsMobile from "../Reviews/ReviewsMobile";

const Review = () => {
  return (
    <section className="py-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around gap-10 items-start">
        {/* Left side: title + description */}
        <div className="lg:basis-1/4 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3391e7]">
            Testimonials
          </p>
          <h2 className="text-3xl font-semibold mt-2">
            Reviews from clients
          </h2>
          <p className="text-white/60 mt-4 lg:px-0 px-10">
            VextraWeb builds fast, reliable and future-ready web applications
            using modern, scalable technology. Our clients trust us to ship
            solutions that perform.
          </p>
        </div>

        {/* Right side: Reviews component */}
        <div className="lg:basis-3/4">
          <div className="hidden lg:block">
            <Reviews />
          </div>

          {/* Mobile: compact grid */}
          <div className="block lg:hidden">
            <ReviewsMobile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;