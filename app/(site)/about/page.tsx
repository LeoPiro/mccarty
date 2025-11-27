"use client";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Patrick McCarty, P.E.",
    title: "President/Owner",
    image: "/media/Headshots/Patrick_McCarty.jpg",
    bio: "Patrick McCarty is the President of McCarty Companies and has been with the company for close to two decades. As a teen, Patrick learned the tricks of the trade as a laborer for his father's construction management company. He then went on to get his B.S. in civil engineering from the University of New Hampshire and became a Registered Professional Engineer in the Commonwealth of Massachusetts shortly thereafter. Patrick officially joined his father's firm full-time in 2004 and also founded McCarty Engineering, Inc. the civil engineering design and permitting division. In 2013, Patrick was one of the recipients of the Worcester Business Journal's \"40 Under 40\" awards.\n\nHe and his wife Jessica live with their two daughters in Leominster, where he regularly volunteers his time to Habitat For Humanity, the Leominster Education Foundation, the North Central MA Chamber of Commerce, the North Central MA Land Bank, and Detect Together, a non-profit focused on early cancer detection.",
    division: "Leadership"
  },
  {
    id: 2,
    name: "Brian Marchetti, P.E.",
    title: "Vice President, Engineering",
    image: "/media/Headshots/Brian_Marchetti.jpg",
    bio: "Brian Marchetti is the Vice President of Engineering at McCarty Engineering, Inc., bringing over 25 years of experience in civil engineering, water resources, and land development. A Registered Professional Engineer in Massachusetts, Brian oversees engineering operations, project management, and client relations, guiding a wide range of municipal and private sector projects from concept through permitting and construction.\n\nBrian earned both his B.S. in Civil Engineering and M.S. in Water Resources and Environmental Engineering from Villanova University. His career has included federal projects with the Bureau of Prisons and Department of Defense, as well as municipal work, residential and commercial developments, and infrastructure design for water, wastewater, and stormwater systems. He is also a certified Soil Evaluator in Massachusetts.\n\nBrian's journey in the field began early, working as a teenager for Patrick McCarty's father's construction management company. \"He inspired us to appreciate the design side of construction,\" Brian recalls. \"He encouraged us to earn our degrees so we could build with a pen and paper instead of a shovel.\"\n\nBrian lives in Leominster with his wife, Jessica, and their four children. When he's not managing projects, he enjoys time with family and being active in the local community.",
    division: "Engineering"
  },
  {
    id: 3,
    name: "Lawrence \"Lar\" Greene, Jr., R.L.A.",
    title: "Landscape Architect",
    image: "/media/Headshots/Lawrence_Greene.jpg",
    bio: "Lawrence \"Lar\" Greene is McCarty Engineering's Landscape Architect, bringing over 28 years of experience in landscape architecture, civil engineering, and land development. At McCarty, Lar focuses on design and permitting, landscaping and lighting plans, and soil evaluation. His deep knowledge of land planning, state and local permitting, and site aesthetics allows him to create thoughtful, functional designs that align with both client goals and regulatory standards.\n\nLar's passion for the field started early - growing up on a Christmas tree farm, where he and his family planted nearly 2,000 trees each year. That hands-on connection to the land led him to pursue a B.S. in Landscape Architecture from Utah State University and later become a Registered Landscape Architect and Certified Soil Evaluator in Massachusetts. He lives in Princeton with his wife and four sons and is active in the community, serving on both the Princeton Board of Health and Board of Appeals.",
    division: "Engineering"
  },
  {
    id: 4,
    name: "Wesley \"Wes\" Flis, P.E.",
    title: "Professional Engineer",
    image: "/media/Headshots/Wesley_Flis.jpg",
    bio: "Wesley Flis brings over 27 years of experience in civil engineering and land development to his role as Engineering Project Manager at McCarty Engineering, Inc. Throughout his career, he has successfully led a wide range of projects—from residential subdivisions and commercial developments to stormwater management systems, solar arrays, and athletic facilities. Wesley has extensive experience with municipal peer reviews, construction inspections, and utility designs, including water and wastewater systems.\n\nA proud graduate of Merrimack College with a B.S. in Civil Engineering, Wesley is a licensed Professional Engineer in the Commonwealth of Massachusetts. Prior to joining McCarty Engineering in 2024, he held senior engineering roles at Haley Ward, Inc. and Whitman & Bingham Associates, where he built a reputation for thoughtful design, thorough review processes, and practical solutions tailored to each client's needs.\n\nKnown among colleagues and clients for his calm, collaborative approach and deep technical knowledge, Wesley enjoys seeing a project go from concept to completion—and takes pride in helping communities grow smarter and stronger through quality engineering. Outside of work, Wesley enjoys spending time outdoors, tackling home improvement projects, and staying active with family and friends.",
    division: "Engineering"
  },
  {
    id: 5,
    name: "Justin LeClair, E.I.T.",
    title: "Project Engineer",
    image: "/media/Headshots/Justin_LeClair.jpg",
    bio: "Justin LeClair is a Project Engineer at McCarty. Day-to-day tasks involve full site design and permitting projects from single family lots to full scale commercial developments. \"Growing up, I always liked to build and create things\" he notes. \"As I got older, that interest turned towards design and construction. This led me to pursue a B.S. in Civil Engineering at the University of Maine.\"\n\nJustin joined the company after completing his degree in 2016 and quickly became a certified soil evaluator by the New England Interstate Water Commission. Justin has been at McCarty since graduating in 2016, is Presby-certified in Advanced Enviro-septic Design & Installation and is currently pursuing his Professional Engineering License. He and his wife Jessica currently live in Gardner with their son and two dogs. If he is not in the office working or at home with his family, you can find him on the golf course or on an ice rink playing hockey.",
    division: "Engineering"
  },
  {
    id: 6,
    name: "John Plifka",
    title: "Project Engineer",
    image: "/media/Headshots/John_Plifka.jpg",
    bio: "John Plifka is a Project Engineer at McCarty Engineering, Inc., with four years of experience in civil engineering and land development. A graduate of the University of New Hampshire with a B.S. in Civil Engineering, John has contributed as both a lead and supporting proponent in the design and permitting of projects across the Commonwealth. His project experience includes residential subdivisions, commercial and industrial developments, and infrastructure design for stormwater and wastewater systems.\n\nIn addition to his design expertise, John brings strong hands-on skills, including construction inspections, GPS-based construction layout and as-builts, and the preparation of construction specifications and bid packages. He is also certified as a Site Inspector under the EPA's Construction General Permit program and routinely visits job sites following storm events. Known for his reliability, attention to detail, and collaborative nature, John is equally valued for his personable approach and ability to build strong relationships with clients, colleagues, and project partners—helping ensure projects move smoothly from conceptual development through construction.\n\nOutside of work, John enjoys summers on the Cape with his girlfriend Cait, family, and friends— often on the water or at the beach. Over the winter, you'll find him skiing the slopes of New England. Most recently, he's taken up pickleball.",
    division: "Engineering"
  },
  {
    id: 7,
    name: "Michael Langelier",
    title: "Project Superintendent/Estimator",
    image: "/media/Headshots/Michael_Langelier.jpg",
    bio: "Michael Langelier is a Project Superintendent and Estimator at McCarty Associates. After spending more than 20 years in the excavation field, he began working as an equipment operator and foreman at the company in 2013 and quickly became their go-to \"whatever we have to do to get it done\" guy. During this time, he developed an interest in construction planning and project execution, which led him to pursue his current role in commercial building.\n\nMichael specializes in client satisfaction and maintaining client relationships throughout the construction process. He also completes estimates for the site work division of the company and operates the GPS unit for performing construction layout and as-built surveys. \"If there's one thing that I love most about the field, it's that it's always moving,\" Michael notes.",
    division: "Construction"
  },
  {
    id: 8,
    name: "Jami Anderson",
    title: "Project Manager",
    image: "/media/Headshots/Jami_Anderson.jpg",
    bio: "Jami Anderson is a Project Manager at McCarty Associates. He is a 2003 graduate of Fitchburg State University where he obtained his bachelor's degree in Construction Technology. Prior to joining McCarty Associates in 2025, he held Project Management roles for J.M. Coull Inc. and Green Leaf Construction. He has helped design and construct and/or renovate buildings in every New England state, New York, and New Jersey.\n\nJami was fascinated by his grandfather's and dad's tractors and equipment from an early age, so the construction industry was a perfect fit. He and his wife Ashley live in Lunenburg with their five children. In his free time, Jami enjoys watching his children play sports and being outdoors, fishing, hiking, and skiing. Jami has his MA Unrestricted Construction Supervisor's license.",
    division: "Construction"
  },
  {
    id: 9,
    name: "Jessica McCarty",
    title: "Treasurer",
    image: "https://ui-avatars.com/api/?name=Jessica+McCarty&size=400&background=2c2c2c&color=fff",
    bio: "Jessica McCarty serves as Treasurer of McCarty Companies, overseeing financial operations and strategic planning. Her dedication to excellence and attention to detail ensure the company's continued growth and success.",
    division: "Leadership"
  },
  {
    id: 10,
    name: "Shaughn Smith",
    title: "Office Administrator",
    image: "/media/Headshots/Shaughn_Smith.jpg",
    bio: "Shaughn Smith joined McCarty Companies in July of 2025, serving as the primary office administrator, supporting both sides of the business, construction and engineering. In this role he oversees the daily administrative and accounting operations of the office, ensuring smooth communication, organized workflows, and efficient business processes.\n\nA graduate of UMASS Boston with a B.S. in Biology and a minor in Art History, Shaughn brings a diverse professional background to his role. He has served in municipal administration for the City of Leominster and spent several years managing a local small business from its start, and helped it grow significantly through operational leadership, community engagement, and exceptional customer service.\n\nOutside of work, Shaughn enjoys traveling and spending time with his partner, Chris, and their Rhodesian Ridgeback, Charli. Equally important are moments shared with family and friends, whether it's relaxing by the pool or cooking up something delicious in the kitchen.",
    division: "Administration"
  },
  {
    id: 11,
    name: "Neil MacLeod",
    title: "Site Foreman",
    image: "/media/Headshots/Neil_MacLeod.jpg",
    bio: "Neil MacLeod serves as Site Foreman at McCarty Associates, bringing expertise in field operations and crew management to ensure projects are executed safely and efficiently.",
    division: "Construction"
  },
  {
    id: 12,
    name: "Thomas Carlisle II",
    title: "Operator",
    image: "/media/Headshots/Thomas_Carlisle_II.jpg",
    bio: "Thomas Carlisle II is an experienced Operator at McCarty Associates, providing skilled equipment operation for site development and construction projects.",
    division: "Construction"
  },
  {
    id: 13,
    name: "Pelino Masciangioli",
    title: "Superintendent",
    image: "/media/Headshots/Pelino_Masciangioli.jpg",
    bio: "Pelino Masciangioli serves as Superintendent at McCarty Associates, overseeing field operations and ensuring quality control on construction sites.",
    division: "Construction"
  },
  {
    id: 14,
    name: "Brennan Mulligan",
    title: "Laborer",
    image: "/media/Headshots/Brennan_Mulligan.jpg",
    bio: "Brennan Mulligan is a dedicated Laborer at McCarty Associates, contributing to the success of construction and site development projects.",
    division: "Construction"
  },
  {
    id: 15,
    name: "Mark Whitcomb",
    title: "Site Foreman",
    image: "/media/Headshots/Mark_Whitcomb.jpg",
    bio: "Mark Whitcomb serves as Site Foreman at McCarty Associates, bringing expertise in field operations and crew management to ensure projects are executed safely and efficiently.",
    division: "Construction"
  },
  {
    id: 16,
    name: "Wayne Robinson",
    title: "Operator",
    image: "/media/Headshots/Wayne_Robinson.jpg",
    bio: "Wayne Robinson is an experienced Operator at McCarty Associates, providing skilled equipment operation for site development and construction projects.",
    division: "Construction"
  },
  {
    id: 17,
    name: "Joseph Senckowski",
    title: "Laborer",
    image: "/media/Headshots/Joseph_Senckowski.jpg",
    bio: "Joseph Senckowski is a dedicated Laborer at McCarty Associates, contributing to the success of construction and site development projects.",
    division: "Construction"
  },
  {
    id: 18,
    name: "John Lattanzio",
    title: "CDL Driver",
    image: "/media/Headshots/John_Lattanzio.jpg",
    bio: "John Lattanzio serves as CDL Driver at McCarty Associates, providing essential transportation and logistics support for construction operations.",
    division: "Construction"
  },
  {
    id: 19,
    name: "Thomas Pollack",
    title: "Operator",
    image: "/media/Headshots/Thomas_Pollack.jpg",
    bio: "Thomas Pollack is an experienced Operator at McCarty Associates, providing skilled equipment operation for site development and construction projects.",
    division: "Construction"
  },
  {
    id: 20,
    name: "Rigoberto Salinas",
    title: "Operator",
    image: "/media/Headshots/Rigoberto_Salinas.jpg",
    bio: "Rigoberto Salinas is an experienced Operator at McCarty Associates, providing skilled equipment operation for site development and construction projects.",
    division: "Construction"
  },
  {
    id: 21,
    name: "William Soar III",
    title: "Operator",
    image: "/media/Headshots/William_Soar_III.jpg",
    bio: "William Soar III is an experienced Operator at McCarty Associates, providing skilled equipment operation for site development and construction projects.",
    division: "Construction"
  },
  {
    id: 22,
    name: "Robert D'Onfro",
    title: "Site Foreman",
    image: "/media/Headshots/Robert_D'Onfro.jpg",
    bio: "Robert D'Onfro serves as Site Foreman at McCarty Associates, bringing expertise in field operations and crew management to ensure projects are executed safely and efficiently.",
    division: "Construction"
  }
];

