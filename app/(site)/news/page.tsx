"use client";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: string;
  smallText: string;
  headline: string;
  copy: string;
  image: string;
  link: string;
  imagePosition: "left" | "right";
}

export default function NewsPage() {
  const newsItems: NewsItem[] = [
    {
      id: "nec-june-2024",
      smallText: "New England Construction — June 2024",
      headline: "McCarty Associates performs equal cut and fill earthmoving at Devens site",
      copy: "New England Construction spotlighted McCarty Associates for its site development work on a 232,320-square-foot pre-engineered industrial building at the former Fort Devens military installation. The feature highlights McCarty's expertise in balanced cut-and-fill earthwork, historic fill removal, stormwater controls, and overall site preparation for a large industrial facility. The project demonstrates McCarty's capabilities in managing complex soil conditions, regulatory requirements, and tight development constraints — reinforcing the firm's reputation as a trusted construction and site development partner across Massachusetts and the greater New England region.",
      image: "/media/nar_1.jpg",
      link: "https://acppubs.com/NEC/article/0C34C900-mccarty-associates-performs-equal-cut-and-fill-earthmoving-for-pre-engineered-industrial-building-in-massachusetts",
      imagePosition: "right"
    },
    {
      id: "nec-july-2022",
      smallText: "New England Construction — July 2022",
      headline: "McCarty Companies' third design-build project in West Boylston underway",
      copy: "In West Boylston, Massachusetts, McCarty Companies has commenced its third design-build project on Hartwell Street, a 101,200 square-foot facility with a 10,000-square-foot structural steel mezzanine. The team delivers full-service support, including civil engineering, site permitting, utility installation, drainage systems, and structural erection. This project highlights McCarty's end-to-end design-build capabilities and their expertise in delivering large-scale industrial and commercial construction across the New England region.",
      image: "/media/nar_2.jpg",
      link: "https://acppubs.com/NEC/article/2727C7F7-mccarty-companies-third-design-build-project-in-west-boylston-underway",
      imagePosition: "left"
    },
    {
      id: "nec-august-2021",
      smallText: "New England Construction — August 2021",
      headline: "Wilmington project signals back to normal for McCarty Companies",
      copy: "On a 16-acre tract in Wilmington, Massachusetts, McCarty Companies is developing a major commercial site featuring a one-acre pre-engineered metal building and comprehensive full-site civil work. This project comes after the industry slowdown triggered by COVID-19, and it marks McCarty's strong rebound — handling everything from demolition of existing structures, to stone processing, earthmoving, utility installation, and full building erection.",
      image: "/media/nar_3.jpg",
      link: "https://acppubs.com/NEC/article/0AEB87F5-wilmington-project-signals-back-to-normal-for-mccarty-companies",
      imagePosition: "right"
    },
    {
      id: "nec-november-2019",
      smallText: "New England Construction — November 2019",
      headline: "Mazda evolution retail store underway in Central Massachusetts",
      copy: "McCarty Companies began construction on a 22,000-square-foot Mazda Retail Evolution dealership for Patrick Motors on a 5.6-acre site in Auburn, Massachusetts. The design-build project includes complete civil site development, demolition of an existing 9,600-square-foot industrial structure, removal of foundations and utilities, and extensive earthwork totaling more than 75,000 cubic yards. The team also installed new storm-water drainage chambers, retaining walls, utility infrastructure, and paved areas for sales and service operations.",
      image: "/media/nar_4.jpg",
      link: "https://mccartydb.com/wp-content/uploads/2020/02/NEC-November-2019-Article.pdf",
      imagePosition: "left"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-mccarty-dark text-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">News and Recognition</h1>
              <p className="text-xl md:text-2xl text-mccarty-light max-w-3xl mx-auto">
                Industry recognition and project highlights showcasing McCarty Companies' commitment to excellence in engineering and construction
              </p>
            </motion.div>
          </div>
        </section>

        {/* News Items - Alternating Layout */}
        {newsItems.map((item, index) => (
          <NewsSection key={item.id} item={item} index={index} />
        ))}

        {/* CTA Section */}
        <section className="bg-mccarty-dark text-white py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-mccarty-light mb-8 max-w-2xl mx-auto">
              Experience the McCarty difference — integrated engineering and construction solutions delivered with precision and care
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-mccarty-dark px-8 py-4 rounded-md font-semibold hover:bg-mccarty-light transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function NewsSection({ item, index }: { item: NewsItem; index: number }) {
  const bgColor = index % 2 === 0 ? "bg-white" : "bg-mccarty-light";
  // Set different widths based on article
  let boxWidth = "max-w-xl"; // Default for articles 3 & 4
  if (index === 0) boxWidth = "max-w-2xl"; // Article 1 - wider for shorter height
  if (index === 1) boxWidth = "max-w-2xl"; // Article 2 - wider for shorter height
  
  return (
    <section className={`w-full py-16 px-6 md:px-12 ${bgColor}`}>
      <div className="relative max-w-7xl mx-auto h-[600px] md:h-[600px] overflow-hidden rounded-lg shadow-xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.headline}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Box Overlay - Alternating Left/Right */}
        <div className={`relative z-10 h-full flex items-end md:items-center px-4 py-4 md:px-12 ${
          item.imagePosition === "left" ? "md:justify-end" : "md:justify-start"
        }`}>
        <motion.div
          initial={{ opacity: 0, x: item.imagePosition === "left" ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`bg-[#3d3d3d]/90 backdrop-blur-sm p-5 md:p-10 ${boxWidth} w-full md:w-auto shadow-2xl`}
        >
          <div className="text-white space-y-3 md:space-y-6">
            {/* Small text above */}
            <p className="text-[10px] md:text-sm uppercase tracking-wider text-white/70">
              {item.smallText}
            </p>
            
            {/* Headline */}
            <h3 className="text-lg md:text-3xl font-bold leading-tight">
              {item.headline}
            </h3>
            
            {/* Copy */}
            <p className="text-xs md:text-base leading-relaxed text-white/90">
              {item.copy}
            </p>
            
            {/* Button */}
            {item.link !== "#" && (
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 md:px-8 md:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase text-xs md:text-sm transition-colors duration-200"
              >
                Read the full article →
              </a>
            )}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

