"use client";

import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "./language-provider";
import { CustomCursor } from "./custom-cursor";
import { SmoothScroll } from "./smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SmoothScroll />
        <CustomCursor />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
