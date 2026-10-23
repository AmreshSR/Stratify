// All page copy and data in one place. Source of truth: content/copy.en.md

export const EMAIL = "info@stratify.sr"; // SAMPLE: replace with the real address before launch
export const PHONE_DISPLAY = "+597 855 5377";
export const PHONE_TEL = "+5978555377";
export const LINKEDIN = "https://www.linkedin.com/in/sheetal-ganput-b92496161/";

export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Conversation with Stratify",
)}&body=${encodeURIComponent("Hello Stratify,\n\nOur organization would like to talk about:\n\n")}`;

const picsum = (id: number, w: number, h: number) =>
  `https://picsum.photos/id/${id}/${w}/${h}?grayscale`;

export const PHOTOS = {
  hero: { src: picsum(1081, 900, 1300), w: 900, h: 1300, alt: "Stepped white building corner rising into a pale sky" },
  bridge: { src: picsum(620, 2000, 1000), w: 2000, h: 1000, alt: "White arched bridge spanning still grey water" },
  opening: { src: picsum(954, 900, 900), w: 900, h: 900, alt: "Narrow opening in a white wall revealing a staircase" },
  facade: { src: picsum(887, 960, 1200), w: 960, h: 1200, alt: "White apartment facade with repeating balconies and windows" },
  lattice: { src: picsum(618, 2000, 1100), w: 2000, h: 1100, alt: "Curving glass and steel lattice roof seen from below" },
};

export const CREDITS =
  "Photographs via Unsplash / Picsum: Julien Moreau, Matthew Wiebe, Todd Quackenbush, Roman Kraft, Mika Ruusunen.";

export const STEPS = [
  { line: "First, we set the strategy.", text: "A clear direction, translated into goals and decisions that hold." },
  { line: "Then we build governance.", text: "Accountability, risk and compliance frameworks that support every decision." },
  { line: "We make processes work.", text: "Management systems that work in daily practice, not just on paper." },
  { line: "Your people carry it on.", text: "Leaders and teams who take ownership and move forward with confidence." },
];

export type ServiceId =
  | "strategy" | "leadership" | "training"
  | "grc" | "iso" | "continuity"
  | "security" | "privacy" | "ai";

export const SERVICE_GROUPS: { kind: string; items: { id: ServiceId; name: string; text: string; standard?: string }[] }[] = [
  {
    kind: "Direction",
    items: [
      { id: "strategy", name: "Strategy & Organizational Development", text: "Turning vision into a clear strategy, and guiding the organization through transformation." },
      { id: "leadership", name: "Leadership Development & Executive Coaching", text: "Equipping executives and teams to lead with clarity of purpose." },
      { id: "training", name: "Training, Workshops & Capacity Building", text: "Awareness programs and training that build lasting knowledge in your organization." },
    ],
  },
  {
    kind: "Control",
    items: [
      { id: "grc", name: "Governance, Risk & Compliance", text: "Frameworks, risk assessments and compliance that strengthen accountability.", standard: "ISO 31000" },
      { id: "iso", name: "ISO Management Systems & Certification Readiness", text: "Design, implementation, internal audits and preparation for certification.", standard: "ISO 9001" },
      { id: "continuity", name: "Business Continuity & Operational Resilience", text: "Withstanding disruption and recovering quickly.", standard: "ISO 22301" },
    ],
  },
  {
    kind: "Protection",
    items: [
      { id: "security", name: "Information Security & Cybersecurity Governance", text: "Protecting information and systems through well governed security management.", standard: "ISO/IEC 27001" },
      { id: "privacy", name: "Privacy & Data Protection", text: "Managing personal data responsibly.", standard: "ISO/IEC 27701" },
      { id: "ai", name: "AI Governance & Responsible AI", text: "Clear frameworks for the safe, ethical and accountable use of AI.", standard: "ISO/IEC 42001" },
    ],
  },
];

export const SITUATIONS: { label: string; ids: ServiceId[]; answer: string }[] = [
  { label: "We handle personal data", ids: ["privacy", "security"], answer: "Start with privacy and information security, aligned with ISO/IEC 27701 and 27001." },
  { label: "We are adopting AI", ids: ["ai", "grc"], answer: "Start with AI governance under ISO/IEC 42001, backed by a clear risk framework." },
  { label: "We need certification", ids: ["iso", "training"], answer: "Start with certification readiness: gap analysis, internal audits and team training." },
  { label: "A disruption would stop us", ids: ["continuity", "security"], answer: "Start with business continuity under ISO 22301 and the security that protects it." },
  { label: "We are going through change", ids: ["strategy", "leadership"], answer: "Start with strategy and leadership, so the change has a direction and owners." },
];

export const STANDARDS = [
  { name: "ISO/IEC 27001", topic: "Information security" },
  { name: "ISO/IEC 27701", topic: "Privacy information management" },
  { name: "ISO/IEC 42001", topic: "Artificial intelligence management" },
  { name: "ISO 22301", topic: "Business continuity" },
  { name: "ISO 31000", topic: "Risk management" },
  { name: "ISO 9001", topic: "Quality management" },
];
