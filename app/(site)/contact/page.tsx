import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata = { title: "Contact | McCarty Companies" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-32 mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-semibold text-mccarty-dark">Let&apos;s talk</h1>
        <p className="mt-4 text-mccarty-medium max-w-xl">Tell us about your project goals and we&apos;ll respond promptly.</p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="mt-10 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-mccarty-dark" htmlFor="name">Name *</label>
            <input id="name" name="name" required className="w-full rounded-md border border-mccarty-light bg-white px-3 py-2 text-sm focus:border-mccarty-dark focus:ring-1 focus:ring-mccarty-dark outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-mccarty-dark" htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" required className="w-full rounded-md border border-mccarty-light bg-white px-3 py-2 text-sm focus:border-mccarty-dark focus:ring-1 focus:ring-mccarty-dark outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-mccarty-dark" htmlFor="company">Company</label>
            <input id="company" name="company" className="w-full rounded-md border border-mccarty-light bg-white px-3 py-2 text-sm focus:border-mccarty-dark focus:ring-1 focus:ring-mccarty-dark outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-mccarty-dark" htmlFor="message">Message *</label>
            <textarea id="message" name="message" required rows={6} className="w-full rounded-md border border-mccarty-light bg-white px-3 py-2 text-sm focus:border-mccarty-dark focus:ring-1 focus:ring-mccarty-dark outline-none transition-colors" />
          </div>
          <button type="submit" className="rounded-md bg-mccarty-dark text-white px-6 py-3 text-sm font-medium hover:bg-mccarty-medium transition-colors">Send message</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
