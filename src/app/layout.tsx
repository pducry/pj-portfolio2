import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { EntranceProvider } from "@/components/entrance-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { PasswordGate } from "@/components/password-gate";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pedro Julien — Creative Director",
  description:
    "Creative Director fueld by AI, crafting tools that make the world bigger, clearer, and more connected.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${instrumentSans.className} antialiased`}>
        <ThemeProvider>
          <EntranceProvider>
            <CustomCursor />
            <PasswordGate>
              {children}
            </PasswordGate>
          </EntranceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
