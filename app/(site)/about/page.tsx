import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Section } from "../components/section";
import { HardHat, Building2, Users2, Award, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-blue-400">McCarty</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Family-owned and operated since 1982, delivering excellence from concept to completion
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <Section title="Our Story" subtitle="Four decades of building excellence">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Established 1982</h3>
                  <p className="text-neutral-600">Construction management and consulting firm</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <HardHat className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Full-Service Capability</h3>
                  <p className="text-neutral-600">From concept to completed building</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users2 className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Referral-Based Business</h3>
                  <p className="text-neutral-600">100% client satisfaction and trust</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">What We Do</h3>
              <ul className="space-y-4 text-neutral-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Permitting and approvals for commercial development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Site design, permitting, funding, and project management for both traditional and Ch 40B affordable housing residential development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Construction management for financial oversight of projects for state and local lenders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Project management for commercial developments</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Engineering Division */}
        <Section title="Engineering Excellence" subtitle="Established 2004 - Specialized expertise in civil engineering">
          <div className="bg-gradient-to-r from-neutral-50 to-blue-50 p-12 rounded-3xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                Civil Engineering Design & Permitting
              </h3>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Our civil engineering division specializes in representing owner/client interests in the design of land and improvements required to accommodate the owner's building program. We bring over two decades of specialized expertise to every project.
              </p>
            </div>
          </div>
        </Section>

        {/* Leadership */}
        <Section title="Leadership" subtitle="Meet our President and Founder">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Users2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold">Patrick J. McCarty</h3>
                  <p className="text-xl text-blue-100">President of McCarty Companies</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-yellow-300" />
                      <span className="text-sm">Worcester Business Journal's 2013 40 Under 40 Awards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-5 w-5" />
                      <span className="text-sm">BS in Civil Engineering, University of New Hampshire</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HardHat className="h-5 w-5" />
                      <span className="text-sm">Registered Professional Engineer (License #46065)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 bg-gradient-to-br from-neutral-50 to-blue-50">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-neutral-900">Professional Credentials</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h5 className="font-semibold text-neutral-900">Education</h5>
                      <p className="text-neutral-600">University of New Hampshire - Civil Engineering</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h5 className="font-semibold text-neutral-900">Licensing</h5>
                      <p className="text-neutral-600">Massachusetts Professional Engineer License #46065</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h5 className="font-semibold text-neutral-900">Recognition</h5>
                      <p className="text-neutral-600">2013 40 Under 40 Award Winner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact CTA */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how McCarty Companies can bring your vision to life with our comprehensive construction and engineering services.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-3">
                <Phone className="h-8 w-8 text-blue-200" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-blue-100">978-534-8727</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Mail className="h-8 w-8 text-blue-200" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-blue-100">contact@mccartydb.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <MapPin className="h-8 w-8 text-blue-200" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-100">42 Tucker Drive, Leominster, MA</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </Link>
              <Link href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
