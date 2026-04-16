import ServiceCard from "@/components/ServiceCard/ServiceCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const services = [
  {
    title: "Full-Stack Web Applications",
    description: "Custom web applications built to solve real business problems.",
    features: [
      "Custom Dashboard & Admin Panel",
      "API Development & Integration",
      "Secure & Scalable Architecture",
    ],
  },
  {
    title: "E-commerce Development",
    description: "High-converting online stores for your business growth.",
    features: [
      "Payment Gateway Integration",
      "Product & Inventory Management",
      "Order & Customer Management",
    ],
  },
  {
    title: "WordPress & News Portals",
    description: "Dynamic websites for blogs, news portals, and content platforms.",
    features: [
      "Well WordPress Theme",
      "News/Magazine Website",
      "SEO & Speed Optimization",
    ],
  },
  {
    title: "Business & Organization Websites",
    description: "Professional websites for companies, NGOs, and institutions.",
    features: [
      "Modern Responsive Design",
      "Service & Portfolio Pages",
      "Contact & Lead Generation Forms",
    ],
  },
];

const Services = () => {
  return (
    <section className="pt-20 pb-10 bg-black text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold transition-all duration-1000 hover:text-[#004AAD]">
          Our Services
        </h2>
        <p className="text-white/60 mt-2 px-3">
          At VextraWeb, We build high-impact websites and digital strategies that
          drive growth.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:hidden px-4">
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;