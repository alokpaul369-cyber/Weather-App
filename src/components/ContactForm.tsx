"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input
            name="name"
            required
            className="rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-sky-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-sky-500"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-sky-500"
        />
      </label>
      <button
        type="submit"
        className="mt-5 rounded-full bg-sky-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-800"
      >
        Send message
      </button>
      {sent ? (
        <p className="mt-4 text-sm text-emerald-700">
          Thanks for reaching out. We received your message.
        </p>
      ) : null}
    </form>
  );
}
