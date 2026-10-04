import { PageHero, PageShell } from "@/components/prototype/page-hero";

export default async function EthicsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow="Ethics"
        title="Participant information, consent, privacy, and withdrawal"
        text="The prototype highlights voluntary participation, anonymous research exports, customer data minimization, and secure handling principles."
        image="/images/research-desk.png"
        imageAlt="Research desk with questionnaires and analytics"
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Participation is voluntary and can be withdrawn.",
            "Data is used only for academic research purposes.",
            "Research exports use anonymous Participant IDs.",
            "Customer share links collect minimal optional information.",
            "Personal identifiers are conceptually separated from research responses.",
            "The prototype demonstrates consent and withdrawal controls."
          ].map((item, index) => (
            <article key={item} className="rounded-lg border bg-card p-5 shadow-sm">
              <div className={`h-1.5 w-16 rounded-full ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`} />
              <p className="mt-5 font-medium leading-7">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg border bg-primary p-6 text-primary-foreground shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] opacity-75">Ethics position</p>
          <h2 className="mt-3 text-3xl font-bold">Consent and confidentiality are treated as product requirements.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 opacity-85">
            The prototype shows how ethical controls can be embedded into the participant journey, not placed
            separately from the actual workflow.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
