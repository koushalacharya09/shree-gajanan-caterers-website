export type Landing = {
  slug: string;
  kind: "service" | "city" | "area";
  h1: string;
  h1Hi: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  introHi: string;
  body: string[];
  bodyHi: string[];
  faqs: { q: string; a: string; qHi: string; aHi: string }[];
};

export const landings: Landing[] = [
  {
    slug: "wedding-caterers-jaipur",
    kind: "service",
    h1: "Wedding caterers in Jaipur for veg royal receptions",
    h1Hi: "जयपुर में शादी केटरिंग — शाकाहारी राजसी रिसेप्शन",
    title: "Wedding Caterers Jaipur | Shree Gajanan Caterers",
    description:
      "Pure vegetarian wedding catering in Jaipur — indoor halls and outdoor lawns. Dal Baati, live counters, reception menus. Call Shree Gajanan Caterers.",
    keywords: ["wedding caterers Jaipur", "शादी केटरिंग जयपुर", "halwai Jaipur"],
    intro:
      "A Jaipur wedding is judged at the table. Shree Gajanan Caterers plans pure vegetarian menus, staffing and service timing for receptions, pheras and multi-day functions across the city.",
    introHi:
      "जयपुर की शादी मेज पर याद रहती है। श्री गजानन केटरर्स रिसेप्शन, फेरे और कई दिनों के कार्यक्रमों के लिए शुद्ध शाकाहारी मेनू, स्टाफ और समय की योजना करते हैं।",
    body: [
      "We cook for indoor banquet halls and open lawns. The kitchen plan changes with the venue: power, water, service corridor and guest flow are discussed before a menu is locked.",
      "Halwai-style mithai, Rajasthani thalis and live counters sit on the same floor plan so guests are not queued at one stall. Jain-friendly lines are arranged on request.",
      "Share date, guest count and venue area. We call back within two hours with a clear next step — not a generic package PDF.",
    ],
    bodyHi: [
      "हम इनडोर बैंक्वेट हॉल और खुले लॉन दोनों के लिए पकाते हैं। मेनू से पहले पावर, पानी और मेहमानों का प्रवाह तय होता है।",
      "हलवाई मिठाई, राजस्थानी थाली और लाइव काउंटर एक ही फ्लोर प्लान पर बैठते हैं। जैन लाइन अनुरोध पर।",
      "तारीख, मेहमान संख्या और इलाका भेजें। दो घंटे में कॉल बैक।",
    ],
    faqs: [
      {
        q: "Do you cater both indoor and outdoor Jaipur weddings?",
        a: "Yes. Outdoor and indoor catering is our specialisation. Lawn, farmhouse, hotel and home setups are planned around kitchen access.",
        qHi: "क्या आप इनडोर और आउटडोर दोनों शादियों का केटरिंग करते हैं?",
        aHi: "हाँ। आउटडोर और इनडोर केटरिंग हमारी विशेषज्ञता है।",
      },
      {
        q: "Is the food pure vegetarian?",
        a: "Yes. Menus are pure vegetarian. Jain-friendly options can be planned when you tell us at enquiry.",
        qHi: "क्या खाना शुद्ध शाकाहारी है?",
        aHi: "हाँ। मेनू शुद्ध शाकाहारी हैं। जैन विकल्प पूछने पर।",
      },
    ],
  },
  {
    slug: "destination-wedding-catering-rajasthan",
    kind: "service",
    h1: "Destination wedding catering across Rajasthan",
    h1Hi: "राजस्थान में डेस्टिनेशन वेडिंग केटरिंग",
    title: "Destination Wedding Catering Rajasthan | Shree Gajanan Caterers",
    description:
      "Veg destination wedding catering from Jaipur across Rajasthan — Pushkar, Jodhpur, Jaisalmer, Ajmer. Kitchen logistics and live stations.",
    keywords: ["destination wedding catering Rajasthan", "Pushkar wedding catering"],
    intro:
      "When the wedding leaves Jaipur, the kitchen has to travel with it. We plan staffing, raw material and service for destination venues in Rajasthan.",
    introHi:
      "जब शादी जयपुर से बाहर जाती है, किचन भी साथ चलता है। राजस्थान के डेस्टिनेशन वेन्यू के लिए स्टाफ और सर्विस की योजना।",
    body: [
      "Pushkar, Jodhpur, Jaisalmer, Ajmer, Kota and Sikar are regular conversation — each city has different vendor access and weather. We confirm logistics before quoting a plate range.",
      "Outdoor palace lawns need a different counter layout than a city hotel. We visit or request a venue kitchen brief so service does not stall at peak hour.",
    ],
    bodyHi: [
      "पुष्कर, जोधपुर, जैसलमेर, अजमेर, कोटा और सीकर — हर शहर की सप्लाई और मौसम अलग है। रेट से पहले लॉजिस्टिक्स तय करते हैं।",
      "आउटडोर लॉन और सिटी होटल का काउंटर लेआउट अलग होता है।",
    ],
    faqs: [
      {
        q: "Which Rajasthan cities do you cover?",
        a: "Jaipur and all over Rajasthan including Pushkar, Jodhpur, Jaisalmer, Ajmer, Kota, Sikar and more. Outstation work is planned case by case.",
        qHi: "राजस्थान के कौन से शहर?",
        aHi: "जयपुर और राजस्थान भर — पुष्कर, जोधपुर, जैसलमेर, अजमेर, कोटा, सीकर और अन्य।",
      },
    ],
  },
  {
    slug: "sawamani-prashadi-catering-jaipur",
    kind: "service",
    h1: "Sawamani Prashadi catering in Jaipur — Dal Baati Churma",
    h1Hi: "जयपुर में सवामणी प्रसादी केटरिंग — दाल बाटी चूरमा",
    title: "Sawamani Prashadi Catering Jaipur | Dal Baati Churma",
    description:
      "Sawamani and Prashadi catering in Jaipur with traditional Dal Baati Churma. Pure veg, large gatherings. Shree Gajanan Caterers.",
    keywords: ["सवामणी प्रसादी", "दाल बाटी चूरमा केटरिंग जयपुर", "Sawamani catering Jaipur"],
    intro:
      "Sawamani is not a buffet with a Rajasthani name. It is a prasadi line — Dal Baati Churma cooked for volume, served with the calm of a religious gathering.",
    introHi:
      "सवामणी केवल नाम की राजस्थानी बुफे नहीं। यह प्रसादी लाइन है — दाल बाटी चूरमा बड़ी संख्या के लिए, धार्मिक शांति के साथ।",
    body: [
      "Baati timing, churma texture and dal heat have to hold for the last guest, not only the first. We staff the line accordingly.",
      "Tell us the ritual schedule. Service windows for prasad are different from a wedding reception.",
    ],
    bodyHi: [
      "बाटी, चूरमा और दाल आखिरी मेहमान तक वही रहनी चाहिए।",
      "विधि का समय बताएँ। प्रसाद की सर्विस रिसेप्शन से अलग होती है।",
    ],
    faqs: [
      {
        q: "Can you do Dal Baati Churma for large prasad gatherings?",
        a: "Yes. Sawamani Prashadi with Dal Baati Churma is a core service. Share expected headcount and venue.",
        qHi: "क्या बड़े प्रसाद के लिए दाल बाटी चूरमा होगा?",
        aHi: "हाँ। सवामणी प्रसादी हमारी मुख्य सेवा है। संख्या और जगह बताएँ।",
      },
    ],
  },
  {
    slug: "corporate-event-catering-jaipur",
    kind: "service",
    h1: "Corporate and grand opening catering in Jaipur",
    h1Hi: "जयपुर में कॉर्पोरेट और ग्रैंड ओपनिंग केटरिंग",
    title: "Corporate Event Catering Jaipur | Grand Openings",
    description:
      "Corporate catering and grand opening hospitality in Jaipur — high tea, live counters, timed service. Pure vegetarian.",
    keywords: ["corporate catering Jaipur", "grand opening catering Jaipur"],
    intro:
      "A launch or conference cannot wait on the kitchen. We run vegetarian hospitality to a clock — arrival tea, main service, closing mithai.",
    introHi:
      "लॉन्च या कॉन्फ्रेंस किचन का इंतज़ार नहीं कर सकता। शाकाहारी आतिथ्य समय पर — चाय, मुख्य सेवा, मिठाई।",
    body: [
      "Grand openings in Jaipur often mix outdoor branding with indoor seating. We plan counters so speeches and food do not collide.",
      "Bulk festive hampers for clients are a separate service — corporate and bulk orders only.",
    ],
    bodyHi: [
      "ग्रैंड ओपनिंग में आउटडोर ब्रांडिंग और इनडोर सीटिंग साथ होते हैं। भाषण और खाना टकराएँ नहीं, यह प्लान है।",
      "क्लाइंट हैम्पर अलग सेवा है — केवल कॉर्पोरेट और बल्क।",
    ],
    faqs: [
      {
        q: "Do you supply corporate gift hampers?",
        a: "Festive sweets, namkeen and gift hampers are available for corporate and bulk orders only. Not a retail counter.",
        qHi: "क्या कॉर्पोरेट हैम्पर मिलते हैं?",
        aHi: "त्योहारी मिठाई, नमकीन और हैम्पर केवल कॉर्पोरेट और बल्क ऑर्डर पर।",
      },
    ],
  },
  {
    slug: "birthday-party-catering-jaipur",
    kind: "service",
    h1: "Birthday, anniversary and kitty party catering in Jaipur",
    h1Hi: "जयपुर में जन्मदिन, सालगिरह और किटी पार्टी केटरिंग",
    title: "Birthday & Kitty Party Catering Jaipur",
    description:
      "Home and club catering for birthdays, anniversaries and kitty parties in Jaipur. Live counters, high tea, pure veg.",
    keywords: ["birthday catering Jaipur", "kitty party catering Jaipur"],
    intro:
      "Smaller guest lists still need composed service. We scale live counters and high tea for homes, farmhouses and clubs in Jaipur.",
    introHi:
      "छोटी पार्टी में भी सेवा शांत होनी चाहिए। घर, फार्महाउस और क्लब के लिए लाइव काउंटर और हाई टी।",
    body: [
      "Kitty brunches and anniversary dinners use different pacing. Tell us whether guests sit or move — the counter plan follows that.",
    ],
    bodyHi: [
      "किटी ब्रंच और सालगिरह डिनर की रफ्तार अलग होती है। मेहमान बैठेंगे या घूमेंगे, बताएँ।",
    ],
    faqs: [
      {
        q: "What is a practical minimum guest count?",
        a: "It depends on menu and venue. Share an approximate number on the enquiry form and we will tell you if the format fits.",
        qHi: "न्यूनतम मेहमान?",
        aHi: "मेनू और जगह पर निर्भर। अनुमान भेजें, हम बताएँगे फॉर्मेट बैठेगा या नहीं।",
      },
    ],
  },
  {
    slug: "live-food-stations-jaipur",
    kind: "service",
    h1: "Live food stations and themed counters in Jaipur",
    h1Hi: "जयपुर में लाइव फूड स्टेशन और थीम काउंटर",
    title: "Live Food Stations Jaipur | Themed Counters",
    description:
      "Live chaat, grill, pan, sweets and themed catering counters in Jaipur for weddings and events. Shree Gajanan Caterers.",
    keywords: ["live counter catering Jaipur", "themed food stalls Jaipur"],
    intro:
      "Live stations keep a wedding floor moving. We build themed counters — chaat, pan, grill, sweets — around your guest count, not a catalogue of 20 unused stalls.",
    introHi:
      "लाइव स्टेशन शादी की भीड़ को चलाते हैं। चाट, पान, ग्रिल, मिठाई — मेहमान संख्या के हिसाब से, कैटलॉग के २० खाली स्टॉल नहीं।",
    body: [
      "A night lawn needs different lighting and power than a noon brunch. We check both before we promise a live kitchen.",
    ],
    bodyHi: [
      "रात के लॉन और दोपहर के ब्रंच की बिजली-रोशनी अलग है। वादा करने से पहले दोनों देखते हैं।",
    ],
    faqs: [
      {
        q: "Can live counters run outdoors?",
        a: "Yes. Outdoor catering is a specialisation. We plan weather cover, fuel and queue space with the venue.",
        qHi: "क्या लाइव काउंटर आउटडोर चलेंगे?",
        aHi: "हाँ। आउटडोर केटरिंग विशेषज्ञता है। मौसम, ईंधन और लाइन की जगह वेन्यू के साथ तय करते हैं।",
      },
    ],
  },
  {
    slug: "high-tea-brunch-catering-jaipur",
    kind: "service",
    h1: "High tea and brunch catering in Jaipur",
    h1Hi: "जयपुर में हाई टी और ब्रंच केटरिंग",
    title: "High Tea & Brunch Catering Jaipur",
    description:
      "Daytime high tea and brunch catering in Jaipur for corporate mornings, kitty parties and family gatherings. Pure vegetarian.",
    keywords: ["high tea catering Jaipur", "brunch catering Jaipur"],
    intro:
      "Day events need a lighter line and faster replenishment. High tea and brunch menus are built for that pace.",
    introHi:
      "दिन के कार्यक्रम में हल्की लाइन और तेज़ रिफिल चाहिए। हाई टी और ब्रंच उसी रफ्तार के लिए हैं।",
    body: [
      "Corporate mornings and kitty brunches share snacks but not the service clock. We write the run-of-show with you.",
    ],
    bodyHi: [
      "कॉर्पोरेट सुबह और किटी ब्रंच के स्नैक्स मिल सकते हैं, समय नहीं। रन-ऑफ-शो साथ लिखते हैं।",
    ],
    faqs: [
      {
        q: "Is high tea available for offices in Jaipur?",
        a: "Yes, as part of corporate catering. Share headcount, time window and whether service is at a desk or a hall.",
        qHi: "क्या ऑफिस में हाई टी होगी?",
        aHi: "हाँ, कॉर्पोरेट केटरिंग में। संख्या, समय और जगह बताएँ।",
      },
    ],
  },
  {
    slug: "festive-sweets-hampers-jaipur",
    kind: "service",
    h1: "Festive sweets, namkeen and gift hampers — bulk orders",
    h1Hi: "त्योहारी मिठाई, नमकीन और गिफ्ट हैम्पर — बल्क ऑर्डर",
    title: "Corporate Sweets & Gift Hampers Jaipur | Bulk Only",
    description:
      "Corporate and bulk festive sweets, namkeen and gift hampers from Shree Gajanan Caterers, Jaipur. Not a retail shop.",
    keywords: ["corporate hampers Jaipur", "bulk mithai Jaipur"],
    intro:
      "This line is for companies and bulk festival orders — not walk-in retail. Mithai, namkeen and packed hampers for clients and staff.",
    introHi:
      "यह लाइन कंपनियों और बल्क त्योहार ऑर्डर के लिए है — रिटेल दुकान नहीं। क्लाइंट और स्टाफ के लिए मिठाई, नमकीन, हैम्पर।",
    body: [
      "Lead time matters in Diwali and wedding season. Send quantity and delivery area with your phone number.",
    ],
    bodyHi: [
      "दिवाली और शादी सीजन में समय चाहिए। मात्रा, इलाका और फोन भेजें।",
    ],
    faqs: [
      {
        q: "Can an individual buy one hamper?",
        a: "This service is corporate and bulk orders only. For a family function, use the wedding or celebration catering enquiry instead.",
        qHi: "क्या एक हैम्पर खरीद सकते हैं?",
        aHi: "यह सेवा केवल कॉर्पोरेट और बल्क के लिए है। पारिवारिक कार्यक्रम के लिए केटरिंग फॉर्म भरें।",
      },
    ],
  },
  {
    slug: "event-planning-coordination-jaipur",
    kind: "service",
    h1: "Event planning and coordination for Jaipur catering",
    h1Hi: "जयपुर केटरिंग के लिए इवेंट प्लानिंग और समन्वय",
    title: "Event Planning & Coordination Jaipur | Catering",
    description:
      "Menu, staffing and venue kitchen coordination for weddings and events in Jaipur. Shree Gajanan Caterers.",
    keywords: ["event planning Jaipur catering", "wedding coordination Jaipur food"],
    intro:
      "Food fails when the plan is split. We coordinate menu, staffing, service timeline and the venue kitchen as one document.",
    introHi:
      "योजना टूटने पर खाना गिरता है। मेनू, स्टाफ, समय और वेन्यू किचन एक दस्तावेज़ में।",
    body: [
      "We are caterers first. Planning here means the food service is on time — not a full décor-and-entertainment agency claim.",
    ],
    bodyHi: [
      "हम पहले केटरर हैं। यहाँ प्लानिंग का मतलब है खाने की सेवा समय पर — पूरा डेकोर एजेंसी दावा नहीं।",
    ],
    faqs: [
      {
        q: "Do you handle décor and entertainment too?",
        a: "Our core work is catering. Event planning here covers food, staffing and kitchen coordination. Other vendors stay yours unless we agree in writing.",
        qHi: "क्या डेकोर भी करते हैं?",
        aHi: "मुख्य काम केटरिंग है। प्लानिंग भोजन, स्टाफ और किचन तक। अन्य वेंडर आपकी तरफ़, जब तक लिखित सहमति न हो।",
      },
    ],
  },
  {
    slug: "pushkar-wedding-catering",
    kind: "city",
    h1: "Wedding catering in Pushkar",
    h1Hi: "पुष्कर में शादी केटरिंग",
    title: "Pushkar Wedding Catering | Shree Gajanan Caterers",
    description:
      "Destination wedding catering in Pushkar from a Jaipur veg catering house. Outdoor setups, live counters, Dal Baati.",
    keywords: ["Pushkar wedding catering", "पुष्कर शादी केटरिंग"],
    intro:
      "Pushkar weddings are often outdoor and tightly timed around the town. We travel from Jaipur with a kitchen plan that respects venue limits.",
    introHi:
      "पुष्कर की शादियाँ अक्सर आउटडोर और शहर के समय से बंधी होती हैं। जयपुर से किचन प्लान के साथ जाते हैं।",
    body: [
      "Heat, wind and guest walking distance change the counter map. We ask for a venue sketch before locking live stations.",
      "Sawamani-style Rajasthani food is a frequent request alongside a reception menu.",
    ],
    bodyHi: [
      "गर्मी, हवा और पैदल दूरी काउंटर बदल देते हैं। लाइव स्टेशन से पहले स्केच माँगते हैं।",
      "रिसेप्शन के साथ सवामणी-शैली राजस्थानी खाना अक्सर पूछा जाता है।",
    ],
    faqs: [
      {
        q: "Do you cook in Pushkar or transport from Jaipur?",
        a: "It depends on the venue kitchen and headcount. We confirm the model on the recce or briefing call — never assume a single method.",
        qHi: "पुष्कर में पकाएँगे या जयपुर से?",
        aHi: "वेन्यू किचन और संख्या पर निर्भर। कॉल पर मॉडल तय होता है।",
      },
    ],
  },
  {
    slug: "jodhpur-wedding-catering",
    kind: "city",
    h1: "Wedding catering in Jodhpur",
    h1Hi: "जोधपुर में शादी केटरिंग",
    title: "Jodhpur Wedding Catering | Veg Destination Menus",
    description:
      "Vegetarian destination wedding catering in Jodhpur. Indoor and outdoor service from Shree Gajanan Caterers, Jaipur.",
    keywords: ["Jodhpur wedding catering", "जोधपुर शादी केटरिंग"],
    intro:
      "Jodhpur venues swing from heritage courtyards to hotels. Vegetarian menus and live counters are planned around each property’s kitchen rules.",
    introHi:
      "जोधपुर में हेरिटेज आंगन से होटल तक वेन्यू हैं। हर प्रॉपर्टी के किचन नियम के अनुसार शाकाहारी मेनू।",
    body: [
      "Blue City logistics are not Jaipur logistics. We build extra time for staffing and produce so service does not start late.",
    ],
    bodyHi: [
      "ब्लू सिटी की सप्लाई जयपुर जैसी नहीं। स्टाफ और सामान के लिए अतिरिक्त समय रखते हैं।",
    ],
    faqs: [
      {
        q: "Can you handle a Jodhpur palace lawn?",
        a: "Outdoor catering is a specialisation. Share the venue name and guest estimate; we will tell you what the kitchen plan needs.",
        qHi: "क्या जोधपुर पैलेस लॉन होगा?",
        aHi: "आउटडोर विशेषज्ञता है। वेन्यू और संख्या बताएँ, किचन प्लान बताएँगे।",
      },
    ],
  },
  {
    slug: "jaisalmer-wedding-catering",
    kind: "city",
    h1: "Wedding catering in Jaisalmer",
    h1Hi: "जैसलमेर में शादी केटरिंग",
    title: "Jaisalmer Wedding Catering | Desert Destination Veg",
    description:
      "Destination wedding catering in Jaisalmer — outdoor camps and indoor venues. Pure veg. Shree Gajanan Caterers.",
    keywords: ["Jaisalmer wedding catering", "जैसलमेर शादी केटरिंग"],
    intro:
      "Jaisalmer asks more of an outdoor kitchen: distance, climate and camp rules. We only confirm a format after those constraints are clear.",
    introHi:
      "जैसलमेर के आउटडोर किचन पर दूरी, मौसम और कैंप नियम भारी पड़ते हैं। फॉर्मेट तब कन्फर्म जब ये साफ़ हों।",
    body: [
      "Desert evening service needs lighting and wind cover on counters. That is part of the catering plan, not an afterthought.",
    ],
    bodyHi: [
      "रेगिस्तानी शाम में काउंटर पर रोशनी और हवा से बचाव चाहिए। यह केटरिंग प्लान का हिस्सा है।",
    ],
    faqs: [
      {
        q: "Do you cater tented desert dinners?",
        a: "Possible when the venue allows a proper kitchen footprint. Share location type and guest count for a serious answer.",
        qHi: "क्या डेजर्ट टेंट डिनर होगा?",
        aHi: "जब वेन्यू किचन की जगह दे। लोकेशन और संख्या भेजें।",
      },
    ],
  },
  {
    slug: "ajmer-catering-services",
    kind: "city",
    h1: "Catering services in Ajmer",
    h1Hi: "अजमेर में केटरिंग सेवाएँ",
    title: "Ajmer Catering Services | Wedding & Prashadi",
    description:
      "Wedding, Sawamani and event catering in Ajmer from Shree Gajanan Caterers, Jaipur. Pure vegetarian, indoor and outdoor.",
    keywords: ["Ajmer catering", "अजमेर केटरिंग", "Ajmer wedding caterers"],
    intro:
      "Ajmer work is often a mix of family functions, religious gatherings and city weddings. We plan veg menus for both halls and outdoor plots.",
    introHi:
      "अजमेर में पारिवारिक कार्यक्रम, धार्मिक सभा और शादियाँ मिलती हैं। हॉल और प्लॉट दोनों के लिए शाकाहारी मेनू।",
    body: [
      "If the date sits next to a large city festival, staffing must be booked early. Mention the date first on the form.",
    ],
    bodyHi: [
      "बड़े त्योहार के पास तारीख हो तो स्टाफ जल्दी चाहिए। फॉर्म पर पहले तारीख लिखें।",
    ],
    faqs: [
      {
        q: "Do you offer Sawamani in Ajmer?",
        a: "Yes, Sawamani Prashadi and Dal Baati Churma can be planned in Ajmer. Share gathering size.",
        qHi: "क्या अजमेर में सवामणी होगी?",
        aHi: "हाँ। सवामणी प्रसादी और दाल बाटी चूरमा अजमेर में योजना हो सकती है।",
      },
    ],
  },
  {
    slug: "kota-catering-services",
    kind: "city",
    h1: "Catering services in Kota",
    h1Hi: "कोटा में केटरिंग सेवाएँ",
    title: "Kota Catering Services | Weddings & Events",
    description:
      "Vegetarian wedding and event catering in Kota, Rajasthan. Live counters and indoor/outdoor service from Jaipur.",
    keywords: ["Kota catering", "कोटा केटरिंग", "Kota wedding caterers"],
    intro:
      "Kota celebrations range from family halls to larger outdoor functions. We bring Jaipur kitchen standards with a local logistics plan.",
    introHi:
      "कोटा में पारिवारिक हॉल से बड़े आउटडोर तक हैं। जयपुर का किचन स्तर, स्थानीय लॉजिस्टिक्स के साथ।",
    body: [
      "Corporate openings and student-family events are common asks. Tell us the audience so the menu is not written for the wrong room.",
    ],
    bodyHi: [
      "कॉर्पोरेट ओपनिंग और पारिवारिक कार्यक्रम दोनों आते हैं। दर्शक बताएँ ताकि मेनू गलत कमरे के लिए न लिख जाए।",
    ],
    faqs: [
      {
        q: "How far in advance should Kota hosts enquire?",
        a: "As soon as the date is serious. Peak wedding months fill first. We still take a phone number and call back within two hours.",
        qHi: "कोटा से कितने पहले पूछें?",
        aHi: "तारीख तय होते ही। पीक शादी महीने पहले भरते हैं। फोन पर दो घंटे में कॉल बैक।",
      },
    ],
  },
  {
    slug: "sikar-catering-services",
    kind: "city",
    h1: "Catering services in Sikar",
    h1Hi: "सीकर में केटरिंग सेवाएँ",
    title: "Sikar Catering Services | Rajasthani Veg Catering",
    description:
      "Wedding and Sawamani catering in Sikar from Shree Gajanan Caterers. Pure veg, traditional Rajasthani food, live counters.",
    keywords: ["Sikar catering", "सीकर केटरिंग", "Sikar wedding caterers"],
    intro:
      "Sikar hosts often want Rajasthani food at family scale. We plan Dal Baati, thali lines and reception counters without mixing the two blindly.",
    introHi:
      "सीकर में परिवार के पैमाने पर राजस्थानी खाना चाहिए। दाल बाटी, थाली और रिसेप्शन काउंटर अलग-अलग सोचकर।",
    body: [
      "Road time from Jaipur is part of the staffing clock. Outdoor plots need an early site note — power and water especially.",
    ],
    bodyHi: [
      "जयपुर से सड़क का समय स्टाफ की घड़ी में है। आउटडोर प्लॉट पर बिजली-पानी जल्दी नोट करें।",
    ],
    faqs: [
      {
        q: "Can you do a village outdoor function near Sikar?",
        a: "Outdoor catering is our specialisation. Share the nearest town, guest count and whether a kitchen tent is allowed.",
        qHi: "क्या सीकर के पास गाँव का आउटडोर होगा?",
        aHi: "आउटडोर विशेषज्ञता है। कस्बा, संख्या और किचन टेंट की अनुमति बताएँ।",
      },
    ],
  },
  {
    slug: "wedding-caterers-malviya-nagar-jaipur",
    kind: "area",
    h1: "Wedding caterers in Malviya Nagar, Jaipur",
    h1Hi: "मालवीय नगर, जयपुर में शादी केटरिंग",
    title: "Wedding Caterers Malviya Nagar Jaipur",
    description:
      "Pure veg wedding catering for Malviya Nagar and nearby South Jaipur venues. Indoor halls and outdoor lawns.",
    keywords: ["wedding caterers Malviya Nagar", "मालवीय नगर केटरिंग"],
    intro:
      "Malviya Nagar and the southern corridor have dense banquet traffic. We plan veg wedding menus around hall kitchens and farmhouse lawns nearby.",
    introHi:
      "मालवीय नगर और दक्षिण गलियारे में बैंक्वेट घने हैं। हॉल किचन और पास के फार्महाउस लॉन के हिसाब से शाकाहारी मेनू।",
    body: [
      "Parking and service-gate access decide whether a live counter sits inside or on an adjoining lawn. We ask that on the first call.",
    ],
    bodyHi: [
      "पार्किंग और सर्विस गेट तय करते हैं काउंटर अंदर होगा या लॉन पर। पहली कॉल पर यही पूछते हैं।",
    ],
    faqs: [
      {
        q: "Do you only serve Malviya Nagar?",
        a: "No. We are based at Subhash Chowk, Jaipur, and serve the whole city plus Rajasthan destinations. This page is for hosts searching this area.",
        qHi: "क्या केवल मालवीय नगर?",
        aHi: "नहीं। सुभाष चौक से पूरे जयपुर और राजस्थान। यह पेज इस इलाके की खोज के लिए है।",
      },
    ],
  },
  {
    slug: "wedding-caterers-vaishali-nagar-jaipur",
    kind: "area",
    h1: "Wedding caterers in Vaishali Nagar, Jaipur",
    h1Hi: "वैशाली नगर, जयपुर में शादी केटरिंग",
    title: "Wedding Caterers Vaishali Nagar Jaipur",
    description:
      "Wedding and event catering in Vaishali Nagar, Jaipur. Pure vegetarian, live counters, indoor and outdoor.",
    keywords: ["wedding caterers Vaishali Nagar", "वैशाली नगर केटरिंग"],
    intro:
      "West Jaipur hosts often mix club lawns with farmhouses on Ajmer Road. We write the menu after the venue type is clear.",
    introHi:
      "पश्चिम जयपुर में क्लब लॉन और अजमेर रोड के फार्महाउस मिलते हैं। वेन्यू साफ़ होने पर मेनू लिखते हैं।",
    body: [
      "Kitty parties and weddings in the same neighbourhood need different staffing. Do not reuse a wedding quote for a home gathering.",
    ],
    bodyHi: [
      "एक ही इलाके की किटी और शादी का स्टाफ अलग है। होम गैदरिंग पर शादी का कोट न दोहराएँ।",
    ],
    faqs: [
      {
        q: "Can you cater a Vaishali Nagar society club?",
        a: "Yes, when the club allows an outside caterer and kitchen access. Share the society rules with your enquiry.",
        qHi: "क्या सोसाइटी क्लब होगा?",
        aHi: "जब क्लब बाहर के केटरर और किचन की अनुमति दे। नियम के साथ पूछताछ भेजें।",
      },
    ],
  },
  {
    slug: "wedding-caterers-mansarovar-jaipur",
    kind: "area",
    h1: "Wedding caterers in Mansarovar, Jaipur",
    h1Hi: "मानसरोवर, जयपुर में शादी केटरिंग",
    title: "Wedding Caterers Mansarovar Jaipur",
    description:
      "Mansarovar wedding catering — halls, homes and nearby outdoor venues. Pure veg. Shree Gajanan Caterers.",
    keywords: ["wedding caterers Mansarovar", "मानसरोवर केटरिंग"],
    intro:
      "Mansarovar functions often sit in compact halls. Live stations have to earn their floor space or they slow the room.",
    introHi:
      "मानसरोवर के कार्यक्रम अक्सर छोटे हॉल में होते हैं। लाइव स्टेशन तभी जब जगह बने, वरना कमरा धीमा।",
    body: [
      "We prefer an honest counter count over a crowded aisle. That is how service stays calm at peak.",
    ],
    bodyHi: [
      "भीड़ी गली से बेहतर है ईमानदार काउंटर संख्या। पीक पर सेवा शांत रहती है।",
    ],
    faqs: [
      {
        q: "Do you cook at home functions in Mansarovar?",
        a: "Home catering is possible when cooking space, water and drainage are usable. We confirm on a short call.",
        qHi: "क्या घर पर पकाएँगे?",
        aHi: "जब पकाने की जगह, पानी और नाली ठीक हो। छोटी कॉल पर कन्फर्म।",
      },
    ],
  },
  {
    slug: "wedding-caterers-c-scheme-jaipur",
    kind: "area",
    h1: "Wedding caterers in C-Scheme, Jaipur",
    h1Hi: "सी-स्कीम, जयपुर में शादी केटरिंग",
    title: "Wedding Caterers C-Scheme Jaipur",
    description:
      "Central Jaipur wedding catering for C-Scheme hotels, clubs and residences. Pure vegetarian hospitality.",
    keywords: ["wedding caterers C-Scheme", "सी स्कीम केटरिंग जयपुर"],
    intro:
      "C-Scheme venues are central, timed and often hotel-ruled. We match veg menus to the property’s kitchen policy rather than fighting it.",
    introHi:
      "सी-स्कीम के वेन्यू केंद्रीय, समयबद्ध और अक्सर होटल-नियमों वाले हैं। किचन नीति के साथ शाकाहारी मेनू।",
    body: [
      "If the hotel mandates in-house catering, we will say so early. If an outside caterer is allowed, we plan loading docks and service lifts first.",
    ],
    bodyHi: [
      "अगर होटल अपना केटरर अनिवार्य करे तो जल्दी बताएँगे। बाहर का केटरर हो तो पहले डॉक और लिफ्ट।",
    ],
    faqs: [
      {
        q: "Are you based near C-Scheme?",
        a: "Office and residence: 999, Subhash Chowk, Jaipur — a short run to central venues. Serving all of Jaipur.",
        qHi: "क्या सी-स्कीम के पास हैं?",
        aHi: "कार्यालय: ९९९, सुभाष चौक, जयपुर। पूरे जयपुर में सेवा।",
      },
    ],
  },
  {
    slug: "wedding-caterers-tonk-road-jaipur",
    kind: "area",
    h1: "Wedding caterers on Tonk Road, Jaipur",
    h1Hi: "टोंक रोड, जयपुर पर शादी केटरिंग",
    title: "Wedding Caterers Tonk Road Jaipur",
    description:
      "Wedding and outdoor catering along Tonk Road and South Jaipur. Farmhouses, halls, live counters. Pure veg.",
    keywords: ["wedding caterers Tonk Road", "टोंक रोड केटरिंग"],
    intro:
      "Tonk Road is farmhouse country. Outdoor wedding catering here is about power, dust, lighting and a kitchen that still plates clean food.",
    introHi:
      "टोंक रोड फार्महाउस पट्टी है। यहाँ आउटडोर शादी का मतलब बिजली, धूल, रोशनी और साफ़ प्लेट।",
    body: [
      "We walk the service road in the plan. If trucks cannot turn, the live kitchen layout changes — better before the date than on it.",
    ],
    bodyHi: [
      "सर्विस रोड प्लान में होती है। ट्रक न मुड़ें तो किचन लेआउट बदलता है — तारीख से पहले बेहतर।",
    ],
    faqs: [
      {
        q: "Do you cover Jagatpura and nearby farmhouses too?",
        a: "Yes. South and south-east Jaipur venues are regular work. Mention the farmhouse or hall name on the form.",
        qHi: "क्या जगतपुरा भी?",
        aHi: "हाँ। दक्षिण जयपुर नियमित है। फार्महाउस या हॉल का नाम लिखें।",
      },
    ],
  },
];

export function getLanding(slug: string) {
  return landings.find((l) => l.slug === slug);
}
