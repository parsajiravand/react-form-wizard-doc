import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type Feature = {
  title: string;
  body: React.ReactNode;
  to: string;
  linkLabel: string;
};

const FEATURES: Feature[] = [
  {
    title: "Zero dependencies",
    body: (
      <>
        Nothing enters your lockfile but this package. Roughly 5&nbsp;kB gzipped,
        with React left external.
      </>
    ),
    to: "/docs/getting-started/installation",
    linkLabel: "Install it",
  },
  {
    title: "Styled or headless",
    body: (
      <>
        Ship the bundled look, recolour it with CSS variables, go fully
        unstyled, or drop the markup entirely and use <code>useWizard()</code>.
      </>
    ),
    to: "/docs/guides/headless",
    linkLabel: "See the headless API",
  },
  {
    title: "Real per-step validation",
    body: (
      <>
        First-class adapters for Zod and react-hook-form — validate one step’s
        fields without splitting your form.
      </>
    ),
    to: "/docs/guides/validation",
    linkLabel: "Read the guide",
  },
  {
    title: "Accessible by default",
    body: (
      <>
        Tablist semantics, live-region step announcements, focus management and
        full keyboard operation — nothing to switch on.
      </>
    ),
    to: "/docs/guides/accessibility",
    linkLabel: "What you get",
  },
  {
    title: "React 17, 18 and 19",
    body: (
      <>
        One package across three majors, each tested in CI against the real
        published tarball.
      </>
    ),
    to: "/docs/migration",
    linkLabel: "Upgrade notes",
  },
  {
    title: "Works everywhere",
    body: (
      <>
        ESM, CommonJS and UMD, correct types in every resolution mode, and a{" "}
        <code>"use client"</code> directive for the Next.js App Router.
      </>
    ),
    to: "/docs/getting-started/frameworks",
    linkLabel: "Framework setup",
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <div className={styles.card} key={feature.title}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardBody}>{feature.body}</p>
              <Link className={styles.cardLink} to={feature.to}>
                {feature.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
