"use client";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mpqorjdo");

  if (state.succeeded) {
    return (
      <div className="mt-10 rounded-lg bg-green-50 border border-green-200 p-8 text-center">
        <h2 className="text-2xl font-semibold text-mccarty-dark mb-2">Thank you!</h2>
        <p className="text-mccarty-medium">We&apos;ve received your message and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1 text-mccarty-dark" htmlFor="name">Name *</label>
        <input id="name" name="name" required className="w-full rounded-md border border-mccarty-light bg-white px-3 py-2 text-sm focus:border-mccarty-dark focus:ring-1 focus:ring-mccarty-dark outline-none transition-colors" />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-mccarty-dark" htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required className="w-full rounded-md border border-mccarty-light bg-white px-3 py-2 text-sm focus:border-mccarty-dark focus:ring-1 focus:ring-mccarty-dark outline-none transition-colors" />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-mccarty-dark" htmlFor="company">Company</label>
        <input id="company" name="company" className="w-full rounded-md border border-mccarty-light bg-white px-3 py-2 text-sm focus:border-mccarty-dark focus:ring-1 focus:ring-mccarty-dark outline-none transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-mccarty-dark" htmlFor="message">Message *</label>
        <textarea id="message" name="message" required rows={6} className="w-full rounded-md border border-mccarty-light bg-white px-3 py-2 text-sm focus:border-mccarty-dark focus:ring-1 focus:ring-mccarty-dark outline-none transition-colors" />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-md bg-mccarty-dark text-white px-6 py-3 text-sm font-medium hover:bg-mccarty-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
