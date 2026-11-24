export const projects = {
  phishcore: {
    title: "PhishCore",
    year: "2026",
    description:
      "Human risk management platform built on controlled phishing simulations — realistic enough to produce honest behavioral signal, engineered so employee passwords are purged at the HTTP boundary and never stored.",
    longDescription:
      "PhishCore helps security teams measure how their people respond to phishing under realistic inbox pressure, then coach them without harvesting anything sensitive. An admin proves ownership of a target domain via a DNS TXT record, imports an employee directory, launches controlled campaigns, and watches delivery, open, click, and submission telemetry come back in real time. It is a TypeScript monorepo: a NestJS API with BullMQ workers over PostgreSQL and Redis, a React operations console, and an Astro marketing site, with authentication delegated entirely to WorkOS so the platform never handles a password.",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "React", "Docker"],
    liveUrl: "https://phishcore.com",
    imageUrl: "/projects/phishcore.png",
    videoUrl: "",
    features: [
      "High-fidelity, controlled phishing simulations",
      "Cryptographic DNS domain-ownership verification before any launch",
      "Delivery, open, click, and submission telemetry",
      "Zero credential capture — password characters purged at the HTTP boundary",
      "WorkOS-delegated authentication and SSO; no passwords handled",
      "Employee directory with validated CSV import",
    ],
    challenges:
      "The central tension is realism without recklessness. A simulation has to be convincing enough to produce honest behavioral signal, while guaranteeing that no raw credential ever reaches storage — password characters are discarded at the HTTP boundary, so only interaction events are persisted. Every campaign is gated behind cryptographic proof of domain ownership and strict tenant boundaries, so the platform cannot be aimed at a domain its operator does not control, and sensitive themes are locked out by policy defaults rather than left to an operator's judgment.",
    seoKeywords: [
      "phishing simulation platform",
      "human risk management software",
      "security awareness training platform",
      "NestJS developer Nigeria",
      "TypeScript backend engineer",
      "security platform developer",
    ],
    category: "Security Platform",
  },
  clashgrid: {
    title: "ClashGrid",
    year: "2026",
    description:
      "One public site for a gaming venue — product and tournament requests, leaderboards, and a protected admin workspace. The hard part was letting gamers signal interest without a request ever reading as a confirmed purchase or tournament spot.",
    collaborator: "@BrahimView",
    collaboratorUrl: "https://my-portfolio-v2-one-sage.vercel.app/",
    longDescription:
      "ClashGrid gives a gaming venue one public site for products, tournament entries, leaderboards, and local competition. Gamers can submit a product or session request and continue with venue staff on WhatsApp for confirmation. A protected admin workspace lets staff manage requests, products, tournaments, players, rankings, and public results without a developer.",
    tags: ["Astro", "Supabase", "React"],
    liveUrl: "https://clashgrid-kappa.vercel.app/",
    imageUrl: "/projects/clashgrid.png",
    videoUrl: "",
    features: [
      "Product and session request flows",
      "Tournament entries and competitive leaderboards",
      "WhatsApp handoff for staff confirmation",
      "Protected admin workspace",
      "Product, tournament, player, and ranking management",
    ],
    challenges:
      "ClashGrid needs to make it easy for gamers to show interest without presenting a request as a completed purchase, booking, or tournament spot. The public flows create a traceable request, while staff retain control over availability, pricing, confirmation, and fulfilment. The admin side also needs to keep venue content current without exposing customer data or administrative controls to the public site.",
    seoKeywords: [
      "gaming venue website Nigeria",
      "tournament management website",
      "gaming store request platform",
      "Astro Supabase application",
      "gaming leaderboard website",
    ],
    category: "Gaming platform",
  },
  everbright: {
    title: "Everbright",
    year: "2026",
    description:
      "Marketing site for a Nigerian cleaning and facility-care company, spanning residential, commercial, fumigation, and post-construction work. The challenge was making a wide service range scannable without hiding the detail people need before requesting a quote.",
    collaborator: "@BrahimView",
    collaboratorUrl: "https://my-portfolio-v2-one-sage.vercel.app/",
    longDescription:
      "Everbright helps households, offices, property managers, and event venues find cleaning and facility-care services. The site covers residential and commercial cleaning, sanitization, fumigation, move-in and move-out work, and post-construction care. We built clear service pages, direct quote and WhatsApp paths, responsive navigation, dark mode, and accessible interactions for people booking from any device.",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://everbright-nu.vercel.app/",
    imageUrl: "/projects/everbright.png",
    videoUrl: "",
    features: [
      "Service pages for home, office, and facility care",
      "Quote and WhatsApp contact paths",
      "Responsive navigation and mobile layout",
      "Light and dark themes",
      "Keyboard-friendly controls and visible focus states",
    ],
    challenges:
      "Everbright offers several kinds of work, from home cleaning to fumigation and post-construction care. We needed to make those services easy to scan without hiding the detail people need before requesting a quote. The result gives each service a clear path while keeping contact options close at hand across desktop and mobile.",
    seoKeywords: [
      "cleaning company website Nigeria",
      "facility management website",
      "commercial cleaning website",
      "fumigation service website",
      "React business website",
    ],
    category: "Business website",
  },
  awaledger: {
    title: "Awaledger",
    year: "2026",
    description:
      "Bookkeeping for small businesses: AI turns messy receipt and invoice uploads into reviewable ledger entries, and nothing posts until the owner confirms the numbers.",
    longDescription:
      "Awaledger helps small businesses keep their financial records in one place. AI reads receipt and invoice uploads into reviewable transactions, while CSV imports bring in existing records. The ledger tracks income and expenses, and reports, insights, and guided tools help business owners understand their day-to-day numbers.",
    tags: ["Next.js", "PostgreSQL", "AI"],
    liveUrl: "https://awaledger.com",
    imageUrl: "/projects/awaledger.png",
    videoUrl: "",
    features: [
      "Receipt and invoice review",
      "Income and expense ledger",
      "CSV imports",
      "Reports and guidance",
    ],
    challenges:
      "Turning receipts, invoices, handwritten records, and CSV files into reliable ledger entries means handling incomplete or messy source data without guessing. The upload flow creates a proposed transaction, lets users correct the amount, date, category, and line items, checks that reviewed totals add up, and saves nothing to the ledger until the user confirms it. The same path also needs to stay clear on a phone and keep each business's records separate.",
    seoKeywords: [
      "bookkeeping software for small businesses",
      "business ledger software Nigeria",
      "receipt tracking app",
      "AI bookkeeping software",
      "small business finance software Africa",
    ],
    category: "Business finance software",
  },
  "jersey-co": {
    title: "Jersey.Co",
    year: "2025",
    description:
      "Sports-jersey e-commerce store with browsing, cart, and checkout, built on Astro for fast static pages. The interesting part was running a fully interactive cart inside a mostly static site with careful client-side hydration.",
    longDescription:
      "A full-featured e-commerce site built with Astro and Tailwind CSS. Features include product browsing, shopping cart functionality, and a streamlined checkout process. The site focuses on performance with static generation while maintaining interactive cart features.",
    tags: ["Astro", "Tailwind", "E-commerce"],
    liveUrl: "https://jerseyco.vercel.app/",
    githubUrl: "https://github.com/divineamunega/jersey_co",
    imageUrl: "/projects/project_1.png",
    videoUrl: "",
    features: [
      "Product catalog with filtering",
      "Shopping cart management",
      "Responsive design",
      "Fast page loads with Astro",
    ],
    challenges:
      "Building an interactive cart system in a primarily static site required careful state management and client-side hydration strategies.",
    seoKeywords: [
      "e-commerce developer Nigeria",
      "online store developer",
      "shopping cart developer",
      "Astro developer Nigeria",
      "e-commerce website Nigeria",
      "online marketplace developer",
      "fullstack e-commerce developer",
    ],
    category: "E-commerce Development",
  },
  "plant-palace": {
    title: "Plant Palace",
    year: "2024",
    description:
      "A plant-trading marketplace with user accounts and listing management, built in vanilla HTML, CSS, and JavaScript — the hard part was a robust authentication flow with no framework to lean on.",
    longDescription:
      "A marketplace platform built with HTML, CSS, and JavaScript where users can buy and sell plants. Features user authentication and a clean interface for browsing plant listings.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://aptechota-plantpalace-cyberminds.vercel.app/",
    githubUrl: "https://github.com/MhideTech/Techwiz-Project-PlantPalace",
    imageUrl: "/projects/project_2.png",
    videoUrl: "",
    features: [
      "User authentication system",
      "Plant listing management",
      "Search and filter functionality",
      "Responsive layout",
    ],
    challenges:
      "Implementing a robust authentication flow with vanilla JavaScript while maintaining security best practices.",
    seoKeywords: [
      "marketplace developer Nigeria",
      "authentication developer",
      "JavaScript developer Nigeria",
      "web application developer",
      "listing platform developer",
      "marketplace website Nigeria",
      "frontend developer Nigeria",
    ],
    category: "Marketplace Development",
  },
  "duo-video-share": {
    title: "Duo Video Share",
    year: "2024",
    description:
      "Peer-to-peer video sharing over WebRTC, streaming directly between browsers with no server in the middle. Most of the work went into taming peer connections across different browsers and unreliable networks.",
    longDescription:
      "A peer-to-peer video sharing application built with React and WebRTC. Allows users to share video streams directly without server intermediation.",
    tags: ["React", "WebRTC", "P2P"],
    liveUrl: "https://duo-share-v2.vercel.app/",
    githubUrl: "",
    imageUrl: "/projects/project_3.png",
    videoUrl: "",
    features: [
      "Real-time video streaming",
      "P2P connection via WebRTC",
      "Room-based sharing",
      "Low latency communication",
    ],
    challenges:
      "Managing WebRTC peer connections and handling network issues across different browsers and network configurations.",
    seoKeywords: [
      "WebRTC developer Nigeria",
      "video streaming developer",
      "real-time application developer",
      "React developer Nigeria",
      "P2P developer",
      "video chat developer",
      "streaming platform developer Nigeria",
    ],
    category: "Real-time Communication",
  },
  "get-linked": {
    title: "Get Linked",
    year: "2023",
    description:
      "My Get Linked hackathon entry, built in vanilla JS and CSS around interactive, animated UI. The constraint was keeping complex animations at a smooth 60fps without a library.",
    longDescription:
      "My submission for the Get Linked Hackathon, built entirely with vanilla JavaScript and CSS. Features smooth animations and interactive elements.",
    tags: ["Vanilla JS", "CSS", "Animation"],
    liveUrl: "https://get-linked.netlify.app/",
    githubUrl: "https://github.com/divineamunega/getlinked-tech-hackathon",
    imageUrl: "/projects/project_4.png",
    videoUrl: "",
    features: [
      "Smooth scroll animations",
      "Interactive UI elements",
      "Performance optimized",
      "Mobile responsive",
    ],
    challenges:
      "Creating complex animations with vanilla JavaScript while maintaining smooth 60fps performance.",
    seoKeywords: [
      "animation developer Nigeria",
      "vanilla JavaScript developer",
      "UI/UX developer Nigeria",
      "interactive website developer",
      "performance optimization developer",
      "frontend animation specialist",
      "CSS animation developer",
    ],
    category: "Interactive Web Development",
  },
  "news-portal": {
    title: "News Portal",
    year: "2024",
    description:
      "A full-stack news portal (React, Node, MongoDB) with a CMS, authentication, and live updates. The engineering problem was a schema that scales alongside real-time updates that don't overload the server.",
    longDescription:
      "A comprehensive news portal built with React, Node.js, and MongoDB. Features include content management, user authentication, and real-time news updates.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://acu-news-portal.vercel.app/",
    githubUrl: "",
    imageUrl: "/projects/project_5.png",
    videoUrl: "",
    features: [
      "Content management system",
      "User authentication",
      "Real-time updates",
      "Category management",
    ],
    challenges:
      "Designing a scalable database schema and implementing efficient real-time update mechanisms without overloading the server.",
    seoKeywords: [
      "fullstack developer Nigeria",
      "Node.js developer Nigeria",
      "MongoDB developer",
      "CMS developer Nigeria",
      "content management developer",
      "real-time application developer",
      "MERN stack developer Nigeria",
      "backend developer Nigeria",
    ],
    category: "Fullstack Web Application",
  },
  formfillr: {
    title: "FormFillr",
    year: "2025",
    description:
      "A Chrome extension that reads a web form and uses AI to fill it from your saved profile. The tricky parts were detecting fields reliably across wildly different DOMs and keeping all profile data local and private.",
    longDescription:
      "An intelligent Chrome extension that scans web forms, identifies input fields, and uses AI to generate context-aware suggestions based on saved profile data. Optimized for Google Forms with plans to expand to other platforms.",
    tags: ["TypeScript", "Chrome Extension", "AI", "OpenRouter"],
    liveUrl: "",
    githubUrl: "https://github.com/divineamunega/formfillr",
    imageUrl: "/projects/project_6.png",
    videoUrl:
      "https://player.cloudinary.com/embed/?cloud_name=dop6fpt9e&public_id=output_h4c9qk",
    features: [
      "AI-powered field mapping",
      "One-click autofill",
      "Profile storage",
      "Google Forms optimization",
    ],
    challenges:
      "Building reliable form field detection across different DOM structures and implementing accurate AI field mapping while ensuring user data privacy and local storage security.",
    seoKeywords: [
      "Chrome extension developer Nigeria",
      "AI automation developer",
      "form automation developer",
      "TypeScript developer Nigeria",
      "browser extension developer",
      "productivity tool developer",
      "AI integration developer Nigeria",
    ],
    category: "Browser Extension & AI",
  },
};

// This order is intentional: it keeps the most current, production-facing work
// at the front of the portfolio instead of relying on the year alone.
export const projectOrder = [
  "phishcore",
  "awaledger",
  "clashgrid",
  "everbright",
  "formfillr",
  "jersey-co",
  "news-portal",
  "duo-video-share",
  "plant-palace",
  "get-linked",
] as const satisfies readonly (keyof typeof projects)[];

export const orderedProjects = projectOrder.map((slug) => ({
  slug,
  ...projects[slug],
}));
