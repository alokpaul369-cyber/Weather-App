import WeatherDisplay from "@/components/WeatherDisplay";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-500 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-100">
            Open-Meteo powered
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
            Know the sky before you step outside.
          </h1>
          <p className="mt-4 max-w-xl text-base text-sky-50 sm:text-lg">
            Search any city and see temperature, local time, update interval,
            humidity, and wind speed in one clean dashboard.
          </p>
          <div className="mt-10">
            <WeatherDisplay />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-sky-950">About SkyCast</h2>
            <p className="mt-4 text-slate-600">
              SkyCast is a lightweight weather website built with Next.js and
              Tailwind CSS. It uses the free Open-Meteo API, so you can check
              current conditions without creating an account or adding an API
              key.
            </p>
            <p className="mt-4 text-slate-600">
              The home page is focused on a fast weather display. The About,
              Services, and Contact pages explain the project, list weather
              benefits, and give you a simple way to get in touch.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["No API key", "Open-Meteo is free to use in the browser."],
              ["Hourly intervals", "See the next 12 forecast hours at a glance."],
              ["City search", "Look up weather for towns around the world."],
              ["Responsive layout", "Works on phones, tablets, and desktops."],
            ].map(([title, copy]) => (
              <article
                key={title}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-sky-100"
              >
                <h3 className="font-semibold text-sky-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
