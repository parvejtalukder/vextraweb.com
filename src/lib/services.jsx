import { Code2, Megaphone, Newspaper, ShieldCheck, ShoppingCart } from "lucide-react";

/**
 * Single source of truth for VextraWeb's core services.
 * Used by the homepage Services section, the /services page and
 * the consultation/contact forms.
 */
export const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "Custom full-stack applications built on modern, scalable architecture, from interactive dashboards to secure API integrations.",
    features: [
      "Custom dashboards & admin panels",
      "API development & secure integrations",
      "Secure, scalable architecture",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "High-converting online stores engineered to streamline checkout, payments and inventory management.",
    features: [
      "Payment gateway integration",
      "Product & inventory management",
      "Order & customer management",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Digital Reputation Management",
    description:
      "Build and protect your digital credibility with Google Knowledge Panels, MediaWiki platforms and carefully developed wiki content.",
    features: [
      "Google Knowledge Panel creation",
      "MediaWiki setup & management",
      "Wiki content development",
    ],
  },
  {
    icon: Newspaper,
    title: "Content & Media Platforms",
    description:
      "Dynamic WordPress portals and news/magazine websites optimised for speed, reach and SEO.",
    features: [
      "WordPress & news/magazine portals",
      "SEO & speed optimization",
      "Content publishing workflows",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Publishing",
    description:
      "Amplify your brand with promotional publishing, SEO strategy and stronger online visibility.",
    features: [
      "Promotional publishing",
      "SEO strategies & keyword research",
      "Online brand visibility",
    ],
  },
];

export const serviceLabels = services.map((s) => s.title);