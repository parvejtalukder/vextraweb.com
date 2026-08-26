/**
 * Central site-wide configuration for VextraWeb.
 * Update these values once and they propagate across the whole site.
 */
export const COMPANY = {
  name: "VextraWeb",
  title: "VextraWeb | Custom Web Application Development",
  tagline: "Custom Web Application Development",
  description:
    "VextraWeb builds and scales modern custom web applications, websites and e-commerce solutions that are fast, reliable and future-ready.",
  founders: [
    {
      name: "Jakaria Hossain Jusef",
      initials: "JHS",
      role: "Co-Founder & Chairman",
      focus: "VextraWeb",
      bio: "Jakaria provides the company's senior leadership, strategic direction, and overall governance. As Chairman, he oversees the long-term vision of VextraWeb and guides major business decisions as the company grows.",
      contact: null,
    },
    {
      name: "Parvej Husen Talukder",
      initials: "PHT",
      role: "Co-Founder & CEO",
      focus: "VextraWeb",
      bio:
        "Parvej leads the company's day-to-day operations, technology, projects, and business execution. As CEO, he works closely with the team and clients to turn VextraWeb's vision into practical digital products and services.",
      contact: "whatsapp",
    },
  ],
  email: "mail.vextraweb@gmail.com",
  phoneDisplay: "+880 1540-307370",
  phoneHref: "tel:+8801540307370",
  whatsappHref: "https://wa.me/8801540307370",
  website: "https://vextraweb.com",
  location: "Bangladesh · serving clients worldwide",
};

/**
 * Build a prefilled mailto: link so contact forms stay fully
 * functional without any backend.
 */
export const mailto = ({ to = COMPANY.email, subject = "", body = "" }) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${to}${query ? `?${query}` : ""}`;
};