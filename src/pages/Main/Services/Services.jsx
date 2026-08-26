import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { services } from "@/lib/services";

const Services = () => {
  return (
    <section className="relative py-12 text-white">
      <Reveal>
        <SectionHeading
          eyebrow="Our Services"
          title="Custom web application development"
          description="From full-stack web apps to e-commerce stores and content platforms, VextraWeb engineers solutions that are fast, scalable and built to grow."
        />
      </Reveal>

      {/* Mobile: stacked equal-height cards */}
      <div className="flex flex-col gap-5 px-4 lg:hidden">
        {services.map((service, index) => (
          <Reveal key={index} delay={index * 0.06}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      {/* Desktop: equal-height auto-playing carousel */}
      <div className="hidden px-2 lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          loop
          autoplay={{
            delay: 2600,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="h-[500px] pb-12!"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="flex h-full">
                <ServiceCard service={service} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;