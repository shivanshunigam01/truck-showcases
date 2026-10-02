import hero from "@/assets/hero.jpg.asset.json";
import fleet from "@/assets/fleet.jpg.asset.json";
import road from "@/assets/road.jpg.asset.json";
import warehouse from "@/assets/warehouse.jpg.asset.json";
import cargo from "@/assets/cargo.jpg.asset.json";
import logistics from "@/assets/logistics.jpg.asset.json";

export const images = {
  hero: hero.url,
  fleet: fleet.url,
  road: road.url,
  warehouse: warehouse.url,
  cargo: cargo.url,
  logistics: logistics.url,
};

export const nav = ["Home", "About", "Services", "Fleet", "Industries", "Why Us", "Contact"];

export const services = [
  ["01", "Sand & Aggregate Transport", "Dedicated haulage of sand and aggregate from source to site, run on schedules builders can plan around."],
  ["02", "Bulk Material Haulage", "High-volume movement of bricks, cement and gravel for contractors and developers who order at scale."],
  ["03", "Construction Site Delivery", "Direct, on-time delivery of materials to active construction and infrastructure sites."],
  ["04", "Fleet & Logistics Management", "Coordinated fleet capacity and route planning so material supply keeps pace with project timelines."],
  ["05", "Project-Based Supply Chain Support", "Ongoing haulage support structured around a project's full duration, not a single delivery."],
];

export const fleetData = [
  { name: "Container carriers", count: "5+", image: images.cargo },
  { name: "Heavy trucks", count: "4+", image: images.hero },
  { name: "Multi-axle trucks", count: "2+", image: images.fleet },
];

export const industries = [
  "Manufacturing", "Automotive", "Construction", "FMCG", "Retail",
  "Infrastructure", "Industrial Goods", "E-Commerce", "Agriculture", "General Cargo",
];

export const reasons = [
  ["Reliability", "Focused on dependable transportation execution, every time."],
  ["Safety", "Responsible transportation and cargo handling practices."],
  ["Transparency", "Clear communication throughout the transportation process."],
  ["Efficiency", "Practical transportation solutions built around operational efficiency."],
  ["Long-Term Partnerships", "Focused on building lasting relationships with customers and business partners."],
];

export const stats = [
  ["8+", "Trucks in Fleet"], ["10+", "Projects Delivered"], ["6+", "Clients Served"],
  ["1+", "Year in Operation"], ["13.6M", "Company Valuation (USD)"],
];