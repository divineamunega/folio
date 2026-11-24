export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  projectSlug?: string;
}

// NOTE: This section was removed from the homepage because it previously held
// fabricated endorsements from people who do not exist. Only add entries here
// for real people who have actually given a reference and can be contacted.
// The section is wired back up by re-adding <Testimonials /> to src/pages/index.astro.
export const testimonials: Testimonial[] = [];
