"use client";

import { useState, useEffect } from "react";

const PASS = "pjpj";
const STORAGE_KEY = "pj-auth";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthed(true);
    }
  }, []);

  if (!mounted) return null;
  if (authed) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 lg:gap-4 w-64 lg:w-44">
        <p className="text-base lg:text-[13px] font-medium text-foreground">Pedro Julien</p>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          autoFocus
          className={`w-full border-b bg-transparent pb-2 text-base lg:text-[13px] tracking-widest text-foreground outline-none transition-colors placeholder:text-muted ${
            error ? "border-red-400" : "border-border focus:border-foreground"
          }`}
        />
        <button
          type="submit"
          className="text-base lg:text-[13px] text-muted transition-colors hover:text-foreground"
        >
          Enter →
        </button>
      </form>
    </div>
  );
}
