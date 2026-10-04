import { logoUrl, rkGroupLogoUrl } from "@/data/site";

export function BrandLogos({ className = "" }: { className?: string }) {
  return (
    <div className={`brand-logos ${className}`.trim()}>
      <img className="brand-logo-raj" src={logoUrl} alt="Raj Houlage Pvt. Ltd." />
      <img className="brand-logo-rk" src={rkGroupLogoUrl} alt="RK Group" />
    </div>
  );
}
