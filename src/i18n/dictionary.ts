import type { Locale } from "@/data/site";

export const dictionary = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      areas: "Areas",
      enquire: "Get Free Quote",
    },
    chips: [
      "Veg Royal Catering",
      "Jaipur and All Rajasthan",
      "Outdoor & Indoor",
    ],
    heroPromise: "Pure vegetarian hospitality for weddings and gatherings that must feel composed.",
    ctaQuote: "Get Free Quote",
    ctaWhatsapp: "WhatsApp",
    ctaCall: "Call",
    legacyEyebrow: "॥ श्री ॥",
    legacyTitle: "A legacy of trust, written in the kitchen.",
    legacyBody:
      "Shree Gajanan Caterers is a family catering house from Subhash Chowk, Jaipur. We cook pure vegetarian food for weddings, Sawamani prashadi, corporate openings and family celebrations — indoors and on open lawns — across Jaipur and Rajasthan.",
    howTitle: "How a booking actually works",
    steps: [
      { n: "01", t: "Enquire", d: "Share phone, date, guests and city. We call back within 2 hours." },
      { n: "02", t: "Menu tasting and quote", d: "A menu draft fitted to venue and budget — tasting when the date is serious." },
      { n: "03", t: "Planning", d: "Kitchen access, counters, staffing and service clock written down." },
      { n: "04", t: "Flawless service", d: "The floor is run to that plan. No theatre, no surprise shortages." },
    ],
    faqTitle: "Questions hosts ask before they call",
    leadTitle: "Tell us the date. We call back within 2 hours.",
    leadHint: "Phone number is enough. Name and city help us prepare the call.",
    success: "Enquiry received. We will call you shortly.",
    calculatorTitle: "Plan my event",
    calculatorNote: "Indicative range only — not a published rate card.",
    testimonialsTitle: "What hosts say",
    testimonialsNote: "// TODO: replace with real Google reviews",
    footerCredit: "Designed & built by Koushal Acharya",
    connect: "Let's connect with Koushal",
    stickyQuote: "Get Quote",
  },
  hi: {
    nav: {
      about: "हमारे बारे में",
      services: "सेवाएँ",
      gallery: "गैलरी",
      areas: "इलाके",
      enquire: "मुफ्त कोटेशन",
    },
    chips: ["शाकाहारी राजसी केटरिंग", "जयपुर और पूरा राजस्थान", "आउटडोर और इनडोर"],
    heroPromise: "शादी और समारोह के लिए शुद्ध शाकाहारी आतिथ्य — शांत, तैयार, ईमानदार।",
    ctaQuote: "मुफ्त कोटेशन",
    ctaWhatsapp: "व्हाट्सऐप",
    ctaCall: "कॉल",
    legacyEyebrow: "॥ श्री ॥",
    legacyTitle: "विश्वास की विरासत, रसोई में लिखी।",
    legacyBody:
      "श्री गजानन केटरर्स सुभाष चौक, जयपुर का पारिवारिक केटरिंग घर है। शादी, सवामणी प्रसादी, कॉर्पोरेट उद्घाटन और पारिवारिक उत्सव — हॉल और खुले लॉन — जयपुर और राजस्थान में शुद्ध शाकाहारी पकान।",
    howTitle: "बुकिंग वास्तव में कैसे होती है",
    steps: [
      { n: "01", t: "पूछताछ", d: "फोन, तारीख, मेहमान, शहर। दो घंटे में कॉल बैक।" },
      { n: "02", t: "मेनू चखकर कोट", d: "वेन्यू और बजट के हिसाब से मेनू। तारीख गंभीर हो तो टेस्टिंग।" },
      { n: "03", t: "योजना", d: "किचन, काउंटर, स्टाफ और समय — लिखकर।" },
      { n: "04", t: "सेवा", d: "उसी योजना पर फ्लोर चलता है। नाटक नहीं, कमी नहीं।" },
    ],
    faqTitle: "कॉल से पहले जो सवाल आते हैं",
    leadTitle: "तारीख बताएँ। दो घंटे में कॉल बैक।",
    leadHint: "फोन काफी है। नाम और शहर से कॉल तैयार रहती है।",
    success: "पूछताछ मिल गई। जल्द कॉल करेंगे।",
    calculatorTitle: "इवेंट प्लान करें",
    calculatorNote: "केवल संकेत — प्रकाशित रेट कार्ड नहीं।",
    testimonialsTitle: "मेज़बान क्या कहते हैं",
    testimonialsNote: "// TODO: replace with real Google reviews",
    footerCredit: "Designed & built by Koushal Acharya",
    connect: "Let's connect with Koushal",
    stickyQuote: "कोटेशन",
  },
} as const;

export function t(locale: Locale) {
  return dictionary[locale];
}
