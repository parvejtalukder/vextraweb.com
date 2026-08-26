import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Globe,
  Lock,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  MessageCircle,
} from "lucide-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { COMPANY } from "../../lib/site";

const values = [
  {
    icon: Zap,
    title: "Speed",
    description:
      "Fast websites, efficient development, and streamlined delivery. We optimise both performance and execution.",
  },
  {
    icon: Lock,
    title: "Security & reliability",
    description:
      "Secure architecture, responsible integrations, and dependable infrastructure built for real-world use.",
  },
  {
    icon: ShieldCheck,
    title: "Credibility",
    description:
      "We help businesses establish a stronger digital footprint through professional websites, SEO, knowledge panels, media platforms, and other reputation-focused solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work as an extension of your team—communicating clearly, staying responsive, and taking ownership of the outcome.",
  },
  {
    icon: TrendingUp,
    title: "Measurable growth",
    description:
      "Every project should contribute to a meaningful business objective, whether that's visibility, leads, conversions, engagement, or operational efficiency.",
  },
  {
    icon: Globe,
    title: "Future-ready",
    description:
      "We build with modern technologies and scalable architecture so your digital infrastructure can grow alongside your business.",
  },
];

const About = () => {
  return (
    <div>
      <PageHeader
        eyebrow="About VextraWeb"
        title="Building fast web infrastructure"
        description="VextraWeb is a digital technology and reputation management company focused on building high-performance web infrastructure, strengthening online presence, and helping businesses establish lasting digital credibility."
      />

      {/* Story */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-white/70">
            Founded by{" "}
            <span className="font-semibold text-white">
              Jakaria Hossain Jusef
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">
              Parvej Husen Talukder
            </span>
            , VextraWeb combines full-stack web development, e-commerce,
            digital platforms, SEO, and online reputation solutions under one
            team.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            From custom web applications and high-converting e-commerce stores
            to Google Knowledge Panels, MediaWiki platforms, WordPress news
            portals, and SEO strategy, we help businesses build, improve, and
            scale their complete digital presence.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#3391e7] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Get in touch <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="border-y border-white/10 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            eyebrow="Meet the Founders"
            title="The people leading VextraWeb"
            description="Two founders. One direction. Built for the long term."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {COMPANY.founders.map(({ name, initials, role, bio, contact }) => (
              <div
                key={name}
                className="rounded-2xl border border-white/10 p-8 transition-colors duration-300 hover:border-[#3391e7]/50"
              >
                <div className="flex size-16 items-center justify-center rounded-2xl bg-[#3391e7] text-xl font-bold">
                  {initials}
                </div>
                <h3 className="mt-5 text-xl font-bold">{name}</h3>
                <p className="text-sm font-medium text-[#3391e7]">
                  {role} · VextraWeb
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {bio}
                </p>
                {contact === "whatsapp" && (
                  <a
                    href={COMPANY.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3391e7] hover:underline"
                  >
                    <MessageCircle className="size-4" /> Chat with Parvej →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16">
        <SectionHeading
          eyebrow="What we believe"
          title="The principles behind every project"
          description="These aren't buzzwords. They're commitments we hold ourselves to."
        />
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 p-6 transition-colors duration-300 hover:border-[#3391e7]/50"
            >
              <Icon className="size-7 text-[#3391e7]" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 text-center">
        <h2 className="text-3xl font-bold">Let's build your digital presence</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          Whether you need a custom web application, e-commerce platform, media
          website, SEO strategy, or a stronger online reputation, we're ready
          to help. Start with a free consultation and tell us what you're
          building.
        </p>
        <Link
          to="/free-consultation"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3391e7] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Book a free consultation <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
};

export default About;