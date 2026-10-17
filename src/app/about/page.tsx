export default function AboutPage() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
          About
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-sky-950">
          A simple weather website for everyday decisions
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          SkyCast helps you check the weather quickly. Search a city, then read
          the current temperature, local observation time, how often the data
          refreshes (interval), humidity, and wind speed.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The site is built with Next.js for routing and React components, and
          Tailwind CSS for a responsive layout. Weather data comes from
          Open-Meteo, a free weather API that does not require an API key.
        </p>
        <div className="mt-10 rounded-3xl bg-sky-50 p-6 ring-1 ring-sky-100">
          <h2 className="text-xl font-semibold text-sky-900">What you can do</h2>
          <ul className="mt-4 grid gap-3 text-slate-700">
            <li>Look up live conditions for cities worldwide.</li>
            <li>Review the next 12 hourly forecast intervals.</li>
            <li>Move between Home, About, Services, and Contact in the header.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
