import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Microscope } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/prototype-data";

export function SiteHeader({ locale }: { locale: string }) {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4">
        <Link href={`/${locale}`} className="flex items-center">
          <span className="relative block h-12 w-44 overflow-hidden sm:w-56">
            <Image
              src="/images/sachini-ashnika-logo.png"
              alt="Sachini Ashnika"
              fill
              sizes="224px"
              className="object-contain object-left"
              priority
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden bg-card/70 md:inline-flex">
            <Link href={`/${locale}/researcher`}>
              <Microscope className="h-4 w-4" />
              Researcher
            </Link>
          </Button>
          <Button asChild size="sm" className="shadow-sm">
            <Link href={`/${locale}/owner`}>
              <LayoutDashboard className="h-4 w-4" />
              Demo
            </Link>
          </Button>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </header>
  );
}
