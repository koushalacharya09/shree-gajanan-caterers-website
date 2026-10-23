import { site } from "@/data/site";

export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function enquiryWaMessage(input: {
  city?: string;
  event?: string;
  guests?: string;
  date?: string;
  name?: string;
}) {
  const city = input.city?.trim() || "Jaipur";
  const event = input.event?.trim() || "a celebration";
  const bits = [
    `Namaste, I am looking for catering in ${city} for ${event}.`,
    input.guests ? `Guests: ${input.guests}.` : "",
    input.date ? `Date: ${input.date}.` : "",
    input.name ? `Name: ${input.name}.` : "",
  ].filter(Boolean);
  return bits.join(" ");
}
