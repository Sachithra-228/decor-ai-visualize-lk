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
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:py-14 md:grid-cols-2">
        <article className="rounded-lg border bg-card p-5 shadow-sm sm:p-6 md:p-8">
          <div className="h-1.5 w-20 rounded-full bg-primary" />
          <h1 className="mt-6 text-2xl font-bold sm:text-3xl">Business owner demo</h1>
          <p className="mt-3 text-muted-foreground">
            Open the AI Design Studio with mock projects, customer briefs, generated visuals, feasibility checks,
            approval links, and performance metrics.
          </p>
          <Button asChild className="mt-6 w-full sm:w-auto">
            <Link href={`/${locale}/owner`}>Enter owner workspace</Link>
          </Button>
        </article>
        <article className="rounded-lg border bg-primary p-5 text-primary-foreground shadow-sm sm:p-6 md:p-8">
          <div className="h-1.5 w-20 rounded-full bg-white/70" />
          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Researcher demo</h2>
          <p className="mt-3 opacity-85">
            View recruitment progress, questionnaire constructs, pilot reliability, regression summaries,
            interview coding, and export previews.
          </p>
          <Button asChild variant="secondary" className="mt-6 w-full sm:w-auto">
            <Link href={`/${locale}/researcher`}>Enter researcher dashboard</Link>
          </Button>
        </article>
      </section>
    </PageShell>
  );
}
