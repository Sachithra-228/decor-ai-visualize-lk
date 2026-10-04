import Image from "next/image";
import { PageHero, PageShell } from "@/components/prototype/page-hero";
import { howSteps } from "@/lib/prototype-data";

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow="Workflow"
        title="From customer idea to approved design"
        text="A simple four-step flow converts customer requirements into visual options, feedback, approval, and research-ready performance metrics."
        image="/images/design-board.png"
        imageAlt="Design board with home decor concepts"
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-14">
        <div className="grid gap-5 lg:grid-cols-4">
          {howSteps.map((step, index) => (
            <article key={step.title} className="overflow-hidden rounded-lg border bg-card shadow-sm">
              <div className={`${index % 2 === 0 ? "bg-primary" : "bg-secondary"} h-2`} />
              <div className="p-5">
                <p className="text-4xl font-bold text-muted-foreground/35">0{index + 1}</p>
                <h2 className="mt-4 text-lg font-semibold">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 grid overflow-hidden rounded-lg border bg-card shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <Image
            src="/images/design-board.png"
            alt="Design board"
            width={1536}
            height={1024}
            className="h-full min-h-72 w-full object-cover"
          />
          <div className="p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Prototype Experience</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">Simple for owners, useful for research</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Each interaction is designed to feel practical for a micro-business owner while quietly capturing the
              measures needed for the research model.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
