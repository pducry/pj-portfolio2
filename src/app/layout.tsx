import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import { translations } from "@/lib/translations";
import "./globals.css";

const instrumentSans = localFont({
  src: "./fonts/instrument-sans-latin.woff2",
  variable: "--font-instrument-sans",
  weight: "400 700",
  style: "normal",
});


export const metadata: Metadata = {
  title: "Pedro Julien Creative Director",
  description: translations.en.common.metaDescription,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
