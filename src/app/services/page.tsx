const services = [
  {
    title: "Live temperature",
    detail:
      "See current air temperature in Celsius so you can dress for the day without guessing.",
  },
  {
    title: "Local observation time",
    detail:
      "Every reading includes the time it was measured, so you know how recent the data is.",
  },
  {
    title: "Update interval",
    detail:
      "Open-Meteo tells you the forecast interval, making it clear how frequently conditions refresh.",
  },
  {
    title: "Humidity tracking",
    detail:
      "Relative humidity helps you plan for sticky afternoons, dry indoor air, or rain-friendly outings.",
  },
  {
    title: "Wind speed",
    detail:
      "Check wind at 10 meters to decide if cycling, walking, or outdoor events will feel comfortable.",
  },
  {
    title: "Hourly forecast strip",
    detail:
      "The next 12 hours are listed as intervals so you can see how temperature, humidity, and wind change.",
  },
];

export default function ServicesPage() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
          Services
        </p>
        <h1 className="mt-2 max-w-2xl text-4xl font-semibold text-sky-950">
          Weather benefits built into SkyCast
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          These features help you plan travel, work, and outdoor time using
          free Open-Meteo weather data.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sky-100"
            >
              <h2 className="text-xl font-semibold text-sky-900">
                {service.title}
              </h2>
              <p className="mt-3 text-slate-600">{service.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
