import {
  BarChart3,
  Download,
  FileText,
  HeartHandshake,
  Languages,
  LineChart,
  MessageCircle,
  Palette,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

export const navItems = [
  { href: "about", label: "About" },
  { href: "how-it-works", label: "How it works" },
  { href: "ethics", label: "Ethics" },
  { href: "faq", label: "FAQ" },
  { href: "contact", label: "Contact" }
];

export const studyStats = [
  { label: "Recruitment target", value: "100", note: "micro business owners" },
  { label: "Study area", value: "3", note: "Western Province districts" },
  { label: "Languages", value: "3", note: "English, Sinhala, Tamil" },
  { label: "Research phases", value: "2", note: "survey plus interviews" }
];

export const featureCards = [
  {
    icon: Sparkles,
    title: "AI design visualization",
    text: "Structured briefs become editable prompts and four visual variations for customized decor orders."
  },
  {
    icon: MessageCircle,
    title: "Customer approval loop",
    text: "Secure share pages collect design match, purchase intention, requested changes, and approval."
  },
  {
    icon: ShieldCheck,
    title: "Ethics-first research",
    text: "Consent, eligibility, anonymous participant IDs, withdrawal, and confidential exports are built into the flow."
  },
  {
    icon: BarChart3,
    title: "Research analytics",
    text: "Dashboards show reliability, construct scores, correlations, regressions, recruitment, and platform metrics."
  }
];

export const howSteps = [
  { icon: FileText, title: "Enter customer brief", text: "Product type, material, palette, room style, motifs, notes, and references." },
  { icon: Palette, title: "Generate AI designs", text: "The prompt builder creates usable English prompts and mock image outputs for the prototype." },
  { icon: Users, title: "Share with customer", text: "Customers choose, approve, request changes, and rate expectation match from a mobile page." },
  { icon: LineChart, title: "Track outcomes", text: "The system records revisions, time to approval, satisfaction, repeat orders, and baseline change." }
];

export const demoDesigns = [
  {
    title: "Dumbara teal table runner",
    prompt: "Handloom-inspired table runner, deep teal and cream, Dumbara geometric borders, warm Sri Lankan dining room, producible cotton fabric.",
    colors: ["#0f5f5c", "#f4ead5", "#b95b3f", "#d8a83d"],
    score: "4.8"
  },
  {
    title: "Batik lotus cushion cover",
    prompt: "Square cushion cover with batik lotus motif, terracotta, indigo, and soft cream palette, modern tropical living room.",
    colors: ["#b95b3f", "#243f63", "#f4ead5", "#6f8f72"],
    score: "4.6"
  },
  {
    title: "Beeralu lace coaster set",
    prompt: "Ceramic coaster set with beeralu lace border, minimal pattern, warm neutral glaze, handmade home decor product photo.",
    colors: ["#efe4cd", "#315f67", "#c9a25d", "#ffffff"],
    score: "4.4"
  },
  {
    title: "Sigiriya wall hanging",
    prompt: "Fabric wall hanging inspired by Sigiriya fresco colors, botanical border, craft market style, feasible stitched details.",
    colors: ["#c86b3d", "#285c59", "#e0b75b", "#4d3b31"],
    score: "4.7"
  }
];

export const ownerMetrics = [
  { label: "Avg. approval time", value: "2.4 days", change: "-38%" },
  { label: "Avg. revisions", value: "1.6", change: "-42%" },
  { label: "Customer match score", value: "4.6/5", change: "+18%" },
  { label: "Repeat-order rate", value: "31%", change: "+9%" }
];

export const researchMetrics = [
  { label: "Participants", value: "72/100", note: "42 AI users, 30 non-users" },
  { label: "Completion", value: "86%", note: "questionnaire submit rate" },
  { label: "Cronbach alpha", value: "0.84", note: "PERF construct pilot" },
  { label: "Model R2", value: "0.47", note: "PERF ~ AIV + TAC" }
];

export const questionnaireConstructs = [
  "AIV_USE",
  "AIV_PU",
  "AIV_PEOU",
  "TAC_DEV",
  "TAC_NET",
  "TAC_TRN",
  "TAC_COST",
  "TAC_TRUST",
  "TAC_PRIV",
  "TAC_INT",
  "PERF_DPE",
  "PERF_CS",
  "PERF_PI",
  "PERF_CR",
  "PERF_SALES",
  "HAI"
];

export const interviewThemes = [
  { title: "Adoption Conditions", quotes: 24, codes: ["Device access", "Training gap", "Tool cost", "Privacy concern"] },
  { title: "Workflow Integration", quotes: 31, codes: ["Prompting", "Feasibility check", "Customer explanation"] },
  { title: "Business Performance", quotes: 27, codes: ["Fewer revisions", "Faster approval", "Repeat order signal"] }
];

export const exportItems = [
  { icon: Download, title: "SPSS-ready CSV", text: "Wide format with anonymous Participant IDs and item-code columns." },
  { icon: FileText, title: "Codebook", text: "Variable names, translations, construct tags, reverse coding, and value labels." },
  { icon: HeartHandshake, title: "Ethics log", text: "Consent version, withdrawal status, and anonymized audit trail." },
  { icon: Languages, title: "Trilingual content", text: "Question text and customer-facing screens prepared for EN/SI/TA." }
];
