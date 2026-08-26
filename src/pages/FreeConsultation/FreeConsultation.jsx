import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileText,
  MessageSquareText,
  UserRound,
} from "lucide-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";

const steps = [
  {
    icon: UserRound,
    title: "1. Tell us about your project",
    description:
      "Fill in a short form with your goals, timeline and budget. It takes about 2 minutes.",
  },
  {
    icon: Compass,
    title: "2. We strategise for free",
    description:
      "We review your idea and prepare an approach. You get a reply within 24 hours.",
  },
  {
    icon: FileText,
    title: "3. Get a clear plan & quote",
    description:
      "You receive a roadmap, timelines and a transparent quote. No obligation.",
  },
];

const promises = [
  "100% free with no obligation",
  "Reply within 24 hours",
  "Transparent, fixed-scope estimate",
  "Advice tailored to your industry",
];

const FreeConsultation = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Free Consultation"
        title="Get a free roadmap for your web project"
        description="Talk to us before you commit to anything. We'll help you clarify the scope, timeline and budget of your next website, store or reputation project."
      />

      {/* Steps */}
      <section className="px-4 pb-10">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-[#3391e7] text-sm font-bold">
                  {i + 1}
                </span>
                <Icon className="size-5 text-[#3391e7]" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 lg:grid-cols-5">
        {/* Promises */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">What you get</h2>
          <ul className="mt-6 space-y-4">
            {promises.map((promise) => (
              <li key={promise} className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#3391e7]" />
                {promise}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-bold">Already know exactly what you need?</h3>
            <p className="mt-2 text-sm text-white/60">
              You can skip the form and book a quick WhatsApp call instead.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#3391e7] hover:underline"
            >
              Go to contact page <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-3 sm:p-8">
          <h2 className="text-2xl font-bold">Request your free consultation</h2>
          <p className="mt-2 mb-6 text-sm text-white/60">
            The more detail you share, the more useful your roadmap will be.
          </p>
          <ContactForm
            includeService
            includeBudget
            submitLabel="Request My Free Consultation"
            source="consultation"
          />
        </div>
      </section>
    </div>
  );
};

export default FreeConsultation;