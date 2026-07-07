import type { Slug } from "@/types/common";

/**
 * Navigation domain types — primary nav, mobile drawer, and footer.
 * Consumed by lib/constants/navigation.ts and the (future) layout components.
 */

/** A single navigation link. */
export interface NavItem {
  /** Visible label. */
  label: string;
  /** Destination path (internal) or absolute URL (external). */
  href: string;
  /** Marks links that leave the site (opens in a new tab, adds rel). */
  external?: boolean;
  /** Renders a "Coming soon" affordance and disables navigation. */
  comingSoon?: boolean;
  /** Optional child links for dropdown / mega-menu navigation. */
  children?: NavItem[];
}

/** A titled group of links (used by dropdowns and footer columns). */
export interface NavGroup {
  id: Slug;
  title: string;
  items: NavItem[];
}

/** Footer is a set of link columns plus social links. */
export interface FooterConfig {
  columns: NavGroup[];
  social: NavItem[];
  /** Legal links rendered in the footer base row. */
  legal: NavItem[];
}
