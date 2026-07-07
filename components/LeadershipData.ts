export interface Leader {
  id: number;
  initials: string;
  name: string;
  designation: string;
  shortDescription: string;
  about: string[];
  expertise: string[];
  philosophy: string;
}

export const leaders: Leader[] = [
  {
    id: 1,
    initials: "CG",
    name: "Mr. Chetan Gawde",
    designation: "Founder & Chief Financial Officer (CFO)",

    shortDescription:
      "Founder of Verkoper Property Solutions with extensive experience in real estate sales, strategic planning, financial management, and customer relationship building.",

    about: [
      "Mr. Chetan Gawde is the Founder and Chief Financial Officer (CFO) of Verkoper Property Solutions, bringing several years of experience in the real estate industry.",

      "Throughout his professional journey, he has successfully worked as a Sales Manager, leading teams and helping clients make informed property decisions with confidence.",

      "His expertise in sales, client relationship management, strategic planning, and financial management has helped establish Verkoper Property Solutions as a trusted and transparent real estate organization.",

      "As Founder & CFO, he believes success is not measured only by sales, but by building trust, maintaining transparency, and helping clients make smart long-term investments."
    ],

    expertise: [
      "Financial Management",
      "Business Strategy",
      "Sole Selling Mandates",
      "Project Sales",
      "Client Relationship Management",
      "Business Planning",
      "Investment Strategy",
      "Real Estate Sales"
    ],

    philosophy:
      "Success is built on trust, transparency, and creating long-term value for every client."
  },

  {
    id: 2,
    initials: "HJ",
    name: "Mr. Hitesh Jagtap",
    designation: "CEO & Co-Founder",

    shortDescription:
      "Over 20 years of leadership experience across the automobile and real estate industries, driving business growth through strategy, innovation and operational excellence.",

    about: [
      "Mr. Hitesh Jagtap serves as the CEO & Co-Founder of Verkoper Property Solutions with over 20 years of leadership experience.",

      "His career includes 13 years in the automobile industry and 7 years in real estate, giving him a unique perspective on customer relationships, business development and operational excellence.",

      "Before becoming an entrepreneur, he held leadership positions with Maruti Suzuki, Ford and Hyundai where he developed expertise in sales leadership, business development and customer relationship management.",

      "Today he focuses on building Verkoper Property Solutions into a trusted, transparent and investment-focused real estate company."
    ],

    expertise: [
      "Business Strategy",
      "Sales Leadership",
      "Business Development",
      "Strategic Partnerships",
      "Investment Planning",
      "Customer Relationship Management",
      "Operational Excellence",
      "Team Leadership"
    ],

    philosophy:
      "Long-term success comes from integrity, innovation and consistently delivering value to customers."
  },

  {
    id: 3,
    initials: "DB",
    name: "Mr. Divesh Bhoir",
    designation: "Managing Director",

    shortDescription:
      "Over 10 years of experience in real estate backed by a strong family legacy in builders, developers and construction.",

    about: [
      "Mr. Divesh Bhoir serves as the Managing Director of Verkoper Property Solutions with over 10 years of experience in the real estate industry.",

      "Coming from a family deeply rooted in construction and development, he possesses strong expertise in project planning, investments and market trends.",

      "His leadership is focused on transparency, operational excellence and creating long-term value for investors, developers and homebuyers.",

      "He believes ethical business practices and customer satisfaction are the foundation of sustainable growth."
    ],

    expertise: [
      "Business Operations",
      "Project Planning",
      "Investment Opportunities",
      "Business Development",
      "Sales & Marketing",
      "Financial Planning",
      "Real Estate Development",
      "Leadership"
    ],

    philosophy:
      "Great businesses are built by creating lasting relationships based on trust and professionalism."
  },

  {
    id: 4,
    initials: "PU",
    name: "Mr. Pawan Upadhyay",
    designation: "CSO & Co-Founder",

    shortDescription:
      "Co-Founder and Chief Sales Officer with extensive experience in sales leadership, client relationship management and project marketing.",

    about: [
      "Mr. Pawan Upadhyay is the Co-Founder and Chief Sales Officer of Verkoper Property Solutions.",

      "Over the years he has successfully led sales teams while helping clients make informed and profitable property decisions.",

      "His expertise in sales strategy, client relationship management and market analysis has contributed significantly to the company's growth.",

      "He believes success comes from helping clients achieve their dreams through transparent advice and professional service."
    ],

    expertise: [
      "Sales Leadership",
      "Project Marketing",
      "Client Relationship Management",
      "Business Development",
      "Sales Strategy",
      "Market Analysis",
      "Developer Coordination",
      "Team Leadership"
    ],

    philosophy:
      "Helping clients achieve their dreams through trust, transparency and professional guidance."
  },

  {
    id: 5,
    initials: "MC",
    name: "Mr. Mahesh Chavan",
    designation: "Director – Sales & Marketing",

    shortDescription:
      "Award-winning sales professional with over 10 years of experience across residential, commercial and investment real estate.",

    about: [
      "Mr. Mahesh Chavan serves as the Director – Sales & Marketing at Verkoper Property Solutions.",

      "He specializes in residential, commercial and investment properties, helping clients make informed real estate decisions.",

      "Recognized with multiple Highest Sales Awards, he is known for his market knowledge, customer-first approach and consistent sales excellence.",

      "His goal is to expand the company's market presence while delivering exceptional service and long-term value."
    ],

    expertise: [
      "Residential Real Estate",
      "Commercial Real Estate",
      "Luxury Homes",
      "Investment Advisory",
      "Sales Strategy",
      "Business Development",
      "Marketing",
      "Client Relationship Management"
    ],

    philosophy:
      "Every successful investment begins with trust, informed guidance and exceptional service."
  }
];