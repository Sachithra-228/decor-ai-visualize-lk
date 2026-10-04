import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero, PageShell } from "@/components/prototype/page-hero";

export default async function SignInPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow="Demo access"
        title="Choose a prototype workspace"
        text="No login is needed for this version. Jump straight into the business owner experience or the research analytics view."
        image="/images/research-desk.png"
        imageAlt="Research analytics workspace"
      />
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 md:grid-cols-2">
        <article className="rounded-lg border bg-card p-6 shadow-sm md:p-8">
          <div className="h-1.5 w-20 rounded-full bg-primary" />
          <h1 className="mt-6 text-3xl font-bold">Business owner demo</h1>
          <p className="mt-3 text-muted-foreground">
            Open the AI Design Studio with mock projects, customer briefs, generated visuals, feasibility checks,
            approval links, and performance metrics.
          </p>
          <Button asChild className="mt-6">
            <Link href={`/${locale}/owner`}>Enter owner workspace</Link>
          </Button>
        </article>
        <article className="rounded-lg border bg-primary p-6 text-primary-foreground shadow-sm md:p-8">
          <div className="h-1.5 w-20 rounded-full bg-white/70" />
          <h2 className="mt-6 text-3xl font-bold">Researcher demo</h2>
          <p className="mt-3 opacity-85">
            View recruitment progress, questionnaire constructs, pilot reliability, regression summaries,
            interview coding, and export previews.
          </p>
          <Button asChild variant="secondary" className="mt-6">
            <Link href={`/${locale}/researcher`}>Enter researcher dashboard</Link>
          </Button>
        </article>
      </section>
    </PageShell>
  );
}
