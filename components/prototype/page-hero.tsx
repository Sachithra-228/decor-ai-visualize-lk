import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/prototype/site-header";
import { SiteFooter } from "@/components/prototype/site-footer";

export function PageShell({
  locale,
  children
}: {
  locale: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter />
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden border-b">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/50" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      <div className="relative mx-auto grid min-h-[48vh] w-full max-w-7xl gap-8 px-4 py-12 sm:min-h-[54vh] sm:py-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary sm:text-sm sm:tracking-[0.24em]">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{text}</p>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
