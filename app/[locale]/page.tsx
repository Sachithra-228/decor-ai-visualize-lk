import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/prototype/site-footer";
import { SiteHeader } from "@/components/prototype/site-header";
import { featureCards, howSteps, studyStats } from "@/lib/prototype-data";

const slideImages = [
  {
    src: "/images/hero-studio.png",
    title: "Craft studio context",
    text: "Custom home decor orders begin with customer ideas, materials, and visual expectations."
  },
  {
    src: "/images/design-board.png",
    title: "Design visualization",
    text: "Structured briefs become visual concepts that owners can evaluate before production."
  },
  {
    src: "/images/research-desk.png",
    title: "Research analytics",
    text: "Survey responses, customer ratings, and platform usage metrics support academic analysis."
  }
];

const colorBands = ["bg-primary text-primary-foreground", "bg-secondary text-secondary-foreground", "bg-accent text-accent-foreground", "bg-card text-card-foreground"];

export default async function LocaleHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader locale={locale} />

      <section className="relative min-h-[86vh] overflow-hidden border-b">
        <Image
          src="/images/hero-studio.png"
          alt="Sri Lankan home decor studio with handcrafted products and design previews"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/86 to-background/45" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto flex min-h-[86vh] w-full max-w-7xl items-center px-4 py-16">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">
              University of Moratuwa MBA Research
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              AI design visualization for custom Sri Lankan home decor businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              A refined research prototype for visualizing customer briefs, improving design approval,
              and measuring performance outcomes for micro-scale home decor owners.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild>
                <Link href={`/${locale}/owner`}>Explore owner studio</Link>
              </Button>
              <Button asChild variant="outline" className="bg-card/70">
                <Link href={`/${locale}/researcher`}>View research dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-12 md:grid-cols-4">
        {studyStats.map((metric, index) => (
          <article
            key={metric.label}
            className={`animate-fade-up rounded-lg border p-5 shadow-sm ${colorBands[index]}`}
          >
            <p className="text-sm font-medium opacity-80">{metric.label}</p>
            <p className="mt-3 text-4xl font-bold">{metric.value}</p>
            <p className="mt-2 text-sm opacity-85">{metric.note}</p>
          </article>
        ))}
      </section>

      <section className="border-y bg-card/35">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Research Platform</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Official workflow, visual evidence, and research-ready outputs
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The landing page introduces the study as a credible academic and business tool, while the
              prototype pages show how data is collected across owner, customer, and researcher touchpoints.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((feature, index) => (
              <article
                key={feature.title}
                className={`rounded-lg border bg-background p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${
                  index % 2 === 0 ? "border-primary/25" : "border-secondary/25"
                }`}
              >
                <div className={`h-1.5 w-20 rounded-full ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`} />
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Visual Study Flow</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              A modern image-led journey from design brief to business insight
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href={`/${locale}/how-it-works`}>See how it works</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {slideImages.map((slide, index) => (
            <article key={slide.title} className="group overflow-hidden rounded-lg border bg-card shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-md bg-background/88 px-3 py-1 text-sm font-bold shadow-sm">
                  0{index + 1}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{slide.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y bg-primary text-primary-foreground">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] opacity-75">Study Objectives</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Built around the actual research model
            </h2>
            <p className="mt-5 text-lg leading-8 opacity-85">
              The interface reflects AI visualization use, technology adoption conditions, human-AI integration,
              and micro-business performance outcomes.
            </p>
          </div>
          <div className="grid gap-3">
            {howSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-white/18 bg-white/10 p-5 backdrop-blur">
                <div className="grid gap-3 md:grid-cols-[4rem_1fr] md:items-start">
                  <p className="text-3xl font-bold opacity-80">0{index + 1}</p>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 opacity-82">{step.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="grid overflow-hidden rounded-lg border bg-card shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <Image
            src="/images/research-desk.png"
            alt="Research workspace with analytics and questionnaires"
            width={1536}
            height={1024}
            className="h-full min-h-72 w-full object-cover"
          />
          <div className="p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-secondary">Review Prototype</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Owner tools, customer approval, and researcher analytics in one experience
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Explore the core screens for the business owner, customer share link, questionnaire logic,
              interview coding, analytics, and export concepts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href={`/${locale}/sign-in`}>Choose workspace</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/share/demo">Customer share page</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
