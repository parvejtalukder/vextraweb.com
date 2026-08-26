import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  PenTool,
  Rocket,
  Send,
  Sparkles,
} from "lucide-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { services } from "../../lib/services";

const steps = [
  { title: "Discover & strategy", icon: Sparkles },
  { title: "Architecture & design", icon: PenTool },
  { title: "Build & integrate", icon: Rocket },
  { title: "Launch & support", icon: Send },
];

const ServicesPage = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Our Services"
        title="Digital services that build and protect your brand"
        description="VextraWeb pairs full-stack engineering with digital reputation management, giving you fast, scalable web infrastructure and a credible presence online."
      />

      {/* Service cards */}
      <section className="px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, ...service }) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#3391e7]/50"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#3391e7] text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#3391e7]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className="flex flex-col items-start justify-center rounded-2xl bg-[#3391e7] p-6 text-white">
            <h3 className="text-xl font-bold">Need a custom solution?</h3>
            <p className="mt-2 text-sm text-white/70">
              Tell us where you're stuck and we'll map a plan for free.
            </p>
            <Link
              to="/free-consultation"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#3391e7] transition hover:bg-white/90"
            >
              Get a free quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 px-4 py-16">
        <SectionHeading
          eyebrow="How we work"
          title="From idea to launch in four steps"
          description="A focused, transparent process. You always know what's happening and what's next."
        />
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, icon: Icon }, i) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <Icon className="mx-auto size-7 text-[#3391e7]" />
              <p className="mt-3 text-sm font-semibold text-white/40">
                Step {i + 1}
              </p>
              <h4 className="mt-1 font-semibold">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to start your project?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          Book a free consultation with no strings attached.
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

export default ServicesPage;