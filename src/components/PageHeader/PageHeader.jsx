import { useEffect } from "react";
import { COMPANY } from "../../lib/site";

const PageHeader = ({ eyebrow, title, description }) => {
  useEffect(() => {
    document.title = `${COMPANY.name} · ${title}`;
  }, [title]);

  return (
    <section className="pt-14 lg:pt-20 pb-8 px-4 text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3391e7]">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 text-4xl sm:text-4xl lg:text-4xl font-bold leading-tight">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
          {description}
        </p>
      )}
    </section>
  );
};

export default PageHeader;