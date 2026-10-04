import { createFileRoute, notFound } from "@tanstack/react-router";
import { IndustryDetailPage } from "@/components/IndustryDetailPage";
import { getIndustryBySlug } from "@/data/industries";

export const Route = createFileRoute("/industries/$slug")({
  head: ({ params }) => {
    const industry = getIndustryBySlug(params.slug);
    if (!industry) return {};
    return {
      meta: [
        { title: `${industry.name} | Industries | Raj Houlage Pvt. Ltd.` },
        {
          name: "description",
          content: `${industry.headline} — ${industry.description.slice(0, 140)}…`,
        },
        { property: "og:title", content: `${industry.name} | Raj Houlage` },
        { property: "og:description", content: industry.headline },
      ],
      links: [{ rel: "canonical", href: `/industries/${industry.slug}` }],
    };
  },
  component: IndustryRoute,
});

function IndustryRoute() {
  const { slug } = Route.useParams();
  const industry = getIndustryBySlug(slug);
  if (!industry) throw notFound();
  return <IndustryDetailPage industry={industry} />;
}
