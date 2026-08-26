import { Link } from "react-router";
import { ArrowRight, VerifiedIcon } from "lucide-react";
import React from "react";

/**
 * ServiceCard: equal-height card used on the homepage, with the
 * "Get a Quote" action pinned to the bottom of every card.
 */
const ServiceCard = ({ service }) => {
  return (
    <div className="card h-full rounded-2xl border border-white/10 p-6 transition-colors duration-300 hover:border-[#3391e7]/50">
      <h2 className="text-xl font-bold text-white">{service.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        {service.description}
      </p>

      <ul className="mt-4 flex flex-col gap-2.5 text-sm">
        {service.features.map((feature, i) => (
          <li key={i} className="flex gap-2.5 text-white/75">
            <VerifiedIcon className="mt-0.5 size-4 shrink-0 text-[#3391e7]" />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Link
          to="/free-consultation"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300"
        >
          Get a Quote
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

// const ServicesSection = () => {
//   return (
//     <div className="py-12 px-4">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Our Services
//       </h2>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {services.map((service, index) => (
//           <ServiceCard key={index} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;