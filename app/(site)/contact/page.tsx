export const metadata = { title: "Contact | McCarty Companies" };

export default function ContactPage() {
  return (
    <main className="pt-28 pb-32 mx-auto max-w-3xl px-6">
      <h1 className="text-4xl font-semibold">Let’s talk</h1>
      <p className="mt-4 text-neutral-600 max-w-xl">Tell us about your project goals and we’ll respond promptly.</p>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="mt-10 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name *</label>
          <input id="name" name="name" required className="w-full rounded-md border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required className="w-full rounded-md border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="company">Company</label>
          <input id="company" name="company" className="w-full rounded-md border px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message *</label>
          <textarea id="message" name="message" required rows={6} className="w-full rounded-md border px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded-md bg-neutral-900 text-white px-6 py-3 text-sm font-medium">Send Message</button>
      </form>
      <div className="mt-16 border-t pt-8 text-sm">
        <p className="font-medium">McCarty Companies</p>
        <p className="mt-2 text-neutral-600">100 Main St, Boston, MA<br/> info@mccarty.example<br/> (555) 123‑4567</p>
      </div>
    </main>
  );
}
