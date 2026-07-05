// Static mock data powering the frontend before the backend exists.
// Shapes here loosely mirror the planned DB schema so pages are easy to wire up later.

export type CertStatus = "issued" | "revoked" | "expired" | "draft";

export type Certificate = {
  id: string;
  publicId: string;
  recipientName: string;
  recipientEmail: string;
  course: string;
  template: string;
  grade?: string;
  status: CertStatus;
  issuedAt: string;
  expiresAt?: string;
};

export type Template = {
  id: string;
  name: string;
  category: string;
  fields: number;
  certificatesIssued: number;
  updatedAt: string;
  accent: string; // tailwind color token for the swatch
};

export type Member = {
  id: string;
  name: string;
  email: string;
  role: "owner" | "admin" | "editor" | "viewer";
  status: "active" | "invited";
  joinedAt: string;
};

export const org = {
  name: "Vision Academy",
  plan: "Pro",
  slug: "vision-academy",
};

export const currentUser = {
  name: "Rafi Ahmed",
  email: "developer@visiontillion.com",
  role: "owner" as const,
};

export const stats = [
  { label: "Certificates issued", value: "12,480", delta: "+8.2%", trend: "up" as const },
  { label: "Verifications", value: "34,910", delta: "+12.5%", trend: "up" as const },
  { label: "Active templates", value: "18", delta: "+2", trend: "up" as const },
  { label: "Revoked", value: "42", delta: "-3", trend: "down" as const },
];

// 12 months of issuance for the bar chart
export const issuanceSeries = [
  420, 510, 480, 640, 720, 810, 760, 920, 1040, 980, 1180, 1300,
];
export const issuanceMonths = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const templates: Template[] = [
  { id: "tpl_1", name: "Course Completion", category: "Education", fields: 7, certificatesIssued: 4820, updatedAt: "2026-06-28", accent: "amber" },
  { id: "tpl_2", name: "Workshop Attendance", category: "Event", fields: 5, certificatesIssued: 2110, updatedAt: "2026-06-20", accent: "emerald" },
  { id: "tpl_3", name: "Employee of the Month", category: "Corporate", fields: 6, certificatesIssued: 340, updatedAt: "2026-06-15", accent: "sky" },
  { id: "tpl_4", name: "Hackathon Winner", category: "Event", fields: 8, certificatesIssued: 96, updatedAt: "2026-05-30", accent: "rose" },
  { id: "tpl_5", name: "Professional Certification", category: "Education", fields: 9, certificatesIssued: 5114, updatedAt: "2026-06-30", accent: "violet" },
  { id: "tpl_6", name: "Volunteer Recognition", category: "Nonprofit", fields: 6, certificatesIssued: 780, updatedAt: "2026-06-10", accent: "teal" },
];

export const certificates: Certificate[] = [
  { id: "c_1", publicId: "CG-9F3A-22K1", recipientName: "Ayesha Rahman", recipientEmail: "ayesha@example.com", course: "Advanced React", template: "Course Completion", grade: "A", status: "issued", issuedAt: "2026-07-01" },
  { id: "c_2", publicId: "CG-7B21-8QW4", recipientName: "Tanvir Hasan", recipientEmail: "tanvir@example.com", course: "UX Fundamentals", template: "Course Completion", grade: "A-", status: "issued", issuedAt: "2026-06-29" },
  { id: "c_3", publicId: "CG-1M55-0ZP9", recipientName: "Nadia Islam", recipientEmail: "nadia@example.com", course: "Data Science Bootcamp", template: "Professional Certification", grade: "B+", status: "issued", issuedAt: "2026-06-28" },
  { id: "c_4", publicId: "CG-4K88-3RT2", recipientName: "Sabbir Ahmed", recipientEmail: "sabbir@example.com", course: "Cloud Workshop", template: "Workshop Attendance", status: "expired", issuedAt: "2025-07-02", expiresAt: "2026-07-02" },
  { id: "c_5", publicId: "CG-6P09-5YU7", recipientName: "Farhana Akter", recipientEmail: "farhana@example.com", course: "Leadership 101", template: "Employee of the Month", status: "revoked", issuedAt: "2026-05-11" },
  { id: "c_6", publicId: "CG-2X44-9LK3", recipientName: "Imran Kabir", recipientEmail: "imran@example.com", course: "Advanced React", template: "Course Completion", grade: "A", status: "issued", issuedAt: "2026-07-03" },
  { id: "c_7", publicId: "CG-8D77-1WE6", recipientName: "Sadia Noor", recipientEmail: "sadia@example.com", course: "AI Hackathon 2026", template: "Hackathon Winner", status: "draft", issuedAt: "2026-07-05" },
];

export const members: Member[] = [
  { id: "m_1", name: "Rafi Ahmed", email: "developer@visiontillion.com", role: "owner", status: "active", joinedAt: "2025-01-12" },
  { id: "m_2", name: "Maria Chowdhury", email: "maria@visiontillion.com", role: "admin", status: "active", joinedAt: "2025-03-04" },
  { id: "m_3", name: "Jamil Uddin", email: "jamil@visiontillion.com", role: "editor", status: "active", joinedAt: "2025-06-18" },
  { id: "m_4", name: "Rumana Sultana", email: "rumana@visiontillion.com", role: "viewer", status: "invited", joinedAt: "2026-07-01" },
];

export const auditLog = [
  { id: "a_1", actor: "Rafi Ahmed", action: "Issued 240 certificates", target: "Bulk job #1042", at: "2026-07-05 14:22", ip: "203.0.113.9" },
  { id: "a_2", actor: "Maria Chowdhury", action: "Revoked certificate", target: "CG-6P09-5YU7", at: "2026-07-05 11:03", ip: "203.0.113.10" },
  { id: "a_3", actor: "Jamil Uddin", action: "Edited template", target: "Course Completion", at: "2026-07-04 09:41", ip: "198.51.100.4" },
  { id: "a_4", actor: "Rafi Ahmed", action: "Invited member", target: "rumana@visiontillion.com", at: "2026-07-01 16:12", ip: "203.0.113.9" },
  { id: "a_5", actor: "System", action: "Certificate expired", target: "CG-4K88-3RT2", at: "2026-07-02 00:00", ip: "—" },
];

export const apiKeys = [
  { id: "k_1", name: "Production", prefix: "cg_live_9f3a…", created: "2025-02-01", lastUsed: "2026-07-05", scopes: ["certificates:read", "certificates:write"] },
  { id: "k_2", name: "CI / staging", prefix: "cg_test_2b81…", created: "2026-01-15", lastUsed: "2026-06-30", scopes: ["certificates:read"] },
];

export const plans = [
  {
    name: "Starter",
    price: 0,
    tagline: "For individuals trying things out.",
    features: ["100 certificates / month", "3 templates", "Public verification", "PNG export"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 39,
    tagline: "For growing teams and academies.",
    features: ["10,000 certificates / month", "Unlimited templates", "Bulk CSV / Excel", "PDF + PNG export", "Email delivery", "5 team members"],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: null,
    tagline: "White-label & unlimited scale.",
    features: ["Unlimited certificates", "White-label + custom domain", "API access", "SSO & audit logs", "Priority support", "Unlimited members"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export const statusVariant: Record<CertStatus, "success" | "danger" | "warning" | "neutral"> = {
  issued: "success",
  revoked: "danger",
  expired: "warning",
  draft: "neutral",
};

export function findCertificate(publicId: string) {
  return certificates.find(
    (c) => c.publicId.toLowerCase() === publicId.toLowerCase() || c.id === publicId,
  );
}
