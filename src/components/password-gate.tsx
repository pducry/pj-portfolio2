"use client";

import { useState, useEffect } from "react";
import { useLang } from "./language-provider";
import { translations } from "@/lib/translations";

export function PasswordGate({
  children,
  password = "pjpj",
  storageKey = "pj-auth",
}: {
  children: React.ReactNode;
  password?: string;
  storageKey?: string;
}) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { lang } = useLang();
  const t = translations[lang].common;

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(storageKey) === "true") {
      setAuthed(true);
    }
  }, [storageKey]);

  if (!mounted) return null;
  if (authed) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === password) {
      sessionStorage.setItem(storageKey, "true");
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
          placeholder={t.password}
          className={`w-full border-b bg-transparent pb-2 text-base lg:text-[13px] tracking-widest text-foreground outline-none transition-colors placeholder:text-muted ${
            error ? "border-red-400" : "border-border focus:border-foreground"
          }`}
        />
        <button
          type="submit"
          className="text-base lg:text-[13px] text-muted transition-colors hover:text-foreground"
        >
          {t.enter}
        </button>
      </form>
    </div>
  );
}
