"use client";

import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/styles.css";
// The v1 skin ships separately so the default build stays small.
import "react-form-wizard-component/legacy.css";

const STEPS = ["Account", "Profile", "Review"];

function Wizard({ variant }: { variant: "modern" | "legacy" }) {
  return (
    <FormWizard variant={variant} ariaLabel={`${variant} skin example`}>
      {STEPS.map((title) => (
        <FormWizard.TabContent title={title} key={title}>
          <p style={{ fontSize: "0.875rem", margin: 0 }}>
            The {title.toLowerCase()} step.
          </p>
        </FormWizard.TabContent>
      ))}
    </FormWizard>
  );
}

export default function SkinComparison() {
  const [variant, setVariant] = React.useState<"modern" | "legacy">("modern");

  return (
    <div>
      <div role="radiogroup" aria-label="Skin" className="skin-switch">
        {(["modern", "legacy"] as const).map((option) => (
          <label
            key={option}
            className={variant === option ? "skin-opt skin-opt-on" : "skin-opt"}
          >
            <input
              type="radio"
              name="skin"
              checked={variant === option}
              onChange={() => setVariant(option)}
            />
            {option === "modern" ? "Modern (default)" : "Legacy (v1)"}
          </label>
        ))}
      </div>

      {/* Remounted per skin so the wizard picks up the class cleanly. */}
      <Wizard key={variant} variant={variant} />

      <style>{`
        .skin-switch { display: flex; gap: .5rem; margin-bottom: 1.25rem; }
        .skin-opt {
          display: inline-flex; align-items: center; gap: .4rem;
          border: 1px solid var(--color-fd-border); border-radius: .5rem;
          padding: .35rem .75rem; font-size: .8125rem; cursor: pointer;
        }
        .skin-opt-on { border-color: var(--color-fd-primary); }
      `}</style>
    </div>
  );
}
