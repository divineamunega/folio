# folio

Source for [divinne.xyz](https://divinne.xyz), the portfolio of Divinne Amunega, a software engineer in Lagos building backend and AI-integrated systems. I'm currently building [PhishCore](https://phishcore.com).

## Stack

- **[Astro 5](https://astro.build)** with React 19 islands for the interactive parts
- **Tailwind CSS 4** for styling, with GSAP and Lenis for scroll and entrance motion
- **Cloudflare Workers** via `@astrojs/cloudflare`: project pages are prerendered, while the homepage, blog, and API routes run on the worker
- **Redis** (`ioredis`) for blog post like counts, deduplicated by browser fingerprint
- **dev.to API** as the blog source, cached for five minutes

## Running locally

Requires Node 20+ and [pnpm](https://pnpm.io).

```sh
pnpm install
cp .env.example .env   # optional: only needed for blog likes
pnpm dev               # http://localhost:4321
```

Without Redis the site still runs. Only the like counts on blog posts fail.

| Command        | What it does                                 |
| :------------- | :------------------------------------------- |
| `pnpm dev`     | Dev server on `localhost:4321`               |
| `pnpm build`   | Production build to `dist/`                  |
| `pnpm preview` | Serve the production build locally           |

## Environment

| Variable          | Used for                    | Default                  |
| :---------------- | :-------------------------- | :----------------------- |
| `folio_REDIS_URL` | Blog likes (`/api/likes/*`) | `redis://localhost:6379` |

## Where the content lives

Most edits are data, not markup:

| File                       | Holds                                             |
| :------------------------- | :------------------------------------------------ |
| `src/config/site.ts`       | Name, title, meta description, social links, SEO  |
| `src/data/projects.ts`     | Projects and their display order (`projectOrder`) |
| `src/data/talks.ts`        | Conference talks for the Speaking section         |
| `src/data/testimonials.ts` | References. Empty until real ones are added       |
| `public/projects/`         | Project screenshots                               |

Each entry in `projects.ts` generates a page at `/projects/<slug>`.

Testimonials are deliberately empty. Only add a reference from a real person who agreed to give one and can be contacted. To show the section again, re-add `<Testimonials />` in `src/pages/index.astro`.

## Deploying

```sh
pnpm build
npx wrangler deploy
```

Worker settings are in `wrangler.jsonc`.
