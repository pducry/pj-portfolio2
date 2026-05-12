import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pedro Julien — Creative Director",
  description:
    "Brazilian/Swiss designer and creative director with 18+ years of experience in digital products and branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${instrumentSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
