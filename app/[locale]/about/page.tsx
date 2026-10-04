import { PageHero, PageShell } from "@/components/prototype/page-hero";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow="About the study"
        title="AI-generated design visualization and micro business performance"
        text="A research prototype for understanding how AI visuals affect efficiency, customer response, purchase intention, and repeat orders in Sri Lankan customized home decor businesses."
        image="/images/hero-studio.png"
        imageAlt="Sri Lankan home decor studio"
      />
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Research Context</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            A focused study on customized micro-scale home decor businesses
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            This MBA research study at the University of Moratuwa explores how AI-generated design visuals affect
            customized micro-scale home decor businesses in Sri Lanka.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            ["Design efficiency", "How visual concepts reduce discussion cycles, revisions, and physical samples."],
            ["Customer response", "How expectation match, satisfaction, and purchase intention change after visual approval."],
            ["Adoption conditions", "How device access, connectivity, training, trust, cost, and privacy shape AI use."],
            ["Human-AI integration", "How owners check feasibility before turning AI concepts into producible products."]
          ].map(([title, text], index) => (
            <article key={title} className="rounded-lg border bg-card p-5 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                <p className="text-3xl font-bold text-secondary">0{index + 1}</p>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y bg-primary text-primary-foreground">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 md:grid-cols-3">
          {[
            ["Researcher", "S.A. Wijesinghe"],
            ["Faculty", "Faculty of Business"],
            ["Department", "Management of Technology"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/18 bg-white/10 p-5">
              <p className="text-sm font-bold uppercase tracking-wide opacity-75">{label}</p>
              <p className="mt-2 text-xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
