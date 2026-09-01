"use client";

import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "./language-provider";
import { PasswordGate } from "./password-gate";
import { CustomCursor } from "./custom-cursor";
import { SmoothScroll } from "./smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SmoothScroll />
        <CustomCursor />
        <PasswordGate>
          {children}
        </PasswordGate>
      </LanguageProvider>
    </ThemeProvider>
  );
}
