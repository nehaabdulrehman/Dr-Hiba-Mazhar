// WhatsApp Central Configuration
const WHATSAPP_PHONE = "923117218422";
const WHATSAPP_DEFAULT_MSG = "Assalamualaikum Dr. Hiba, I would like to book an appointment.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;

export const SITE_CONFIG = {
  doctorName: "Dr. Hiba Mazhar",
  tagline: "Homeopathic Care",
  monogramText: "HM",

  // Centralized WhatsApp Configuration
  whatsapp: {
    phoneNumber: WHATSAPP_PHONE,
    defaultMessage: WHATSAPP_DEFAULT_MSG,
    url: WHATSAPP_URL,
  },
  
  // External Action Links (Easily editable placeholders)
  links: {
    bookingUrl: "#footer",
    googleMapsUrl: "https://www.google.com/maps/place/Dr+Hiba+Mazhar/@24.8240813,67.1685336,17z/data=!4m8!3m7!1s0x3eb339a0d0a9cc71:0xd5a8466717679885!8m2!3d24.8240765!4d67.1711085!9m1!1b1!16s%2Fg%2F11xnpvh15r?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D",
    googleReviewUrl: "https://www.google.com/maps/place/Dr+Hiba+Mazhar/@24.8240813,67.1685336,17z/data=!4m8!3m7!1s0x3eb339a0d0a9cc71:0xd5a8466717679885!8m2!3d24.8240765!4d67.1711085!9m1!1b1!16s%2Fg%2F11xnpvh15r?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D",
    whatsappUrl: WHATSAPP_URL,
    emailAddress: "mailto:drhibamazhar@gmail.com",
    phoneCall: "tel:+923117218422",
    instagramUrl: "https://instagram.com/drhibamazhar",
    threadsUrl: "https://www.threads.com/@dr_hiba_medical_care?xmt=AQG0XewiEUAWDQ2AVQRIiwKTV4ECvImx2kqrL1Ns_2n93oE",
    facebookUrl: "https://facebook.com/drhibamazhar",
  },

  // Social Proof Configuration
  socialProof: {
    patientCountText: "100+ Patients",
    fullTextPrefix: "Trusted by ",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    ]
  },

  // About Section Data (Professional Profile)
  aboutSection: {
    label: "PROFESSIONAL PROFILE",
    heading: "Dr. Hiba Mazhar",
    subtitle: "Homeopathic Physician",
    paragraph: "Dr. Hiba Mazhar is a homeopathic physician who believes good treatment starts with listening. She takes time to understand your full health story, not just the symptoms you walk in with, and builds a gentle, personalized plan for you and your family.",
    cards: [
      {
        id: "qualifications",
        icon: "GraduationCap",
        title: "Qualifications",
        bodyPrefix: "",
        bodyBold1: "DHMS",
        bodyMiddle: " and ",
        bodyBold2: "BHMS",
        bodySuffix: " in Homeopathic Medicine, with 2+ years of clinical experience."
      },
      {
        id: "approach",
        icon: "Stethoscope",
        title: "Approach",
        bodyPrefix: "Detailed case taking, where every consultation starts with a full conversation about your health, lifestyle and history. Treatment is then ",
        bodyBold1: "personalized",
        bodyMiddle: " for you, with follow-ups to track your progress.",
        bodyBold2: "",
        bodySuffix: ""
      },
      {
        id: "mission",
        icon: "Sparkles",
        title: "Mission & Vision",
        bodyPrefix: "To offer honest, affordable and gentle homeopathic care that looks for the ",
        bodyBold1: "root cause",
        bodyMiddle: " of illness and helps families stay well for the long run.",
        bodyBold2: "",
        bodySuffix: ""
      }
    ]
  },

  // Women's Care Section Data
  womensCareSection: {
    label: "Women's Care",
    headingMain: "Gentle Care ",
    headingItalic: "for Women",
    paragraph: "From hormonal changes to skin and hair concerns, women's health has many layers. Dr. Hiba takes the time to understand your whole story, then builds a gentle, personalized plan that supports your body naturally.",
    imageSrc: "/images/womens-care-mockup.jpg",
    imageAlt: "Dr. Hiba consulting a patient",
    buttonText: "Book Appointment",
    conditionsLeft: [
      { name: "Hormonal Imbalance", icon: "Activity" },
      { name: "Irregular or Painful Periods", icon: "CalendarDays" },
      { name: "PCOS Support", icon: "Flower2" },
      { name: "Pregnancy Care", icon: "Baby" },
    ],
    conditionsRight: [
      { name: "Skin & Hair Concerns", icon: "Sparkles" },
      { name: "Weight Management", icon: "Scale" },
      { name: "Thyroid Concerns", icon: "ShieldCheck" },
      { name: "Overall Women's Wellness", icon: "Heart" },
    ]
  },

  // Children's Care Section Data
  childrensCareSection: {
    label: "Children's Care",
    headingMain: "Gentle Care ",
    headingItalic: "for Children",
    paragraph: "Children need care that is kind to their bodies and easy on their nerves. Dr. Hiba listens to parents, observes the child closely, and builds a gentle plan that supports growth, immunity and everyday comfort naturally.",
    imageSrc: "/images/childrens-care-mockup.jpg",
    imageAlt: "Dr. Hiba examining a child",
    buttonText: "Book Appointment",
    conditionsLeft: [
      { name: "Growth & Teething Concerns", icon: "Baby" },
      { name: "Low Immunity & Frequent Illness", icon: "ShieldCheck" },
      { name: "Digestive Issues", icon: "Utensils" },
      { name: "Skin Concerns", icon: "Sparkles" },
    ],
    conditionsRight: [
      { name: "Allergies", icon: "Wind" },
      { name: "Cough, Cold & Fever", icon: "Thermometer" },
      { name: "Sleep & Appetite Problems", icon: "MoonStar" },
      { name: "Overall Child Health", icon: "Heart" },
    ]
  },

  // Process / How It Works Section Data
  processSection: {
    label: "HOW IT WORKS",
    heading: "What Your First Visit Looks Like",
    subtitle: "No rush, no complicated process. Just a simple path from your first message to a plan made for you.",
    cards: [
      {
        number: "01",
        title: "Reach Out",
        description: "Send a message on WhatsApp or call the clinic to pick a time that suits you. We'll confirm your slot and answer any questions before you come.",
        iconSrc: "/images/process-card-1.png",
        iconAlt: "Reach out icon",
      },
      {
        number: "02",
        title: "Share Your Story",
        description: "Dr. Hiba sits down with you for an unhurried conversation about your symptoms, habits, sleep, diet and past health. Every detail helps her understand you better.",
        iconSrc: "/images/process-card-2.png",
        iconAlt: "Share your story icon",
      },
      {
        number: "03",
        title: "Your Personal Plan",
        description: "You leave with a treatment plan built around you, along with clear guidance on what to expect. Follow-up visits help adjust things as you progress.",
        iconSrc: "/images/replace-card-3.png",
        iconAlt: "Personal treatment plan",
      },
    ]
  },

  // Patient Stories / Reviews Section Data
  patientStoriesSection: {
    label: "PATIENT STORIES",
    heading: "Kind Words from Our Patients",
    subtitle: "Reviews from Google, shared by patients who visited Dr. Hiba.",
    rating: "4.9",
    reviewCount: 12,
    imageSrc: "/images/patient-stories-doctor.jpg",
    imageAlt: "Dr. Hiba Mazhar",
    reviews: [
      {
        id: 1,
        name: "Syeda Mahnoor",
        initial: "S",
        stars: 5,
        text: "Best experience with Dr. Hiba. She treated me very well. I had subclinical hypothyroidism and my TSH was elevated. After one month, I repeated my tests and the report is now normal. I have noticed significant improvement in myself."
      },
      {
        id: 2,
        name: "Mahira",
        initial: "M",
        stars: 5,
        text: "Had an amazing experience with Dr. Hiba, she's the sweetest and so good at her work. Would highly recommend her to everyone who wants an in-depth consultation for their health problems."
      },
      {
        id: 3,
        name: "Fatima Azhar",
        initial: "F",
        stars: 5,
        text: "Dr. Hiba is extraordinarily attentive and compassionate. Her gentle homeopathic remedies worked wonders for my chronic skin allergies when nothing else helped."
      },
      {
        id: 4,
        name: "Ayesha Khan",
        initial: "A",
        stars: 5,
        text: "Very professional and calm environment. Dr. Hiba listens to every detail with great patience. My daughter's immunity has improved tremendously under her care."
      },
      {
        id: 5,
        name: "Zainab Ahmed",
        initial: "Z",
        stars: 5,
        text: "Wonderful consultation! Dr. Hiba took out time to explain the entire treatment plan clearly. Highly recommended for holistic family wellness."
      }
    ]
  },

  // FAQ Section Data
  faqSection: {
    label: "FAQ",
    headingLine1: "The things people ask ",
    headingLine2: "before they book.",
    emergencyNote: "For medical emergencies, please visit the nearest hospital.",
    items: [
      {
        id: "faq-1",
        question: "What happens in the first consultation?",
        answer: "A detailed, unhurried conversation about your symptoms, lifestyle and health history. You leave with a personalized treatment plan."
      },
      {
        id: "faq-2",
        question: "How long does treatment take?",
        answer: "It depends on the condition and how long you've had it. Dr. Hiba will give you a realistic idea after your first visit."
      },
      {
        id: "faq-3",
        question: "Is homeopathy suitable for children?",
        answer: "Homeopathic medicines are gentle, and many families choose them for children. Each child is assessed individually."
      },
      {
        id: "faq-4",
        question: "Can I take it with my current medicines?",
        answer: "Please don't stop any medicine without speaking to your doctor. Share your full list during the consultation and Dr. Hiba will guide you."
      },
      {
        id: "faq-5",
        question: "Do you offer online consultations?",
        answer: "Yes, you can book an online consultation over WhatsApp or video call if you can't visit the clinic."
      },
      {
        id: "faq-6",
        question: "How do I book an appointment?",
        answer: "Message us on WhatsApp, call the clinic, or use the Book Appointment button on this page."
      }
    ]
  },

  // Footer Section Data
  footerSection: {
    brandName: "Dr. Hiba Mazhar",
    tagline: "Homeopathic Care",
    monogramText: "HM",
    introText: "Gentle, personalized homeopathic care for you and your family. Every visit starts with listening, and every plan is built around you.",
    getInTouch: {
      heading: "GET IN TOUCH WITH US",
      addressText: "House No. 55, 51A Main Rd, near Mazhar Book Shop, Area D, Hasrat Mohani Colony, Sector 51-A, Korangi 6, Karachi, 74900, Pakistan",
      googleMapsUrl: "https://www.google.com/maps/place/Dr+Hiba+Mazhar/@24.8240813,67.1685336,17z/data=!4m8!3m7!1s0x3eb339a0d0a9cc71:0xd5a8466717679885!8m2!3d24.8240765!4d67.1711085!9m1!1b1!16s%2Fg%2F11xnpvh15r?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D",
      phoneDisplay: "0311 7218422",
      phoneUrl: "tel:+923117218422",
      emailDisplay: "drhibamazhar@gmail.com",
      emailUrl: "mailto:drhibamazhar@gmail.com",
    },
    clinicHours: {
      heading: "CLINIC HOURS",
      schedules: [
        { days: "Sunday to Thursday:", hours: "3:00 PM – 6:00 PM" },
        { days: "Friday and Saturday:", hours: "Closed" }
      ]
    },
    socialMedia: {
      heading: "OUR SOCIAL MEDIA",
      links: [
        { id: "instagram", name: "Instagram", ariaLabel: "Dr. Hiba on Instagram", url: "https://instagram.com/drhibamazhar" },
        { id: "threads", name: "Threads", ariaLabel: "Dr. Hiba on Threads", url: "https://www.threads.com/@dr_hiba_medical_care?xmt=AQG0XewiEUAWDQ2AVQRIiwKTV4ECvImx2kqrL1Ns_2n93oE" },
        { id: "tiktok", name: "TikTok", ariaLabel: "Dr. Hiba on TikTok", url: "https://tiktok.com/@drhibamazhar" },
        { id: "linkedin", name: "LinkedIn", ariaLabel: "Dr. Hiba on LinkedIn", url: "https://linkedin.com/in/drhibamazhar" },
        { id: "whatsapp", name: "WhatsApp", ariaLabel: "Chat with Dr. Hiba on WhatsApp", url: WHATSAPP_URL },
      ]
    },
    bottomBar: {
      copyright: "© 2026 Dr. Hiba Mazhar. All rights reserved.",
      designation: "DHMS / BHMS · Homeopathic Physician"
    }
  },

  // Navbar Structure & Sub-items
  navigation: [
    { name: "Home", href: "#home" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Women's Care", href: "#womens-care", desc: "Hormonal, fertility & reproductive wellness" },
        { name: "Children's Care", href: "#childrens-care", desc: "Gentle remedies for infants & kids" },
      ]
    },
    {
      name: "About",
      href: "#about",
      dropdown: [
        { name: "Patient Stories", href: "#reviews", desc: "Real recovery testimonials & case studies" },
        { name: "FAQs", href: "#faq", desc: "Common questions about homeopathy" },
      ]
    },
    {
      name: "Contact",
      href: "#contact",
      dropdown: [
        { name: "Book Appointment", href: "action:book", isAction: true, desc: "Schedule a 1-on-1 consultation" },
        { name: "Visit our Clinic", href: "external:googleMapsUrl", isExternal: true, desc: "Get directions to our location" },
        { name: "WhatsApp Chat", href: "external:whatsappUrl", isExternal: true, desc: "Instant messaging & queries" },
        { name: "Email Us", href: "external:emailAddress", isExternal: true, desc: "drhibamazhar@gmail.com" },
        { name: "Social Media", href: "#footer", desc: "Follow us on Instagram & Facebook" },
      ]
    }
  ]
};
