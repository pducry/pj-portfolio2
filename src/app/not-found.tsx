"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export default function NotFound() {
  const router = useRouter();
  const { lang } = useLang();

  useEffect(() => {
    router.replace("/works");
  }, [router]);

  return (
    <div className="flex min-h-svh items-center justify-center bg-background">
      <p className="text-sm text-muted animate-fade-in">{translations[lang].common.redirecting}</p>
    </div>
  );
}
