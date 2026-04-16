import { VerifiedIcon } from 'lucide-react';
import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-100 hover:bg-blue-400/40 rounded-2xl border-[1px] hover:border-blue-600 transition-all shadow-md hover:shadow-xl duration-700">
      <div className="card-body">
        <h2 className="text-xl font-bold">{service.title}</h2>
        <p className="text-sm text-gray-500">{service.description}</p>

        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {service.features.map((feature, i) => (
            <li className='flex gap-2' key={i}> <VerifiedIcon></VerifiedIcon> {feature}</li>
          ))}
        </ul>

        <div className="mt-6">
          <button className="btn rounded-xl bg-blue-600 w-full">
            Get a Quote
          </button>
        </div>
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