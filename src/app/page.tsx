"use client";

import { useState } from "react";
import { DittoLogo } from "@/components/ditto-logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:jyc.onlinebusiness@gmail.com?subject=Ditto Waitlist&body=Please add me to the Ditto waitlist. My email: ${encodeURIComponent(email)}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-xl border-b border-stone">
        <div className="max-w-5xl mx-auto h-14 flex items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8"
              style={{ animation: "mimi-bounce 4s ease-in-out infinite" }}
            >
              <DittoLogo />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight">
              Ditto
            </span>
          </div>
          <a
            href="https://github.com/JayceBatallones/ditto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-light hover:text-ink transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, var(--color-stone) 120%)",
          }}
        />

        <div
          className="relative max-w-2xl mx-auto text-center"
          style={{ animation: "slideUp 0.5s ease-out" }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Record once,
            <br />
            <span className="italic text-ink-light">automate forever.</span>
          </h1>

          <p className="mt-6 text-lg text-ink-light max-w-lg mx-auto leading-relaxed">
            Teach Ditto your workflow by recording your screen. It watches, learns,
            and replays — no code needed.
          </p>

          {/* Waitlist form */}
          <div className="mt-10">
            {submitted ? (
              <div
                className="hand-drawn-border bg-card px-8 py-6 max-w-md mx-auto"
                style={{ animation: "fadeIn 0.3s ease-out" }}
              >
                <div className="flex items-center justify-center gap-2 text-accent-sage font-medium">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  You&apos;re on the list!
                </div>
                <p className="mt-2 text-sm text-ink-light">
                  We&apos;ll let you know when Ditto is ready.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="hand-drawn-border bg-card px-6 py-5 max-w-md mx-auto"
              >
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-medium text-ink-light mb-2"
                >
                  Join the waitlist
                </label>
                <div className="flex gap-3">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg border-2 border-stone bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-light/50 outline-none focus:border-accent-sand transition-colors"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:bg-ink/90 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Social proof hint */}
          <p
            className="mt-6 text-xs text-ink-light/60"
            style={{ animation: "fadeIn 0.8s ease-out" }}
          >
            Built at Mistral Hackathon &apos;26 — launching soon.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone py-6 text-center text-xs text-ink-light/60">
        &copy; 2026 Ditto. Record once, automate forever.
      </footer>
    </div>
  );
}
