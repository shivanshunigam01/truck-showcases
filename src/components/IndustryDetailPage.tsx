import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { IndustryDetail } from "@/data/industries";
import { SiteLayout } from "@/components/SiteLayout";

export function IndustryDetailPage({ industry }: { industry: IndustryDetail }) {
  return (
    <SiteLayout>
      <article className="industry-page">
        <div className="industry-page-hero">
          <img src={industry.image} alt={industry.imageAlt} />
          <div className="industry-page-hero-shade" />
          <div className="industry-page-hero-content section-pad">
            <Link to="/" hash="industries" className="industry-back">
              <ArrowLeft size={18} /> Industries we serve
            </Link>
            <span className="eyebrow">Sector</span>
            <h1>{industry.name}</h1>
            <p>{industry.headline}</p>
          </div>
        </div>
        <section className="industry-page-body section-pad">
          <div className="industry-page-grid">
            <div>
              <h2>
                Haulage built for <em>{industry.name.toLowerCase()}</em>
              </h2>
              <p>{industry.description}</p>
              <a className="button button-primary industry-page-cta" href="/#quote">
                Request a quote <ArrowRight />
              </a>
            </div>
            <ul className="industry-page-list">
              {industry.bullets.map((bullet) => (
                <li key={bullet}>
                  <Check size={20} aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
