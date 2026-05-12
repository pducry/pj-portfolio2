"use client";

import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "./language-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
