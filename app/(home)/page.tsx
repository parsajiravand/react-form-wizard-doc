import Link from "next/link";
import type { Metadata } from "next";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import HeroWizard from "@/components/hero-wizard";

export const metadata: Metadata = {
  title: "Multi-step forms for React",
};

const SNIPPET = `import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/styles.css";

<FormWizard onComplete={(data) => submit(data)}>
  <FormWizard.TabContent title="Account">…</FormWizard.TabContent>
  <FormWizard.TabContent title="Profile">…</FormWizard.TabContent>
  <FormWizard.TabContent title="Review">…</FormWizard.TabContent>
</FormWizard>;`;

const FACTS = [
  "Zero dependencies",
  "~5 kB gzipped",
  "React 17 · 18 · 19",
  "TypeScript-first",
  "SSR-safe",
];

const CAPABILITIES = [
  {
    title: "Two ways to define steps",
    body: "Nest JSX children for something quick, or hand over a schema for conditional steps and data-driven flows.",
    href: "/docs/getting-started/first-wizard",
  },
  {
    title: "Per-step validation",
    body: "Adapters for Zod and react-hook-form validate one step's fields without splitting your form into several.",
    href: "/docs/guides/validation",
  },
  {
    title: "Styled or headless",
    body: "Recolour it with CSS variables, go fully unstyled with your own classes, or take the state machine alone.",
    href: "/docs/guides/headless",
  },
  {
    title: "Accessible by default",
    body: "Tablist semantics, live-region step announcements, focus management and full keyboard operation.",
    href: "/docs/guides/accessibility",
  },
  {
    title: "Survives a reload",
    body: "Persist answers to session or local storage and mirror the active step into the URL for deep links.",
    href: "/docs/guides/persistence",
  },
  {
    title: "Works in your stack",
    body: "ESM, CJS and UMD with correct types in every resolution mode, and a use-client directive for the App Router.",
    href: "/docs/getting-started/frameworks",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* ---------------- hero ---------------- */}
      <section className="border-b border-fd-border">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="mb-4 font-mono text-[0.8125rem] text-fd-muted-foreground">
              react-form-wizard-component
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Multi-step forms in React, without the wiring
            </h1>
            <p className="mt-5 max-w-[46ch] text-lg text-fd-muted-foreground">
              Accessible, zero-dependency form wizard for React 17, 18 and 19 —
              styled or headless, with real per-step validation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs/getting-started/first-wizard"
                className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
              >
                Get started
              </Link>
              <Link
                href="/docs/examples/checkout"
                className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-muted"
              >
                See a real example
              </Link>
            </div>

            <ul className="mt-8 flex list-none flex-wrap gap-2 p-0">
              {FACTS.map((fact) => (
                <li key={fact} className="pill">
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="rounded-xl border border-fd-border bg-fd-card p-5">
              <HeroWizard />
            </div>
            <p className="mt-3 text-[0.8125rem] text-fd-muted-foreground">
              A live wizard — try the arrow keys.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- install + snippet ---------------- */}
      <section className="border-b border-fd-border">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Install and go
            </h2>
            <p className="mt-2 text-[0.9375rem] text-fd-muted-foreground">
              One package, nothing else enters your lockfile. The snippet on the
              right is a complete three-step wizard — progress bar, keyboard
              navigation and screen-reader announcements included.
            </p>
            <Link
              href="/docs/getting-started/installation"
              className="mt-4 inline-block text-sm font-medium text-fd-primary"
            >
              Installation notes →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <DynamicCodeBlock lang="bash" code="npm install react-form-wizard-component" />
            <DynamicCodeBlock lang="tsx" code={SNIPPET} />
          </div>
        </div>
      </section>

      {/* ---------------- capabilities ---------------- */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-xl font-semibold tracking-tight">
          What you get
        </h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-2 bg-fd-card p-6 transition-colors hover:bg-fd-muted"
            >
              <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
              <p className="text-[0.875rem] leading-relaxed text-fd-muted-foreground">
                {item.body}
              </p>
              <span className="mt-auto pt-2 text-[0.8125rem] font-medium text-fd-primary">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="border-t border-fd-border">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-[0.8125rem] text-fd-muted-foreground">
          <span>MIT licensed · Parsa Jiravand</span>
          <nav className="flex flex-wrap gap-5">
            <Link href="/docs">Docs</Link>
            <Link href="/docs/migration">Migration</Link>
            <a href="https://github.com/parsajiravand/react-form-wizard">GitHub</a>
            <a href="https://www.npmjs.com/package/react-form-wizard-component">
              npm
            </a>
            <a href="https://github.com/parsajiravand/react-form-wizard/blob/master/CHANGELOG.md">
              Changelog
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
