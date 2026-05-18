"use client";

import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "./language-provider";
import { PasswordGate } from "./password-gate";
import { CustomCursor } from "./custom-cursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PasswordGate>
          <CustomCursor />
          {children}
        </PasswordGate>
      </LanguageProvider>
    </ThemeProvider>
  );
}
