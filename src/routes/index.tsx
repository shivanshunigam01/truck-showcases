import { createFileRoute } from "@tanstack/react-router";
import RajHoulageSite from "@/components/RajHoulageSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Houlage Pvt. Ltd. | Road Transportation & Logistics" },
      { name: "description", content: "Raj Houlage Pvt. Ltd. provides road transportation and logistics solutions focused on reliable and efficient movement of goods across India." },
      { property: "og:title", content: "Raj Houlage Pvt. Ltd. | Road Transportation & Logistics" },
      { property: "og:description", content: "Reliable road transportation and logistics solutions built around dependability, efficiency and long-term business relationships." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Raj Houlage Pvt. Ltd.",
        description: "Road Transportation & Logistics",
        telephone: "+91 76980 82681",
        email: "contact@rajhoulage.in",
        address: { "@type": "PostalAddress", streetAddress: "Navrangpura, near Stadium Cross Road", addressLocality: "Ahmedabad", addressRegion: "Gujarat", postalCode: "382340", addressCountry: "IN" },
      }),
    }],
  }),
  component: RajHoulageSite,
});
