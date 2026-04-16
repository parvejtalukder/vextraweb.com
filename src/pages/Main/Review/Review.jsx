import React from "react";
import { Reviews } from "../Reviews/Reviews";
import ReviewsMobile from "../Reviews/ReviewsMobile";
// import { Reviews } from "../Reviews/Reviews";
// import { ReviewsMobile } from "../Reviews/ReviewsMobile";

const Review = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around gap-10 items-start">
        {/* Left side: title + description */}
        <div className="lg:basis-1/4 text-center lg:text-left lg:pl-5">
          <h2 className="text-3xl font-semibold transition-all duration-1000 hover:text-[#004AAD]">
            Review from clients
          </h2>
          <p className="text-white/60 mt-4 lg:px-0 px-10 text-justify">
            VextraWeb leverages modern, scalable technologies to deliver web applications that are fast, reliable, and future-ready. Their solutions have transformed our digital presence and streamlined our workflows.
          </p>
        </div>

        {/* Right side: Reviews component */}
        <div className="lg:basis-3/4">
          {/* Desktop 3D carousel (visible on lg screens and up) */}
          <div className="hidden lg:block">
            <Reviews />
          </div>

          {/* Mobile marquee (visible below lg screens) */}
          <div className="block lg:hidden">
            <ReviewsMobile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;