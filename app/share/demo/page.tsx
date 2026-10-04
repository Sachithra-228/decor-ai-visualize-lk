import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesignCard } from "@/components/prototype/design-card";
import { SiteFooter } from "@/components/prototype/site-footer";
import { demoDesigns } from "@/lib/prototype-data";

export default function DemoSharePage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-4">
          <div>
            <p className="text-sm font-semibold text-secondary">Customer approval link</p>
            <h1 className="font-bold">Custom table runner designs</h1>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/en/owner">Back to owner demo</Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="grid overflow-hidden rounded-lg border bg-card shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-6">
            <h2 className="text-3xl font-bold">Choose the design that best matches your idea</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              This mobile-friendly page demonstrates what a customer receives through WhatsApp. No customer account is needed.
            </p>
          </div>
          <Image
            src="/images/design-board.png"
            alt="Design options and home decor samples"
            width={1536}
            height={1024}
            className="h-full min-h-64 w-full object-cover"
            priority
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {demoDesigns.map((design, index) => (
            <div key={design.title} className={index === 0 ? "rounded-lg ring-2 ring-primary" : ""}>
              <DesignCard {...design} />
            </div>
          ))}
        </div>

        <section className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-lg border bg-card p-5 shadow-sm">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-bold">Selected design</h2>
            <p className="mt-2 text-muted-foreground">Dumbara teal table runner</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Matches what I imagined", "5 / 5"],
                ["Likely to order", "5 / 5"],
                ["Approval", "Approved with small change"],
                ["Requested change", "Make the border slightly thinner and add more blue"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border bg-background p-3">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="mt-1 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border bg-card p-5 shadow-sm">
            <MessageCircle className="h-8 w-8 text-secondary" />
            <h2 className="mt-4 text-2xl font-bold">Post-delivery feedback preview</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Final satisfaction", "5"],
                ["Matched approved design", "4"],
                ["Order again", "5"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border bg-background p-4 text-center">
                  <Star className="mx-auto h-5 w-5 fill-accent text-accent" />
                  <p className="mt-2 text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-md bg-accent/20 p-3 text-sm">
              These ratings become expectation-confirmation and customer satisfaction measures for the research dashboard.
            </p>
          </article>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
