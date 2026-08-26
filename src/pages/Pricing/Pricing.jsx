import React from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "../../components/PageHeader/PageHeader";

const tiers = [
  {
    name: "Starter Website",
    price: "from $299",
    tagline: "Local businesses, portfolios & landing pages",
    features: [
      "Up to 5 pages, fully responsive",
      "Contact form linked to your email",
      "On-page SEO fundamentals",
      "2 free revision rounds",
      "Delivery in 7-10 days",
    ],
    highlighted: false,
  },
  {
    name: "Business / CMS",
    price: "from $650",
    tagline: "Companies, agencies & growing brands",
    features: [
      "Up to 15 pages or CMS-driven site",
      "WordPress / WooCommerce ready",
      "Blog or news portal with editor",
      "Speed & image optimization",
      "Analytics & admin dashboard",
      "Delivery in 2-3 weeks",
    ],
    highlighted: true,
  },
  {
    name: "E-commerce / Custom App",
    price: "from $1,200",
    tagline: "Online stores & scalable custom products",
    features: [
      "Full-stack custom web application",
      "Payment gateway & inventory",
      "Secure API & third-party integrations",
      "Custom dashboards & admin panel",
      "Deployment & maintenance support",
    ],
    highlighted: false,
  },
  {
    name: "Reputation & SEO",
    price: "custom quote",
    tagline: "Knowledge panels, wiki & search growth",
    features: [
      "Google Knowledge Panel management",
      "MediaWiki setup & wiki content",
      "SEO audits & keyword strategy",
      "Promotional publishing & digital PR",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="Every project starts with a free consultation. Pick a starting point below, and your final quote is always tailored to the scope."
      />

      <section className="px-4 pb-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                tier.highlighted
                  ? "border-[#3391e7] bg-[#3391e7]/10"
                  : "border-white/10 bg-white/5 hover:border-white/25"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#3391e7] px-3 py-1 text-xs font-semibold">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold">{tier.name}</h3>
              <p className="mt-1 text-sm text-white/60">{tier.tagline}</p>
              <p className="mt-4 text-3xl font-bold text-[#3391e7]">
                {tier.price}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#3391e7]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/free-consultation"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  tier.highlighted
                    ? "bg-[#3391e7] text-white hover:brightness-110"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Get a quote <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/50">
          All prices are starting estimates in USD and depend on project scope.
          Maintenance, reputation management and marketing retainers are quoted
          per engagement. Ask for a free consultation to get an exact figure.
        </p>
      </section>

      <section className="px-4 py-14 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Not sure which package fits?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          Tell us what you're trying to achieve and we'll recommend the right
          approach. Free of charge, with no obligation.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 rounded-full bg-[#3391e7] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Book a free consultation <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;