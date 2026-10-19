"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Lock } from "lucide-react";

const input =
  "block h-11 w-full rounded-xl border border-line bg-white px-4 text-[0.9375rem] text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] outline-none hover:border-ink-400/50 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}{" "}
        <span className="text-red-500" aria-hidden>
          *
        </span>
      </label>
      {children}
    </div>
  );
}

export function LeadForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hook up to the CRM / email API route here (e.g. POST /api/lead).
    setSent(true);
  }

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-raised sm:p-7">
      {sent ? (
        <div role="status" className="flex min-h-[24rem] flex-col items-center justify-center text-center">
          <CheckCircle2 className="mb-4 size-12 text-leaf-500" aria-hidden />
          <h2 className="text-h3">Thanks, we’ve got your details</h2>
          <p className="mt-2 max-w-xs text-[0.9375rem]">
            Our team will review your website and get back to you within one business day.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold leading-tight tracking-tight">Get your free SEO strategy</h2>
          <p className="mt-1.5 text-sm leading-relaxed">
            Tell us about your goals and we’ll show you where your organic growth can improve.
          </p>

          <form onSubmit={onSubmit} className="mt-5 space-y-3.5">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field id="first" label="First name">
                <input id="first" name="firstName" autoComplete="given-name" required className={input} />
              </Field>
              <Field id="last" label="Last name">
                <input id="last" name="lastName" autoComplete="family-name" required className={input} />
              </Field>
            </div>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field id="email" label="Work email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className={input}
                />
              </Field>
              <Field id="url" label="Website / URL">
                <input id="url" name="website" type="url" inputMode="url" required placeholder="https://" className={input} />
              </Field>
            </div>
            <Field id="help" label="How can we help?">
              <textarea
                id="help"
                name="message"
                rows={2}
                required
                placeholder="E.g. more organic leads, AI visibility, link building…"
                className={`${input} h-auto resize-none py-3 leading-relaxed`}
              />
            </Field>
            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-brand-600 text-base font-semibold text-white transition-colors hover:bg-brand-700 active:translate-y-px"
            >
              Send my request
            </button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-ink-500">
              <Lock className="size-3.5" aria-hidden /> No spam. We reply within one business day.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
