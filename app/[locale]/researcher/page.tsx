"use client";

import { use } from "react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Image from "next/image";
import { Download, Microscope, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/prototype/site-header";
import { SiteFooter } from "@/components/prototype/site-footer";
import { MetricCard } from "@/components/prototype/metric-card";
import { exportItems, interviewThemes, questionnaireConstructs, researchMetrics } from "@/lib/prototype-data";

const recruitment = [
  { group: "Colombo", ai: 18, non: 12 },
  { group: "Gampaha", ai: 14, non: 11 },
  { group: "Kalutara", ai: 10, non: 7 }
];

const trend = [
  { week: "W1", satisfaction: 3.8, approval: 2.9 },
  { week: "W2", satisfaction: 4.1, approval: 2.6 },
  { week: "W3", satisfaction: 4.4, approval: 2.2 },
  { week: "W4", satisfaction: 4.6, approval: 1.8 }
];

export default function ResearcherDashboardPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  return (
    <main className="min-h-screen">
      <SiteHeader locale={locale} />
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="hidden rounded-lg bg-primary p-3 text-primary-foreground sm:block">
              <Microscope className="h-7 w-7" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary sm:text-sm sm:tracking-wide">Researcher prototype</p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Analytics, questionnaire, interviews, and exports</h1>
              <p className="mt-3 max-w-4xl text-muted-foreground">
                Mock dashboards show how the final system will support pilot reliability checks, mixed-method sampling,
                platform usage metrics, and SPSS-ready anonymous exports. All analysis labels are preliminary.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
            <Image
              src="/images/research-desk.png"
              alt="Research desk with analytics dashboard, questionnaires, notes, and decor samples"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
              priority
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {researchMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="min-w-0 rounded-lg border bg-card p-4 shadow-sm sm:p-5">
            <h2 className="text-xl font-bold sm:text-2xl">Recruitment progress</h2>
            <div className="mt-5 h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={recruitment}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="group" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="ai" fill="#0f5f5c" name="AI users" />
                  <Bar dataKey="non" fill="#b95b3f" name="Non-AI users" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="min-w-0 rounded-lg border bg-card p-4 shadow-sm sm:p-5">
            <h2 className="text-xl font-bold sm:text-2xl">Usage and customer outcome trend</h2>
            <div className="mt-5 h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="satisfaction" stroke="#0f5f5c" strokeWidth={3} />
                  <Line type="monotone" dataKey="approval" stroke="#b95b3f" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-lg border bg-card p-4 shadow-sm sm:p-5">
          <h2 className="text-xl font-bold sm:text-2xl">Questionnaire builder preview</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Pilot and main versions can be published separately. Non-AI users skip usage items and answer intention/barrier items.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {questionnaireConstructs.map((construct) => (
              <span key={construct} className="rounded-md border bg-background px-2.5 py-2 text-xs font-semibold sm:px-3 sm:text-sm">
                {construct}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-lg border bg-card p-4 shadow-sm sm:p-5">
            <h2 className="text-xl font-bold sm:text-2xl">Preliminary statistics</h2>
            <div className="mt-5 grid gap-3">
              {[
                ["AIV -> PERF correlation", "r = 0.58, p < .01"],
                ["TAC -> PERF correlation", "r = 0.44, p < .01"],
                ["AI vs non-AI performance", "t = 2.31, p = .024"],
                ["Regression", "PERF = 0.41*AIV + 0.29*TAC, Adj. R2 = 0.44"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border bg-background p-4">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="mt-1 font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-md bg-accent/20 p-3 text-sm">
              Preliminary only. Final analysis should be confirmed in SPSS/R after main data collection.
            </p>
          </section>

          <section className="rounded-lg border bg-card p-4 shadow-sm sm:p-5">
            <h2 className="text-xl font-bold sm:text-2xl">Interview management and coding</h2>
            <div className="mt-5 grid gap-3">
              {interviewThemes.map((theme) => (
                <article key={theme.title} className="rounded-md border bg-background p-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <h3 className="font-semibold">{theme.title}</h3>
                    <span className="text-sm text-muted-foreground">{theme.quotes} quotes</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {theme.codes.map((code) => (
                      <span key={code} className="rounded bg-muted px-2 py-1 text-xs font-medium">
                        {code}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {exportItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border bg-card p-5 shadow-sm">
                <Icon className="h-7 w-7 text-secondary" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-8 rounded-lg border bg-primary p-5 text-primary-foreground shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold">Anonymous research export model</h2>
              <p className="mt-1 text-sm opacity-90">
                Exports use Participant IDs only. Personal identifiers are conceptually separated for ethics compliance.
              </p>
            </div>
            <Download className="ml-auto hidden h-8 w-8 md:block" />
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
