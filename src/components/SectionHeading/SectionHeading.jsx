import React from "react";

const SectionHeading = ({ eyebrow, title, description, className = "" }) => {
  return (
    <div className={`mx-auto mb-10 max-w-2xl text-center ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3391e7]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 leading-relaxed text-white/60">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;