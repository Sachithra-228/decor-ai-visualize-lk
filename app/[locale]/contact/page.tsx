import { PageHero, PageShell } from "@/components/prototype/page-hero";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <PageShell locale={locale}>
      <PageHero
        eyebrow="Contact"
        title="Research contact and university details"
        text="A clear contact page for participants, supervisors, and collaborators reviewing the prototype."
        image="/images/research-desk.png"
        imageAlt="Academic research workspace"
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid overflow-hidden rounded-lg border bg-card shadow-sm md:grid-cols-2">
          <article className="p-6 md:p-8">
            <div className="h-1.5 w-20 rounded-full bg-primary" />
            <h2 className="mt-5 text-xl font-bold sm:text-2xl">Research contact</h2>
            <p className="mt-4 text-muted-foreground">S.A. Wijesinghe, MBA Researcher</p>
            <p className="mt-1 font-semibold">researcher@example.com</p>
          </article>
          <article className="border-t bg-primary p-6 text-primary-foreground md:border-l md:border-t-0 md:p-8">
            <div className="h-1.5 w-20 rounded-full bg-white/70" />
            <h2 className="mt-5 text-xl font-bold sm:text-2xl">University</h2>
            <p className="mt-4 opacity-90">Faculty of Business, University of Moratuwa</p>
            <p className="mt-1 font-semibold">Department of Management of Technology</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
