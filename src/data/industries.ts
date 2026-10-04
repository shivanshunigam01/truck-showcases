import { UNSPLASH_TRUCK } from "@/lib/unsplash";

export type IndustryDetail = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

const images = [
  UNSPLASH_TRUCK.industriesHaulage,
  UNSPLASH_TRUCK.aboutMovement,
  UNSPLASH_TRUCK.heroHighway,
  UNSPLASH_TRUCK.fleetDepot,
  UNSPLASH_TRUCK.heavyTruck,
  UNSPLASH_TRUCK.containerCargo,
  UNSPLASH_TRUCK.roadLogistics,
] as const;

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function row(
  name: string,
  headline: string,
  description: string,
  bullets: string[],
  imageIndex: number,
  imageAlt: string,
): IndustryDetail {
  return {
    slug: slugify(name),
    name,
    headline,
    description,
    bullets,
    image: images[imageIndex % images.length],
    imageAlt,
  };
}

export const INDUSTRY_DETAILS: IndustryDetail[] = [
  row(
    "Manufacturing",
    "Plant-to-plant and inbound raw material runs",
    "Raj Houlage supports manufacturers with scheduled movement of raw materials, finished goods and packaging — keeping production lines supplied across Gujarat and on inter-state routes.",
    ["Raw material and component delivery", "Finished goods dispatch to distributors", "Shift-based and recurring route planning"],
    0,
    "Bulk materials loaded for manufacturing supply chains",
  ),
  row(
    "Automotive",
    "Parts, assemblies and dealer-bound freight",
    "From components to heavy assemblies, we align haulage capacity with automotive supply timelines so plants and dealers receive cargo when production and sales depend on it.",
    ["OEM and tier supplier deliveries", "Dealer and warehouse transfers", "Careful handling for high-value parts"],
    1,
    "Heavy truck moving automotive and industrial freight",
  ),
  row(
    "Construction",
    "Sand, aggregate, cement and site delivery",
    "Our core strength: moving sand, gravel, bricks, cement and bulk construction inputs directly to active sites — the haulage backbone builders rely on daily.",
    ["Sand and aggregate from quarry to site", "Bulk cement and brick haulage", "Multi-drop and project-duration support"],
    2,
    "Construction haulage truck on a building project route",
  ),
  row(
    "FMCG",
    "Distribution centre and retail replenishment",
    "Fast-moving goods need predictable wheels. We help FMCG brands and distributors keep hubs and outlets stocked with reliable road transport.",
    ["Hub-to-hub transfers", "Regional distribution runs", "Time-sensitive replenishment loads"],
    3,
    "Fleet logistics for fast-moving consumer goods",
  ),
  row(
    "Retail",
    "Store and warehouse inbound freight",
    "Retail networks depend on steady inbound flow. We move palletised and bulk cargo to warehouses and large-format stores on agreed schedules.",
    ["Warehouse inbound deliveries", "Seasonal peak capacity", "Multi-location routing across regions"],
    4,
    "Cargo truck serving retail and warehouse networks",
  ),
  row(
    "Infrastructure",
    "Roads, bridges and public works material movement",
    "Infrastructure projects demand volume and discipline. We haul earth, aggregate, steel and equipment feeds for roads, bridges and civil works at scale.",
    ["High-volume aggregate for civil works", "Equipment and oversize coordination", "Long-horizon project haulage"],
    5,
    "Infrastructure and civil works material transport",
  ),
  row(
    "Industrial Goods",
    "Machinery, metals and industrial cargo",
    "Industrial clients need dependable capacity for metals, machinery, spares and packaged industrial goods — with clear communication from pickup to proof of delivery.",
    ["Metal and industrial raw material runs", "Machinery and spares movement", "Factory and yard-to-yard transfers"],
    0,
    "Industrial goods loaded for road transportation",
  ),
  row(
    "E-Commerce",
    "Fulfillment and last-mile feeder lanes",
    "E-commerce growth depends on feeder routes between fulfillment centres, hubs and cities. We provide road legs that keep online supply chains moving.",
    ["FC-to-hub line haul support", "Bulk parcel and carton movement", "Scalable capacity for sale events"],
    6,
    "Logistics truck supporting e-commerce supply chains",
  ),
  row(
    "Agriculture",
    "Produce, inputs and rural market links",
    "We connect farms, mandis and processors with road transport for produce, fertiliser, feed and agri inputs — especially where timing affects quality and price.",
    ["Produce movement to markets and processors", "Agri input and fertiliser delivery", "Seasonal harvest peak support"],
    1,
    "Agricultural freight on regional highways",
  ),
  row(
    "General Cargo",
    "Flexible haulage for mixed freight",
    "Not every load fits a single category. General cargo clients use Raj Houlage for mixed freight, ad-hoc requirements and one-off moves with the same reliability standards.",
    ["Ad-hoc and contract haulage", "Mixed commodity loads", "Quote-based routing across Gujarat and beyond"],
    2,
    "General cargo truck on an open highway",
  ),
];

export const industries = INDUSTRY_DETAILS.map((item) => item.name);

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return INDUSTRY_DETAILS.find((item) => item.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return INDUSTRY_DETAILS.map((item) => item.slug);
}
