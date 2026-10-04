import { PageHero, PageShell } from "@/components/prototype/page-hero";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy prototype"
        text="A visual summary of the privacy model planned for the production system."
        image="/images/research-desk.png"
        imageAlt="Privacy and research analytics workspace"
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Separate identity", "Personal identifiers are conceptually kept apart from research responses."],
            ["Minimal customer data", "Customer links collect only the feedback needed for approval and confirmation."],
            ["Anonymous exports", "Research exports are designed around Participant IDs, not personal names."]
          ].map(([title, text], index) => (
            <article key={title} className="rounded-lg border bg-card p-5 shadow-sm">
              <div className={`h-1.5 w-16 rounded-full ${index === 1 ? "bg-secondary" : "bg-primary"}`} />
              <h2 className="mt-5 font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg border bg-card p-6 shadow-sm md:p-8">
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
            The production platform will separate personal identifiers from research responses, use secure expiring
            customer links, collect only necessary customer feedback, and export anonymous Participant IDs for analysis.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
