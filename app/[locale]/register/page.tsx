import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero, PageShell } from "@/components/prototype/page-hero";

export default async function RegisterPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow="Prototype onboarding"
        title="Join the study flow"
        text="Preview consent, eligibility, business profile, and baseline metrics without creating an account or connecting a database."
        image="/images/hero-studio.png"
        imageAlt="Custom home decor studio"
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Consent", "Voluntary participation, confidentiality, right to withdraw, secure storage."],
            ["Eligibility", "Customized home decor, fewer than 10 employees, Rs. 20m turnover limit."],
            ["Business profile", "Product categories, channels, years in operation, AI adoption status."],
            ["Baseline", "Typical revisions, days to finalize, samples per order, monthly orders."]
          ].map(([title, text], index) => (
            <article key={title} className="rounded-lg border bg-card p-5 shadow-sm">
              <p className="text-3xl font-bold text-secondary">0{index + 1}</p>
              <h2 className="mt-4 font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-lg border bg-card p-5 shadow-sm sm:mt-10 sm:p-6 md:p-8">
          <h2 className="text-xl font-bold sm:text-2xl">Eligibility preview</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              ["Makes customized home decor products?", "Yes"],
              ["Number of employees", "4"],
              ["Annual turnover Rs. 20 million or less?", "Yes"],
              ["District", "Colombo"],
              ["Area type", "Urban"],
              ["Currently uses AI tools?", "AI user"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border bg-background p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-1 font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-6 w-full sm:w-auto">
            <Link href={`/${locale}/owner`}>
              Continue to owner demo
            </Link>
          </Button>
        </section>
      </section>
    </PageShell>
  );
}
