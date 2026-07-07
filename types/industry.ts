import type { Slug } from "@/types/common";

/**
 * Industry model — supports the multi-industry expansion strategy
 * (Real Estate first; Healthcare, Finance, Legal, Education, … next).
 */

export type IndustryStatus = "live" | "coming-soon";

export interface Industry {
  slug: Slug;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  status: IndustryStatus;
  /** Common pain points this industry faces (Spec §4). */
  painPoints: string[];
  /** Solution slugs most relevant to this industry. */
  solutions: Slug[];
}
