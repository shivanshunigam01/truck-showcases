/** Unsplash CDN — trucking, haulage, warehouse, and logistics imagery. */

export function unsplash(photoSlug: string, width = 1600, quality = 80): string {
  return `https://images.unsplash.com/photo-${photoSlug}?fm=jpg&auto=format&fit=crop&w=${width}&q=${quality}`;
}

/** Verified photo-* slugs (HEAD 200 on images.unsplash.com). */
export const UNSPLASH_TRUCK = {
  /** Hero — tractor-trailer on an Indian highway (Tamil Nadu), high-res */
  heroHighway: unsplash("1709735133497-bbead76953a9", 2400, 85),
  /** About — dump truck hauling gravel on a construction site */
  aboutMovement: unsplash("1751054631354-a42bd7609d75", 1800, 85),
  /** Fleet / CTA — row of semi trucks */
  fleetDepot: unsplash("1720811559371-7b0ebd219127", 1600),
  /** Industries we serve — sand, aggregate & bulk material loading onto trucks */
  industriesHaulage: unsplash("1637076988526-f7a77037845c", 1800, 85),
  /** Showcase — logistics / transport */
  roadLogistics: unsplash("1558618666-fcd25c85cd64", 1600),
  /** Containers and cargo yard */
  containerCargo: unsplash("1581092160562-40aa08e78837", 1600),
  /** Heavy haul / construction delivery */
  heavyTruck: unsplash("1504307651254-35680f356dfd", 1600),
  /** Construction material delivery */
  constructionHaul: unsplash("1504307651254-35680f356dfd", 1600),
} as const;
