"use client";

import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "./language-provider";
import { PasswordGate } from "./password-gate";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PasswordGate>
          {children}
        </PasswordGate>
      </LanguageProvider>
    </ThemeProvider>
  );
}
