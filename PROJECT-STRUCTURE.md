# Project Structure

This portfolio is organized using modern best practices with clear separation of concerns. Each directory has a specific purpose, making the codebase maintainable and scalable.

## 📁 Directory Overview

```
folio/
├── src/
│   ├── components/          # All React/Astro components
│   │   ├── ui/              # Reusable UI primitives
│   │   ├── layout/          # Layout components (NavBar, Footer, SEO)
│   │   └── features/        # Feature-specific components
│   │
│   ├── config/              # Configuration files
│   │   ├── site.ts          # Site-wide settings & metadata
│   │   └── tech-stack.ts    # Technology skills configuration
│   │
│   ├── data/                # Data files
│   │   └── projects.ts      # Project data
│   │
│   ├── lib/                 # Utility functions (empty for now)
│   │
│   ├── pages/               # Astro pages (routes)
│   │   ├── index.astro      # Homepage
│   │   └── projects/
│   │       └── [slug].astro # Dynamic project pages
│   │
│   ├── styles/              # Global styles
│   │   └── global.css       # Global CSS & Tailwind
│   │
│   └── types/               # TypeScript type definitions
│       └── index.ts         # Shared types
│
├── public/                  # Static assets
│   ├── og-image.png         # Open Graph image
│   ├── favicon.png          # Favicon
│   ├── person.jpg           # Avatar image
│   ├── robots.txt           # SEO robots file
│   └── sitemap.xml          # SEO sitemap
│
└── [config files]           # Root config files

```

## 🎨 Components Architecture

### `/src/components/ui/` - UI Primitives

Reusable, generic UI components that can be used anywhere:

- **`Button.astro`** - Versatile button with variants (primary, secondary, ghost) and sizes
- **`Card.astro`** - Container component for content cards
- **`Badge.astro`** - Small label/tag component for tags and categories
- **`Icon.astro`** - SVG icon wrapper with consistent sizing
- **`SectionHeading.astro`** - Consistent heading styles for sections

**Usage:**
```astro
import Button from "../ui/Button.astro";
import Badge from "../ui/Badge.astro";

<Button href="/contact" variant="primary" size="lg">
  Get in touch
</Button>

<Badge variant="accent">TypeScript</Badge>
```

### `/src/components/layout/` - Layout Components

Components that define page structure and SEO:

- **`BaseLayout.astro`** - Main layout wrapper with SEO, meta tags, scripts
- **`SEO.astro`** - Handles all meta tags, Open Graph, Twitter Cards, Schema.org
- **`Section.astro`** - Consistent section wrapper with spacing and borders
- **`Navbar.astro`** - Fixed navigation with theme toggle
- **`Footer.astro`** - Site footer with copyright

**Usage:**
```astro
import BaseLayout from "../components/layout/BaseLayout.astro";
import Section from "../components/layout/Section.astro";

<BaseLayout title="Custom Title" description="Custom description">
  <Section id="projects" spacing="lg">
    <!-- Content here -->
  </Section>
</BaseLayout>
```

### `/src/components/features/` - Feature Components

Feature-specific components (not meant to be reused elsewhere):

- **`Hero.astro`** - Homepage hero section with animations
- **`Projects.astro`** - Projects grid section
- **`ProjectCard.astro`** - Individual project card
- **`TechStack.astro`** - Technology skills grid
- **`Contact.astro`** - Contact section with social links

**These components are specific to their feature and shouldn't be reused elsewhere.**

## ⚙️ Configuration

### `/src/config/site.ts`

Central configuration for all site-wide settings:

```typescript
export const siteConfig = {
  name: "Divinne Amunega",
  title: "Divinne Amunega - Fullstack Developer",
  description: "...",
  url: "https://divinne.xyz",
  author: {
    name: "Divinne Amunega",
    email: "divineamunega@gmail.com",
    // ...
  },
  social: {
    github: "https://github.com/divineamunega",
    // ...
  },
};
```

**Why this matters:**
- Single source of truth for site info
- Update once, changes everywhere
- Type-safe configuration
- No hardcoded values scattered around

### `/src/config/tech-stack.ts`

Configure your technology skills:

