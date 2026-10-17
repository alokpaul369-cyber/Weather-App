import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-sky-950">
            Send us a message
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Questions about SkyCast, feature ideas, or weather data? Use this
            form and we will get back to you.
          </p>
          <div className="mt-8 space-y-2 text-slate-600">
            <p>Email: hello@skycast.local</p>
            <p>Hours: Everyday, 9:00 AM – 6:00 PM</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
