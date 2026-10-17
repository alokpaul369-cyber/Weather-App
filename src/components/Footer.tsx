import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-sky-950 text-sky-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">SkyCast</p>
          <p className="mt-2 text-sm text-sky-200">
            Live weather from the free Open-Meteo API. Search any city for
            temperature, time, update interval, humidity, and wind speed.
          </p>
        </div>
        <div>
          <p className="font-medium text-white">Pages</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="font-medium text-white">Data source</p>
          <a
            href="https://open-meteo.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-sky-200 underline-offset-2 hover:text-white hover:underline"
          >
            Open-Meteo Weather API
          </a>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-sky-300">
        © 2026 SkyCast. Built with Next.js and Tailwind CSS.
      </p>
    </footer>
  );
}
