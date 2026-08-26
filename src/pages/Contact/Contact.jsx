import React from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import { COMPANY } from "../../lib/site";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: COMPANY.phoneDisplay,
    href: COMPANY.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp chat",
    value: "Chat with us now",
    href: COMPANY.whatsappHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: COMPANY.location,
    href: null,
  },
  {
    icon: Clock,
    label: "Working hours",
    value: "Sat-Thu · 10:00 - 19:00 (GMT+6)",
    href: null,
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's build something great together"
        description="Have a project in mind, or just a question? Reach out, and we reply to every inquiry within 24 hours."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 lg:grid-cols-5">
        {/* Info column */}
        <div className="space-y-4 lg:col-span-2">
          {contactCards.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-[#3391e7]/50"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#3391e7] text-white">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-1 font-semibold text-[#3391e7] hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-bold">Prefer WhatsApp?</h3>
            <p className="mt-2 text-sm text-white/60">
              The fastest way to reach us is WhatsApp. Send a message and get a reply
              within business hours.
            </p>
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Form column */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-3 sm:p-8">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="mt-2 mb-6 text-sm text-white/60">
            Fill in the form and our team will get back to you within 24 hours.
          </p>
          <ContactForm submitLabel="Send Message" />
        </div>
      </section>
    </div>
  );
};

export default Contact;