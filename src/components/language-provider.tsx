"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { translations, type Lang } from "@/lib/translations";

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "pt") setLang(stored);
  }, []);

  // Keep the document language, tab title and meta description in sync with the
  // chosen language, so browsers, screen readers and the tab never stay in English on PT.
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    const title = translations[lang].common.siteTitle;
    const description = translations[lang].common.metaDescription;
    const apply = () => {
      if (document.title !== title) document.title = title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta && meta.getAttribute("content") !== description) {
        meta.setAttribute("content", description);
      }
    };
    apply();
    // Next.js re-renders the static metadata title and description after
    // hydration and on navigation, so re-apply the translated values whenever
    // they get replaced.
    const observer = new MutationObserver(apply);
    observer.observe(document.head, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["content"],
    });
    return () => observer.disconnect();
  }, [lang, pathname]);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "pt" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
