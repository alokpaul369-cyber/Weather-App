"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  fetchWeather,
  formatPlace,
  searchPlaces,
  weatherDescription,
  type GeoResult,
  type WeatherResponse,
} from "@/lib/weather";

const defaultCity: GeoResult = {
  id: 0,
  name: "Dhaka",
  latitude: 23.8103,
  longitude: 90.4125,
  country: "Bangladesh",
};

function formatTime(value: string) {
  return new Date(value).toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatHour(value: string) {
  return new Date(value).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function WeatherDisplay() {
  const [query, setQuery] = useState("Dhaka");
  const [place, setPlace] = useState<GeoResult>(defaultCity);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [suggestions, setSuggestions] = useState<GeoResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadWeather(nextPlace: GeoResult) {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeather(nextPlace.latitude, nextPlace.longitude);
      setPlace(nextPlace);
      setWeather(data);
    } catch {
      setError("Weather data is unavailable right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadWeather(defaultCity);
  }, []);

  async function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!query.trim()) return;

    setError("");
    try {
      const results = await searchPlaces(query.trim());
      setSuggestions(results);
      if (results[0]) {
        await loadWeather(results[0]);
      } else {
        setError("No matching city was found. Try another name.");
      }
    } catch {
      setError("Could not search that location.");
    }
  }

  const current = weather?.current;

  return (
    <section className="rounded-3xl bg-white/10 p-5 text-white shadow-xl ring-1 ring-white/20 backdrop-blur sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-sky-100">
            Live weather
          </p>
          <h2 className="mt-1 text-3xl font-semibold sm:text-4xl">
            Weather Display
          </h2>
        </div>
        <form onSubmit={onSearch} className="flex w-full max-w-md gap-2">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a city"
            className="w-full rounded-full border border-white/20 bg-white/15 px-4 py-2.5 text-sm text-white outline-none placeholder:text-sky-100 focus:border-white"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 hover:bg-sky-100"
          >
            Search
          </button>
        </form>
      </div>

      {suggestions.length > 1 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setQuery(item.name);
                void loadWeather(item);
              }}
              className="rounded-full bg-sky-950/40 px-3 py-1 text-xs hover:bg-sky-950/70"
            >
              {formatPlace(item)}
            </button>
          ))}
        </div>
      ) : null}

      {error ? (
        <p className="mt-4 rounded-xl bg-rose-500/20 px-4 py-3 text-sm text-rose-50">
          {error}
        </p>
      ) : null}

      {loading ? (
        <p className="mt-8 text-sky-100">Loading weather...</p>
      ) : weather && current ? (
        <>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sky-100">{formatPlace(place)}</p>
              <p className="mt-2 text-6xl font-semibold sm:text-7xl">
                {Math.round(current.temperature_2m)}
                {weather.current_units.temperature_2m}
              </p>
              <p className="mt-2 text-lg text-sky-50">
                {weatherDescription(current.weather_code)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Stat
                label="Temperature"
                value={`${current.temperature_2m}${weather.current_units.temperature_2m}`}
              />
              <Stat label="Time" value={formatTime(current.time)} />
              <Stat
                label="Interval"
                value={
                  current.interval % 60 === 0
                    ? `${current.interval / 60} min`
                    : `${current.interval} ${weather.current_units.interval}`
                }
              />
              <Stat
                label="Humidity"
                value={`${current.relative_humidity_2m}${weather.current_units.relative_humidity_2m}`}
              />
              <Stat
                label="Wind speed"
                value={`${current.wind_speed_10m} ${weather.current_units.wind_speed_10m}`}
                className="col-span-2"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium">Next 12 hourly intervals</h3>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {weather.hourly.time.map((time, index) => (
                <div
                  key={time}
                  className="min-w-[7.5rem] rounded-2xl bg-sky-950/35 p-3 text-center"
                >
                  <p className="text-xs text-sky-100">{formatHour(time)}</p>
                  <p className="mt-2 text-xl font-semibold">
                    {Math.round(weather.hourly.temperature_2m[index])}°
                  </p>
                  <p className="mt-1 text-xs text-sky-100">
                    {weather.hourly.relative_humidity_2m[index]}% humidity
                  </p>
                  <p className="text-xs text-sky-100">
                    {weather.hourly.wind_speed_10m[index]} km/h
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
}

function Stat({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-sky-950/35 p-4 ${className}`}>
      <p className="text-xs uppercase tracking-wide text-sky-200">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}
