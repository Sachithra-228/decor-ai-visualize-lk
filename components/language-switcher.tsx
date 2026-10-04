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
    <nav aria-label="Language" className="flex items-center gap-1 rounded-md border bg-card/90 p-1 shadow-sm">
      <span className="flex h-8 w-8 items-center justify-center rounded bg-muted text-muted-foreground">
        <Globe2 className="h-4 w-4" />
      </span>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${rest ? `/${rest}` : ""}`}
          className={cn(
            "rounded px-2.5 py-1.5 text-xs font-bold transition-colors",
            locale === currentLocale ? "bg-primary text-primary-foreground" : "hover:bg-muted"
          )}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
