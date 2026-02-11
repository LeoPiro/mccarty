export type Review = {
  quote: string;
  author: string;
  roleOrCompany?: string;
  logo?: string;
};

export const reviews: Review[] = [
  {
    quote: "As we approach one million sqft of renovation and new build with your company, we remain impressed with communication, timing, attention to detail, ability to pivot, end product satisfaction, and adherence to budget.",
    author: "SMC, Ltd.",
  },
  {
    quote: "McCarty & Associates exceeded all our expectations throughout the building process. What truly set them apart was the owners' engaged and hands-on approach. This dedication ensured the entire process and end result not only met, but far surpassed what we had hoped for.",
    author: "Epic Polymer Solutions",
  },
  {
    quote: "Any time I called with a question, Patrick picked up the phone or called right back and thoroughly answered every question and addressed any concern. I always felt he was more than a builder, he was an advocate.",
    author: "Cold Harbor Brewing",
  },
  {
    quote: "There is a reason why the McCarty Companies is the fastest growing design/build firm in MA and beyond. If you're looking for a true partner in a general contractor and design/build firm, The McCarty Companies are your go-to partner.",
    author: "D & S Realty",
  },
  {
    quote: "It is rare to find a group that can handle all aspects of permitting, design, engineering, site development, construction, and interior fit-out, but Patrick and his team delivered a first quality project on-time and on-budget.",
    author: "Gerrity Stone",
  },
];
