import { siteConfig } from "../config/site";
import { migratedArticleDates } from "../data/migrated-article-dates";

const DEV_API_URL = "https://dev.to/api";
const CACHE_DURATION = 5 * 60 * 1000;

interface DevUser {
  name: string;
  username: string;
  profile_image?: string;
  profile_image_90?: string;
}

interface DevArticleSummary {
  id: number;
  title: string;
  description: string;
  slug: string;
  url: string;
  canonical_url: string;
  cover_image?: string | null;
  social_image?: string | null;
  published_at?: string;
  edited_at?: string | null;
  reading_time_minutes?: number;
  tag_list?: string[] | string;
  tags?: string;
  user: DevUser;
}

interface DevArticle extends DevArticleSummary {
  body_html?: string;
  body_markdown?: string;
}

export interface PortfolioPost {
  id: number;
  title: string;
  brief: string;
  slug: string;
  url: string;
  canonicalUrl: string;
  publishedAt?: string;
  updatedAt?: string;
  readTimeInMinutes?: number;
  content: {
    markdown: string;
    html: string;
  };
  coverImage?: {
    url: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  author: {
    id: string;
    name: string;
    profilePicture?: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const postCache = new Map<string, CacheEntry<PortfolioPost>>();
let allPostsCache: CacheEntry<PortfolioPost[]> | undefined;

function isFresh<T>(entry?: CacheEntry<T>): entry is CacheEntry<T> {
  return Boolean(entry && Date.now() - entry.timestamp < CACHE_DURATION);
}

async function fetchDevJson<T>(path: string): Promise<T> {
  const response = await fetch(`${DEV_API_URL}${path}`, {
    headers: {
      Accept: "application/vnd.forem.api-v1+json",
      "User-Agent": "divinne-portfolio",
    },
  });

  if (!response.ok) {
    throw new Error(`DEV API request failed with HTTP ${response.status}.`);
  }

  return response.json() as Promise<T>;
}

function getArticleTags(article: DevArticleSummary): string[] {
  if (Array.isArray(article.tag_list)) {
    return article.tag_list;
  }

  if (typeof article.tag_list === "string") {
    return article.tag_list.split(",").map((tag) => tag.trim());
  }

  return article.tags?.split(",").map((tag) => tag.trim()) ?? [];
}

function getPortfolioSlug(article: DevArticleSummary): string {
  try {
    const canonicalUrl = new URL(article.canonical_url);
    const blogPrefix = `${new URL(siteConfig.url).pathname.replace(/\/$/, "")}/blog/`;

    if (
      canonicalUrl.origin === new URL(siteConfig.url).origin &&
      canonicalUrl.pathname.startsWith(blogPrefix)
    ) {
      return canonicalUrl.pathname.slice(blogPrefix.length).replace(/\/$/, "");
    }
  } catch {
    // Fall back to the DEV slug when an article has no valid canonical URL.
  }

  return article.slug;
}

function normalizeArticle(article: DevArticle): PortfolioPost {
  const tags = getArticleTags(article);
  const profilePicture =
    article.user.profile_image ?? article.user.profile_image_90;
  const slug = getPortfolioSlug(article);

  return {
    id: article.id,
    title: article.title,
    brief: article.description,
    slug,
    url: article.url,
    canonicalUrl: article.canonical_url,
    publishedAt: migratedArticleDates[slug] ?? article.published_at,
    updatedAt: article.edited_at ?? article.published_at,
    readTimeInMinutes: article.reading_time_minutes,
    content: {
      markdown: article.body_markdown ?? "",
      html: article.body_html ?? "",
    },
    ...(article.cover_image || article.social_image
      ? {
          coverImage: {
            url: article.cover_image ?? article.social_image!,
          },
        }
      : {}),
    tags: tags.map((tag) => ({
      id: tag,
      name: tag,
      slug: tag,
    })),
    author: {
      id: article.user.username,
      name: article.user.name,
      ...(profilePicture ? { profilePicture } : {}),
    },
    seo: {
      title: article.title,
      description: article.description,
    },
  };
}

export async function fetchAllPublicationPosts(): Promise<PortfolioPost[]> {
  if (isFresh(allPostsCache)) {
    return allPostsCache.data;
  }

  try {
    const params = new URLSearchParams({
      username: siteConfig.devToUsername,
      per_page: "1000",
    });
    const articles = await fetchDevJson<DevArticleSummary[]>(
      `/articles?${params.toString()}`,
    );
    const posts = articles
      .map(normalizeArticle)
      .sort(
        (articleA, articleB) =>
          new Date(articleB.publishedAt ?? 0).getTime() -
          new Date(articleA.publishedAt ?? 0).getTime(),
      );

    allPostsCache = {
      data: posts,
      timestamp: Date.now(),
    };

    return posts;
  } catch (error) {
    console.error("Failed to fetch DEV articles", error);
    return allPostsCache?.data ?? [];
  }
}

export async function fetchPublicationPost(
  slug: string,
): Promise<PortfolioPost | null> {
  const cached = postCache.get(slug);

  if (isFresh(cached)) {
    return cached.data;
  }

  try {
    const articles = await fetchAllPublicationPosts();
    const summary = articles.find((article) => article.slug === slug);

    if (!summary) {
      return cached?.data ?? null;
    }

    const article = await fetchDevJson<DevArticle>(
      `/articles/${summary.id.toString()}`,
    );
    const post = normalizeArticle(article);

    postCache.set(slug, {
      data: post,
      timestamp: Date.now(),
    });

    return post;
  } catch (error) {
    console.error(`Failed to fetch DEV article "${slug}"`, error);
    return cached?.data ?? null;
  }
}
