// Central place for business details, navigation and shared copy.
// Edit here once and every page picks it up.

export const site = {
  name: 'Your CEO Solution Co.',
  shortName: 'Your CEO Solution',
  tagline: 'We transform health and wellness businesses to run themselves.',
  hours: 'Mon–Thu, 10 AM–3 PM EST',
  email: 'support@yourceosolution.com',
  phone: '(919) 830-6877',
  phoneHref: 'tel:+19198306877',
  address: 'Martinsville, Martinsville Virginia 24112',
  social: {
    facebook: 'https://www.facebook.com/YourCEOSolution',
    instagram: 'https://www.instagram.com/your_ceo_solution/',
    linkedin: 'https://www.linkedin.com/company/your-ceo-solution/',
  },
  // GoHighLevel / LeadConnector booking calendars (from the live site).
  calendars: {
    discovery: 'bk7skNtnTwwT75ljvDHu', // Discovery Call (30 Min)
    coaching: 'NI15Mwa7W3RcnqOT5Aka', // Schedule a Coaching Call (60 Min)
  },
  caseReport: '/docs/case-report.pdf',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Work With Us', href: '/work-with-us' },
];

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Work With Us', href: '/work-with-us' },
  { label: 'FAQ', href: '/#faq' },
];

export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export type Testimonial = { quote: string; name: string; meta?: string };

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      "My practice went from red to black in only 6 months...Because of Jacqi, I'm able to mostly just sit back and treat the patients. (Fractional COO Services)",
    name: '- M. Lawrence, L.Ac.',
    meta: 'Durham Acupuncture & Associates',
  },
  {
    quote:
      'Dr. Bartling is an expert in the field of pain management and integrative medicine - she provides an exquisite educational experience for both clients, and the primary veterinary medical team. She has been a valuable asset to our team. (Team Development Services/Veterinary Consulting)',
    name: '- A. McCaughan, DVM, CVMA',
    meta: 'Marina Village Veterinary & Holistic Care',
  },
  {
    quote:
      "Since coaching with Jacqi, I've gained greater clarity, focus, and confidence in my professional growth. I was able to identify the true blockers standing in the way of my goals and build simple strategies to move in the right direction. (Life + Success Coaching)",
    name: '- J. Keohan',
    meta: 'Software Engineer',
  },
  {
    quote:
      'After working with Marie, my self confidence is a 10/10! Having the guidance to understand myself better has given me momentum to build my business. (Executive Coaching)',
    name: '- C. Liu - Executive Confidence Coaching Client',
    meta: 'Christine Liu Loves Coaching',
  },
];

// Same four reviews, labelled by service (used on About + Contact).
export const serviceTestimonials: Testimonial[] = [
  {
    quote:
      'My practice went from red to black in only 6 months." "Because of Jacqi, I\'m able to mostly just sit back and treat the patients.',
    name: 'Fractional COO/ Human Acupuncturist - Jacqi',
  },
  {
    quote:
      'Dr. Bartling is an expert in the field of pain management and integrative medicine -- she provides an exquisite educational experience for both clients, and the primary veterinary medical team. She has been a valuable asset to our team.',
    name: 'Fractional COO/Veterinary Consulting - Marie',
  },
  {
    quote:
      "Since coaching, I've gained greater clarity, focus, and confidence in my professional growth. I was able to identify the true blockers standing in the way of my goals and build simple strategies to move in the right direction.",
    name: 'Personal Coaching - Jacqi',
  },
  {
    quote:
      'My self confidence is a 10/10! Having the guidance to understand myself better has given me momentum to build my business.',
    name: 'Executive Confidence Coaching - Marie',
  },
];

export const workTestimonials: Testimonial[] = [
  {
    quote:
      'This company sold to the highest bidder at an improved valuation. With clean books and more leadership time, they were able to grow the business exponentially and save money by reporting taxes correctly.',
    name: '- Jacqi Dix, Fractional COO',
    meta: 'Carolina Mobility & Seating',
  },
  {
    quote:
      'Dr. Marie Bartling is absolutely brilliant at understanding someone’s personality in a very short time. I have never met anybody so intuitive and on point in the medical world. If you have trouble retaining employees, or keeping your team members happy, or maintain the peace, then you will greatly benefit from Dr. Marie’s coaching.',
    name: '- P. Zeltzman, DVM, DACVS',
    meta: 'Team Development/Veterinary Consulting',
  },
  {
    quote:
      "My coaching experience with Jacqi was insightful and transformative, helping me uncover the root cause of my imposter syndrome and reframe it into a positive challenge. Since coaching, I've become more intentional with how I organize my time, which has given me greater clarity, focus, and confidence in both my personal life and professional growth.",
    name: '- C. Wearwinsome, Business Owner',
    meta: 'Executive Coaching',
  },
  {
    quote:
      'Working with Marie felt unique because she was very "authentic," "engaging," and listened very well. Coaching with Marie is a 12 out of 10. "Just jump on it" and "Don\'t hesitate" because there is "so much value in getting to know yourself.',
    name: '- B. Fisher, Business Owner',
    meta: 'Executive Coaching',
  },
];

export const faqs = [
  {
    q: 'What services does Your CEO Solution Co. provide?',
    a: 'We offer a range of services, including business strategy development, leadership coaching, market research, digital transformation consulting, and financial planning, all designed to help businesses grow and thrive.',
  },
  {
    q: 'How can Your CEO Solution Co. help my business?',
    a: 'Our expert team works with you to identify opportunities for improvement, streamline operations, and develop effective strategies to achieve sustainable growth. We provide tailored solutions based on your business’s unique needs.',
  },
  {
    q: 'Do you offer services for startups?',
    a: 'Yes, we specialize in helping startups navigate the challenges of growth. From strategic planning to leadership coaching, we provide the support needed to scale efficiently and successfully.',
  },
  {
    q: 'How do I book a consultation with Your CEO Solution Co.?',
    a: 'You can easily book a consultation by visiting our website and clicking the "Book a Consultation" button. Alternatively, you can contact us directly via email or phone.',
  },
  {
    q: 'What makes Your CEO Solution Co. different from other consultants?',
    a: 'Our personalized approach sets us apart. We focus on understanding your unique challenges and provide actionable insights that align with your goals. Our experienced team works alongside you every step of the way to drive real results.',
  },
  {
    q: 'Can Your CEO Solution Co. help with digital transformation?',
    a: 'Absolutely! While we are not AI experts yet - we can help you evaluate tools for digital transformation that enhance their operations and improve customer engagement.',
  },
];
