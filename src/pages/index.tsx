import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

const SNIPPET = `import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/styles.css";

<FormWizard onComplete={(data) => submit(data)}>
  <FormWizard.TabContent title="Account">…</FormWizard.TabContent>
  <FormWizard.TabContent title="Profile">…</FormWizard.TabContent>
  <FormWizard.TabContent title="Review">…</FormWizard.TabContent>
</FormWizard>;`;

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>react-form-wizard-component</p>
            <h1 className={styles.heroTitle}>
              Multi-step forms in React, without the wiring
            </h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/first-wizard"
              >
                Get started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/examples/checkout"
              >
                See a real example
              </Link>
            </div>

            <ul className={styles.badges}>
              <li>Zero dependencies</li>
              <li>~5 kB gzipped</li>
              <li>React 17 · 18 · 19</li>
              <li>TypeScript-first</li>
              <li>Accessible</li>
            </ul>
          </div>

          <div className={styles.heroCode}>
            <CodeBlock language="tsx">{SNIPPET}</CodeBlock>
            <p className={styles.heroCodeNote}>
              That is a working three-step wizard — progress bar, keyboard
              navigation and screen-reader announcements included.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Install() {
  return (
    <section className={styles.install}>
      <div className="container">
        <div className={styles.installInner}>
          <CodeBlock language="bash">
            npm install react-form-wizard-component
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Multi-step forms in React"
      description="Accessible multi-step form wizard for React 17, 18 and 19. Zero dependencies, TypeScript-first, styled or headless, with per-step validation for Zod and react-hook-form."
    >
      <Hero />
      <main>
        <Install />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
