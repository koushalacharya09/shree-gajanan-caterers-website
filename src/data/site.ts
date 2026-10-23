export const site = {
  name: "Shree Gajanan Caterers",
  tagline: "Carrying a Legacy of Trust & Taste over the years",
  taglineHi: "वर्षों से विश्वास और स्वाद की विरासत",
  owner: "Koushal Acharya",
  phones: [
    { display: "+91 82096 79146", tel: "+918209679146", digits: "8209679146" },
    { display: "+91 95494 23454", tel: "+919549423454", digits: "9549423454" },
  ],
  whatsapp: "918209679146",
  email: "koushalacharya3009@gmail.com",
  address: "999, Subhash Chowk, Jaipur",
  city: "Jaipur",
  state: "Rajasthan",
  pincode: "302002",
  country: "IN",
  domain: "https://www.shreegajanancaterers.online",
  serving:
    "Jaipur and all over Rajasthan — Pushkar, Jodhpur, Jaisalmer, Ajmer, Kota, Sikar and more",
  specialization: "Outdoor and Indoor catering",
  instagram: "https://www.instagram.com/shree.gajanancaterers/",
  facebook: "https://www.facebook.com/shri.gajanancaterersjaipur/",
  mapsEmbed:
    "https://www.google.com/maps?q=999+Subhash+Chowk+Jaipur&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=999+Subhash+Chowk+Jaipur",
  googleReviews: "https://www.google.com/maps/search/?api=1&query=Shree+Gajanan+Caterers+Subhash+Chowk+Jaipur",
  maker: {
    name: "Koushal Acharya",
    linkedin: "https://www.linkedin.com/in/koushal-acharya09",
    github: "https://github.com/koushalacharya09",
    email: "mailto:koushalacharya3009@gmail.com",
  },
} as const;

export type Locale = "en" | "hi";
export const locales: Locale[] = ["en", "hi"];
export const defaultLocale: Locale = "en";
