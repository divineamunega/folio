export interface Talk {
  title: string;
  description: string;
  event?: string;
  year?: string;
  url?: string;
}

export const talks: Talk[] = [
  {
    title:
      "AI Routers Explained (and Built): The Gateway Between You and the Model",
    description:
      "Most AI apps wire users straight to a model — one pipe that is expensive, fragile, and leaky. This talk builds the missing layer live in TypeScript: a router that classifies intent, strips sensitive data before the API call, and sends each request to the right model. The API gateway for the age of AI.",
    event: "DevFest Ajah",
    year: "December 2025",
    url: "https://sessionize.com/s/divinne/ai-routers-explained-and-built-the-gateway-between/154911",
  },
];
