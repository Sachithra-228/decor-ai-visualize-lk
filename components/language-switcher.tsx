"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2 } from "lucide-react";
import { locales } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label="Language" className="flex items-center gap-0.5 rounded-md border bg-card/90 p-1 shadow-sm sm:gap-1">
      <span className="hidden h-8 w-8 items-center justify-center rounded bg-muted text-muted-foreground sm:flex">
        <Globe2 className="h-4 w-4" />
      </span>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${rest ? `/${rest}` : ""}`}
          className={cn(
            "rounded px-2 py-1.5 text-[11px] font-bold transition-colors sm:px-2.5 sm:text-xs",
            locale === currentLocale ? "bg-primary text-primary-foreground" : "hover:bg-muted"
          )}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
