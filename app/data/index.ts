import { Service, Project, Stat, ProcessStep, ContactInfo } from "@/app/types";

export const SERVICES: Service[] = [
  {
    index: "I",
    title: "Web Design & Development",
    description:
      "Bespoke digital experiences crafted with obsessive attention to detail. From concept to pixel-perfect execution — nothing less than exceptional.",
    tags: ["UI/UX Design", "Next.js", "Motion Design"],
  },
  {
    index: "II",
    title: "Full-Stack Applications",
    description:
      "Scalable, architecturally sound platforms engineered to perform under pressure and grow with your ambition.",
    tags: ["Node.js", "MongoDB", "REST & GraphQL"],
  },
  {
    index: "III",
    title: "E-commerce Solutions",
    description:
      "Revenue-optimised storefronts that convert with elegance. We build the commerce infrastructure your brand deserves.",
    tags: ["Shopify", "Payment Integrations"],
  },
  {
    index: "IV",
    title: "Performance & SEO",
    description:
      "Precision-driven performance. We ensure your digital presence commands attention — from search engines and humans alike.",
    tags: ["Core Web Vitals", "Technical SEO", "Analytics"],
  },
];

export const PROJECTS: Project[] = [
  {
      title: "Cardinal Torch Company Limited",
      category: "Full-Stack Platform",
      year: "2024",
      description: "Your Trusted Partner in Seamless Commodity Trade and Market Solutions.",
      url: "https://cardinaltorch.com",
  },
  {
    title: "CTCL Learning Platform",
    category: "Web Application",
    year: "2026",
    description: "Cardinal Torch Company Limited's Learning Management System for Employee Training and Development.",
    url: "https://ctcllearning.com",
  },
  {
    title: "Cardinal Energies",
    category: "Web Design & Dev",
    year: "2025",
    description: "Energizing the Future: Cardinal Energies' Dynamic Web Presence for Renewable Energy Solutions.",
    url: "https://cardinal-energies.com",
  },
  {
    title: "Cardinal Torch Company Limited Online Database Dashboard",
    category: "Full-Stack Application",
    year: "2025",
    description: "Empowering Data-Driven Decisions: Cardinal Torch Company Limited's Online Database Dashboard for Real-Time Insights and Analytics.",
    url: "https://employee.cardinaltorch.com",
  },
];

export const STATS: Stat[] = [
  { value: "52", suffix: "+", label: "Projects Delivered" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
  { value: "3.8", suffix: "×", label: "Avg. Revenue Lift" },
  { value: "14", suffix: "d", label: "Days to First Delivery" },
];

export const PROCESS: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "We immerse ourselves in your world — your goals, your audience, your competitors — before a single line is written.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "A clear roadmap. Defined scope. Agreed milestones. No surprises — only forward momentum.",
  },
  {
    num: "03",
    title: "Craft",
    desc: "Design and engineering in lockstep. Each sprint reviewed together, refined to the highest standard.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deployment, performance tuning, QA. Then we stay — because the relationship doesn't end at go-live.",
  },
];

export const TECH: string[] = [
  "Next.js 15",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
  "MongoDB",
  "Shopify",
  "Stripe",
  "Vercel",
  "Figma",
];

export const NAV_LINKS: string[] = [
  "Services",
  "Work",
  "Process",
  "About",
  "Contact",
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: "✉", label: "Email", value: "codeot17@gmail.com" },
  { icon: "⊙", label: "Location", value: "Available Worldwide · Remote-First" },
];

export const BUDGET_OPTIONS: string[] = [
  "$300 – $2000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];