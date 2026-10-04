import { UNSPLASH_TRUCK } from "@/lib/unsplash";

/** Brand logos (PNG with transparent background). */
export const logoUrl = "/raj-houlage-logo.png";
export const rkGroupLogoUrl = "/rk-group-logo.png";

export const images = {
  hero: UNSPLASH_TRUCK.heroHighway,
  fleet: UNSPLASH_TRUCK.fleetDepot,
  road: UNSPLASH_TRUCK.aboutMovement,
  industries: UNSPLASH_TRUCK.industriesHaulage,
  cargo: UNSPLASH_TRUCK.containerCargo,
  logistics: UNSPLASH_TRUCK.roadLogistics,
} as const;

export const nav = ["Home", "About", "Services", "Fleet", "Industries", "Why Us", "Contact"];

export const services = [
  ["01", "Sand & Aggregate Transport", "Dedicated haulage of sand and aggregate from source to site, run on schedules builders can plan around."],
  ["02", "Bulk Material Haulage", "High-volume movement of bricks, cement and gravel for contractors and developers who order at scale."],
  ["03", "Construction Site Delivery", "Direct, on-time delivery of materials to active construction and infrastructure sites."],
  ["04", "Fleet & Logistics Management", "Coordinated fleet capacity and route planning so material supply keeps pace with project timelines."],
  ["05", "Project-Based Supply Chain Support", "Ongoing haulage support structured around a project's full duration, not a single delivery."],
];

export const fleetData = [
  { name: "Container carriers", count: "5+", image: UNSPLASH_TRUCK.containerCargo },
  { name: "Heavy trucks", count: "4+", image: UNSPLASH_TRUCK.heroHighway },
  { name: "Multi-axle trucks", count: "2+", image: UNSPLASH_TRUCK.heavyTruck },
];

export { industries } from "@/data/industries";

export const reasons = [
  ["Reliability", "Focused on dependable transportation execution, every time."],
  ["Safety", "Responsible transportation and cargo handling practices."],
  ["Transparency", "Clear communication throughout the transportation process."],
  ["Efficiency", "Practical transportation solutions built around operational efficiency."],
  ["Long-Term Partnerships", "Focused on building lasting relationships with customers and business partners."],
];

export const stats = [
  ["8+", "Trucks in Fleet"],
  ["10+", "Projects Delivered"],
  ["6+", "Clients Served"],
  ["1+", "Year in Operation"],
  ["13.6M", "Company Valuation (USD)"],
];
