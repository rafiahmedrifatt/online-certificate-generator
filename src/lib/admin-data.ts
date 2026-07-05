// Mock data for the Super Admin platform panel.

export const platformStats = [
  { label: "Organizations", value: "1,284", delta: "+42 this month" },
  { label: "Total users", value: "9,713", delta: "+318 this month" },
  { label: "Certificates issued", value: "2.4M", delta: "+180K this month" },
  { label: "MRR", value: "$48,320", delta: "+6.4%" },
];

export const organizations = [
  { id: "o_1", name: "Vision Academy", plan: "Pro", members: 4, certificates: 12480, status: "active", joined: "2025-01-12" },
  { id: "o_2", name: "TechBridge Institute", plan: "Enterprise", members: 26, certificates: 148900, status: "active", joined: "2024-09-02" },
  { id: "o_3", name: "Green Earth NGO", plan: "Starter", members: 2, certificates: 340, status: "active", joined: "2026-03-19" },
  { id: "o_4", name: "Nimbus Corp Training", plan: "Pro", members: 8, certificates: 22100, status: "past_due", joined: "2025-06-30" },
  { id: "o_5", name: "Coastal University", plan: "Enterprise", members: 54, certificates: 512300, status: "active", joined: "2024-02-14" },
  { id: "o_6", name: "Startup School BD", plan: "Starter", members: 1, certificates: 96, status: "suspended", joined: "2026-05-01" },
];

export const platformUsers = [
  { id: "u_1", name: "Rafi Ahmed", email: "developer@visiontillion.com", org: "Vision Academy", role: "Owner", lastActive: "2026-07-06" },
  { id: "u_2", name: "Sarah Chen", email: "sarah@techbridge.io", org: "TechBridge Institute", role: "Admin", lastActive: "2026-07-05" },
  { id: "u_3", name: "David Okoro", email: "david@coastal.edu", org: "Coastal University", role: "Owner", lastActive: "2026-07-06" },
  { id: "u_4", name: "Lena Fischer", email: "lena@nimbus.co", org: "Nimbus Corp Training", role: "Editor", lastActive: "2026-06-28" },
];

export const payments = [
  { id: "p_1", org: "TechBridge Institute", amount: "$499.00", plan: "Enterprise", status: "succeeded", date: "2026-07-01" },
  { id: "p_2", org: "Vision Academy", amount: "$39.00", plan: "Pro", status: "succeeded", date: "2026-07-01" },
  { id: "p_3", org: "Nimbus Corp Training", amount: "$39.00", plan: "Pro", status: "failed", date: "2026-07-01" },
  { id: "p_4", org: "Coastal University", amount: "$499.00", plan: "Enterprise", status: "succeeded", date: "2026-06-30" },
  { id: "p_5", org: "Green Earth NGO", amount: "$0.00", plan: "Starter", status: "succeeded", date: "2026-06-19" },
];

export const tickets = [
  { id: "t_1042", subject: "Bulk import failing for large CSV", org: "Coastal University", priority: "high", status: "open", updated: "2026-07-06 09:12" },
  { id: "t_1041", subject: "How do I set up a custom domain?", org: "TechBridge Institute", priority: "medium", status: "open", updated: "2026-07-05 16:40" },
  { id: "t_1039", subject: "Invoice PDF not downloading", org: "Vision Academy", priority: "low", status: "pending", updated: "2026-07-04 11:02" },
  { id: "t_1036", subject: "Request: Arabic language support", org: "Nimbus Corp Training", priority: "low", status: "closed", updated: "2026-07-02 14:20" },
];
