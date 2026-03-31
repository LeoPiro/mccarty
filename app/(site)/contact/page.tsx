import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ContactForm } from "./contact-form";

export const metadata = { title: "Contact | McCarty Companies" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-32 mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-semibold text-mccarty-dark">Let&apos;s talk</h1>
        <p className="mt-4 text-mccarty-medium max-w-xl">Tell us about your project goals and we&apos;ll respond promptly.</p>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
