"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: "lead_submit" | "whatsapp_click" | "call_click", extra?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, extra || {});
  if (event === "lead_submit") window.fbq?.("track", "Lead");
  if (event === "whatsapp_click" || event === "call_click") {
    window.fbq?.("trackCustom", event, extra || {});
  }
}
