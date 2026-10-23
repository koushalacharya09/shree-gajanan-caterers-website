import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().max(80).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/\D/g, "").replace(/^91/, ""))
    .refine((v) => /^[6-9]\d{9}$/.test(v), "Enter a valid 10-digit Indian mobile"),
  eventType: z.string().trim().max(60).optional().or(z.literal("")),
  date: z.string().trim().max(20).optional().or(z.literal("")),
  guests: z.string().trim().max(12).optional().or(z.literal("")),
  city: z.string().trim().max(60).optional().or(z.literal("")),
  website: z.string().max(120).optional().or(z.literal("")),
  utm: z
    .object({
      source: z.string().max(80).optional(),
      medium: z.string().max(80).optional(),
      campaign: z.string().max(80).optional(),
    })
    .optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
