"use client";

import FormWizard, { tailwindPreset } from "react-form-wizard-component";
// unstyled mode needs no stylesheet from the package.

// Built once at module scope — the preset returns a new object per call.
const classNames = tailwindPreset({
  extend: { content: "min-h-28" },
});

export default function TailwindPresetDemo() {
  return (
    <FormWizard
      unstyled
      classNames={classNames}
      ariaLabel="Tailwind preset example"
      onComplete={() => undefined}
    >
      <FormWizard.TabContent title="Account">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Every class here comes from <code>tailwindPreset()</code> — the
          package ships no CSS into this demo.
        </p>
      </FormWizard.TabContent>
      <FormWizard.TabContent title="Profile">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The accent is <code>bg-[var(--rfw-primary)]</code>, so recolouring is
          a CSS variable away.
        </p>
      </FormWizard.TabContent>
      <FormWizard.TabContent title="Review">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Completed steps fill in; the current one keeps a ring.
        </p>
      </FormWizard.TabContent>
    </FormWizard>
  );
}
