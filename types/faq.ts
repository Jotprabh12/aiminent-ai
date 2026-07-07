import type { Slug } from "@/types/common";

/**
 * FAQ model — powers the FAQ accordion and the FAQPage structured data
 * (lib/seo/structured-data.ts).
 */

export interface FAQItem {
  id: Slug;
  question: string;
  answer: string;
  /** Optional grouping key, e.g. "pricing", "process", "security". */
  category?: string;
}

export interface FAQCategory {
  id: Slug;
  title: string;
  items: FAQItem[];
}
