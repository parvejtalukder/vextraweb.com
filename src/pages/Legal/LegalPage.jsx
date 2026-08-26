import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { LEGAL_PAGES } from "./legalData";

const LegalPage = ({ slug = "disclaimer" }) => {
  const page = LEGAL_PAGES[slug] || LEGAL_PAGES.disclaimer;

  useEffect(() => {
    document.title = `${page.title} | VextraWeb`;
    return () => {
      document.title = "VextraWeb | Fast, Scalable Websites & Web Apps";
    };
  }, [page.title]);

  return (
    <div>
      <PageHeader eyebrow="Legal" title={page.title} description={page.intro} />

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
          {page.sections.map((section) => (
            <div key={section.heading} className="mb-8 last:mb-0">
              <h2 className="text-lg font-bold">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-3 text-sm leading-relaxed text-white/70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3391e7] hover:underline"
          >
            <ArrowLeft className="size-4" /> Questions? Contact us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;