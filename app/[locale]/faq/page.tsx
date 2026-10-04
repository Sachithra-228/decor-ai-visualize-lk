import { PageHero, PageShell } from "@/components/prototype/page-hero";

const faqs = [
  ["Do I need AI experience?", "No. The brief builder creates prompts from simple fields."],
  ["Is this final software?", "This is a prototype view. Database and production storage can be connected later."],
  ["Who can participate?", "Micro customized home decor businesses in Western Province that meet the study criteria."],
  ["Can customers use it without accounts?", "Yes. The customer approval page is designed for secure share links."]
];

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow="FAQ"
        title="Questions owners and researchers may ask first"
        text="Quick answers for prototype use, eligibility, customer links, and the future database-backed version."
        image="/images/design-board.png"
        imageAlt="Design concepts and decor samples"
      />
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Quick Answers</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">Designed to be clear before people commit</h2>
          <p className="mt-4 text-muted-foreground">
            The prototype answers the first questions a participant, supervisor, or reviewer is likely to ask.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map(([question, answer], index) => (
            <article key={question} className="rounded-lg border bg-card p-5 shadow-sm">
              <div className="flex gap-4">
                <p className="text-2xl font-bold text-secondary">0{index + 1}</p>
                <div>
                  <h2 className="font-semibold">{question}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
