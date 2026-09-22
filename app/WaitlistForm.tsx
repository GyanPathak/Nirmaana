"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setNote("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "We could not save your email.");
      }

      setNote(result.message);
      setEmail("");
    } catch (error) {
      setNote(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[460px] flex-col overflow-hidden rounded-[3px] border border-rule-dark sm:flex-row"
      >
        <input
          id={id}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@gmail.com"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-[15px] text-on-dark placeholder:text-on-dark-dim outline-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white px-5 py-3.5 text-[15px] font-semibold text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:w-auto"
        >
          {isSubmitting ? "Joining..." : "Join the waitlist"}
        </button>
      </form>
      <p className="mt-3 min-h-[18px] text-[13px] text-on-dark-dim">{note}</p>
    </div>
  );
}
