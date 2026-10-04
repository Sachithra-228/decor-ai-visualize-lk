import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, MessageSquare, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesignCard } from "@/components/prototype/design-card";
import { MetricCard } from "@/components/prototype/metric-card";
import { SiteHeader } from "@/components/prototype/site-header";
import { SiteFooter } from "@/components/prototype/site-footer";
import { demoDesigns, ownerMetrics } from "@/lib/prototype-data";

export default async function OwnerDashboardPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen">
      <SiteHeader locale={locale} />
      <section className="mx-auto w-full max-w-7xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Business owner prototype</p>
            <h1 className="mt-2 text-4xl font-bold">AI Design Studio</h1>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              A mock workspace for creating customer projects, building briefs, generating designs,
              checking feasibility, sharing approvals, and tracking business performance.
            </p>
            <Button asChild className="mt-6">
              <Link href="/share/demo">
                Open customer share page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
            <Image
              src="/images/design-board.png"
              alt="Design board with handmade decor samples, sketches, color swatches, and AI concept cards"
              width={1536}
              height={1024}
              className="aspect-[16/9] w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ownerMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-lg border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold">Customer brief builder</h2>
                <p className="mt-1 text-sm text-muted-foreground">Structured fields remove the need for prompt-writing skill.</p>
              </div>
              <WandSparkles className="h-8 w-8 text-secondary" />
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Product", "Table runner, 180cm x 35cm"],
                ["Material", "Cotton with handloom texture"],
                ["Palette", "Deep teal, cream, terracotta, gold"],
                ["Pattern", "Traditional geometric border"],
                ["Room style", "Tropical modern dining room"],
                ["Motifs", "Dumbara weave, lotus accent"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border bg-background p-3">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
                  <p className="mt-1 font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-md border bg-background p-4">
              <p className="text-sm font-semibold">Smart prompt</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Create a producible Sri Lankan home decor table runner using cotton fabric, deep teal and cream
                base colors, terracotta and gold accents, Dumbara-inspired geometric border, subtle lotus detail,
                photographed in a tropical modern dining room with natural light.
              </p>
            </div>
          </section>

          <section className="rounded-lg border bg-card p-5 shadow-sm">
            <h2 className="text-2xl font-bold">Order tracking and feasibility</h2>
            <div className="mt-5 grid gap-3">
              {[
                ["Brief", "Completed", true],
                ["Designing", "4 AI variations generated", true],
                ["Sent to customer", "WhatsApp share link ready", true],
                ["Approved", "Waiting for customer", false],
                ["In production", "Not started", false],
                ["Delivered", "Post-feedback pending", false]
              ].map(([stage, note, done]) => (
                <div key={stage as string} className="flex items-center gap-3 rounded-md border bg-background p-3">
                  <CheckCircle2 className={`h-5 w-5 ${done ? "text-primary" : "text-muted-foreground"}`} />
                  <div>
                    <p className="font-medium">{stage}</p>
                    <p className="text-sm text-muted-foreground">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <MetricCard label="Feasibility" value="4/5" note="Materials available" />
              <MetricCard label="Cost" value="Rs. 1,850" note="Estimated production" />
              <MetricCard label="Time" value="5.5h" note="Cut, stitch, finish" />
            </div>
          </section>
        </div>

        <section className="mt-8">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold">Generated design gallery</h2>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4" />
              Mock generation duration: 8.7s
            </div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {demoDesigns.map((design) => (
              <DesignCard key={design.title} {...design} />
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: MessageSquare, title: "Revision round 1", text: "Customer asked for a thinner border and more blue." },
            { icon: CalendarDays, title: "Deadline", text: "Needed before 18 Oct for a housewarming gift." },
            { icon: CheckCircle2, title: "Baseline comparison", text: "Before AI: 4.1 days, 2.8 revisions, 1.4 samples per order." }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border bg-card p-5 shadow-sm">
                <Icon className="h-7 w-7 text-secondary" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            );
          })}
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
