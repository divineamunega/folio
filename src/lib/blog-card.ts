import type { PortfolioPost } from "./api";

export function toBlogCardProps(post: PortfolioPost) {
  return {
    slug: `/blog/${post.slug}`,
    title: post.title,
    excerpt: post.brief || "Read more...",
    date: post.publishedAt ?? new Date().toISOString(),
    readTime: (post.readTimeInMinutes ?? 5).toString(),
    tags: post.tags.map((tag) => tag.name),
  };
}
