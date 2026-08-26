import React, { useState } from "react";

const SERVICE_OPTIONS = [
  "Full-Stack Web Application",
  "E-commerce Solutions",
  "Digital Reputation Management (Knowledge Panel / Wiki)",
  "Content & Media Platforms (WordPress / News Portal)",
  "Digital Marketing & Publishing",
  "Something else",
];

const BUDGET_OPTIONS = [
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $5,000",
  "$5,000+",
  "Not sure yet",
];

const fieldCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#3391e7]";
const labelCls = "mb-2 block text-sm font-medium text-white/80";

const ContactForm = ({
  includeService = true,
  includeBudget = true,
  submitLabel = "Send Message",
  source = "contact",
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const buildEmailText = () => {
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Service of interest: ${form.service}`,
      form.budget && `Budget range: ${form.budget}`,
      "",
      "Message:",
      form.message,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setSending(true);

    const subject =
      source === "consultation"
        ? "[VextraWeb] New free consultation request"
        : "[VextraWeb] New inquiry from the website";

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          replyTo: form.email,
          text: buildEmailText(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "success" && (
        <p className="rounded-xl border border-[#3391e7]/40 bg-[#3391e7]/10 px-4 py-3 text-sm text-white">
          Thanks! Your message has been sent. We'll get back to you within 24
          hours.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-white">
          Something went wrong while sending your message. Please try again, or
          reach us directly on WhatsApp.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-name">
            Your name *
          </label>
          <input
            id="cf-name"
            required
            className={fieldCls}
            placeholder="John Smith"
            value={form.name}
            onChange={set("name")}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-email">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            required
            className={fieldCls}
            placeholder="you@email.com"
            value={form.email}
            onChange={set("email")}
          />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="cf-phone">
          Phone / WhatsApp (optional)
        </label>
        <input
          id="cf-phone"
          className={fieldCls}
          placeholder="+880 ..."
          value={form.phone}
          onChange={set("phone")}
        />
      </div>

      {includeService && (
        <div>
          <label className={labelCls} htmlFor="cf-service">
            What do you need help with?
          </label>
          <select
            id="cf-service"
            className={fieldCls}
            value={form.service}
            onChange={set("service")}
          >
            <option value="" className="bg-black">
              Select a service
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-black">
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      {includeBudget && (
        <div>
          <label className={labelCls} htmlFor="cf-budget">
            Budget range (optional)
          </label>
          <select
            id="cf-budget"
            className={fieldCls}
            value={form.budget}
            onChange={set("budget")}
          >
            <option value="" className="bg-black">
              Select a range
            </option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-black">
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className={labelCls} htmlFor="cf-message">
          Tell us about your project *
        </label>
        <textarea
          id="cf-message"
          required
          rows={6}
          className={fieldCls}
          placeholder="Goals, timeline, anything you already know…"
          value={form.message}
          onChange={set("message")}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-[#3391e7] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : submitLabel}
      </button>
      <p className="text-center text-xs text-white/40">
        Your message is sent securely to our team. We usually reply within 24
        hours.
      </p>
    </form>
  );
};

export default ContactForm;