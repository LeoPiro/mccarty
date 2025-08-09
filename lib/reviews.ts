export type Review = {
  quote: string;
  author: string;
  roleOrCompany?: string;
  logo?: string;
};

export const reviews: Review[] = [
  {
    quote: "McCarty delivered on an aggressive schedule without compromising safety or quality.",
    author: "Sarah L.",
    roleOrCompany: "Director, Central Health",
  },
  {
    quote: "Transparent communication and proactive risk management from day one.",
    author: "James R.",
    roleOrCompany: "Facilities Manager, State University",
  },
  {
    quote: "Their team brought solutions, not excuses—project came in ahead of milestone.",
    author: "Emily T.",
    roleOrCompany: "VP Operations, Commerce Corp",
  },
];