const filters = ["All", "Leadership", "Engineering", "Construction", "Administration"];

export default function MeetTheTeamPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filteredMembers = selectedFilter === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.division === selectedFilter);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow down by 20%
    }
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-mccarty-dark text-white overflow-hidden">
          {/* Background Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/media/McCarty_team.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Meet our <span className="text-mccarty-light">team</span>
            </h1>
            <p className="text-xl md:text-2xl text-mccarty-light max-w-4xl mx-auto leading-relaxed">
              The people behind McCarty Companies - dedicated professionals committed to excellence
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-white border-b border-mccarty-light sticky top-20 z-30">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? "bg-mccarty-dark text-white"
                      : "bg-mccarty-light text-mccarty-dark hover:bg-mccarty-medium hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
                </div>
              </div>
        </section>

        {/* Team Grid */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => {
              // Check if bio is just a short default bio (less than 200 characters)
              const hasDetailedBio = member.bio.length > 200;
              
              return (
                <div
                  key={member.id}
                  onClick={() => hasDetailedBio && setSelectedMember(member)}
                  className={`group bg-white rounded-xl overflow-hidden border border-mccarty-light shadow-sm transition-all duration-300 ${
                    hasDetailedBio ? 'cursor-pointer hover:shadow-lg' : 'cursor-default'
                  }`}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        hasDetailedBio ? 'group-hover:scale-105' : ''
                      }`}
                    />
                    {hasDetailedBio && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mccarty-dark mb-1">{member.name}</h3>
                    <p className="text-sm text-mccarty-medium">{member.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="bg-gradient-to-r from-mccarty-dark to-[#3a3a3a] rounded-3xl text-white p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join our team</h2>
            <p className="text-xl text-mccarty-light mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented professionals to join the McCarty Companies family
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-mccarty-dark px-8 py-4 rounded-xl font-semibold hover:bg-mccarty-light transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Modal for Full Bio */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
            <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-96 md:h-full">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-mccarty-dark text-white rounded-full flex items-center justify-center hover:bg-mccarty-medium transition-colors"
                    >
                      ✕
                    </button>
                    <h2 className="text-3xl font-bold text-mccarty-dark mb-2">{selectedMember.name}</h2>
                    <p className="text-lg text-mccarty-medium mb-6">{selectedMember.title}</p>
                    <div className="prose prose-sm max-w-none">
                      {selectedMember.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-mccarty-medium leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