```typescript
export const techStack: TechItem[] = [
  {
    name: "React",
    icon: "devicon-react-original colored",
    category: "frontend",
  },
  // ...
];
```

## 📄 Pages

### `/src/pages/index.astro`

Clean, simple homepage that composes features:

```astro
import Hero from "../components/features/Hero.astro";
import Projects from "../components/features/Projects.astro";
// ...

<BaseLayout>
  <Navbar />
  <Hero />
  <Projects />
  <TechStack />
  <Contact />
  <Footer />
</BaseLayout>
```

### `/src/pages/projects/[slug].astro`

Dynamic project detail pages using data from `/src/data/projects.ts`.

## 🎯 Key Principles

### 1. **Single Responsibility**
Each component does one thing well. `Button` is just a button. `Card` is just a card.

### 2. **Composition over Inheritance**
Build complex UIs by composing simple components:

```astro
<Card>
  <SectionHeading title="Projects" />
  <Button>View More</Button>
</Card>
```

### 3. **Configuration over Code**
Settings in `/src/config/` instead of hardcoded values throughout the codebase.

### 4. **Clear Naming**
- `ui/` = generic, reusable
- `features/` = specific features
- `layout/` = page structure

## 🚀 Adding New Features

### Adding a New Section

1. Create feature component in `/src/components/features/NewSection.astro`
2. Import and add to `/src/pages/index.astro`
3. That's it!

```astro
// features/Testimonials.astro
import Section from "../layout/Section.astro";
import SectionHeading from "../ui/SectionHeading.astro";

<Section>
  <SectionHeading title="Testimonials" />
  <!-- Content -->
</Section>
```

### Adding a New UI Component

1. Create in `/src/components/ui/ComponentName.astro`
2. Define clear props interface
3. Add JSDoc comments
4. Export and use anywhere

```astro
---
/**
 * Tooltip Component
 * Displays helpful tooltip on hover
 */

interface Props {
  text: string;
  position?: "top" | "bottom";
}

const { text, position = "top" } = Astro.props;
---

<!-- Implementation -->
```

### Adding Configuration

Add to `/src/config/` for any site-wide settings:

```typescript
// config/analytics.ts
export const analyticsConfig = {
  googleAnalyticsId: "G-XXXXXXXXXX",
  plausibleDomain: "divinne.xyz",
};
```

## 📚 File Organization Tips

### ✅ DO:
- Keep components small and focused
- Use TypeScript interfaces for props
- Add JSDoc comments to document components
- Put reusable logic in `/src/lib/`
- Store data in `/src/data/`
- Configure in `/src/config/`

### ❌ DON'T:
- Put multiple unrelated components in one file
- Hardcode site info (use `siteConfig`)
- Mix UI primitives with feature components
- Create deeply nested component folders
- Duplicate code (extract to shared components)

## 🔄 Migration Notes

Old files have been backed up with `.old.astro` extension:
- `src/pages/index.old.astro`
- `src/pages/projects/[slug].old.astro`

Old components in `/src/components/` (not in subdirectories) can be safely deleted after verifying the new structure works.

## 🎨 Design System

Colors are defined in `/src/styles/global.css`:

```css
:root {
  --color-accent: #6366f1;        /* Indigo accent */
  --color-light-bg: #fafafa;      /* Off-white background */
  --color-text-primary: #0a0a0a;  /* Near-black text */
  --color-text-secondary: #404040; /* Gray text */
}
```

Use these CSS variables or Tailwind classes throughout the project for consistency.

## 🛠️ Development Workflow

1. **Start dev server:** `npm run dev`
2. **Add new feature:** Create in `/src/components/features/`
3. **Need reusable component?** Create in `/src/components/ui/`
4. **Add data:** Update `/src/data/` or `/src/config/`
5. **Deploy:** `npm run build` → Deploy `dist/`

## 📖 Further Reading

- [Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)
- [TypeScript in Astro](https://docs.astro.build/en/guides/typescript/)
- [Astro Best Practices](https://docs.astro.build/en/guides/best-practices/)

---

**Remember:** This structure is designed to grow with your project. Start simple, add complexity only when needed.
