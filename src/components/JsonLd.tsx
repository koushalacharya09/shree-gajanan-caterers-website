import { site } from "@/data/site";
import { services } from "@/data/services";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FoodEstablishment", "LocalBusiness"],
        additionalType: "https://schema.org/Caterer",
        "@id": `${site.domain}/#business`,
        name: site.name,
        description: site.tagline,
        url: site.domain,
        telephone: site.phones[0].tel,
        email: site.email,
        image: `${site.domain}/brand/logo.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: site.city,
          addressRegion: site.state,
          postalCode: site.pincode,
          addressCountry: site.country,
        },
        areaServed: ["Jaipur", "Rajasthan"],
        servesCuisine: ["Rajasthani", "Indian vegetarian"],
        sameAs: [site.instagram, site.facebook],
      },
      ...services.map((s) => ({
        "@type": "Service",
        name: s.title,
        description: s.blurb,
        provider: { "@id": `${site.domain}/#business` },
        areaServed: "Rajasthan",
        url: `${site.domain}/en/${s.slug}`,
      })),
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
