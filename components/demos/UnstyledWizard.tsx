"use client";

import React from "react";
import FormWizard from "react-form-wizard-component";
// No stylesheet import: unstyled mode does not need it.

export default function UnstyledWizard() {
  return (
    <>
      <FormWizard
        unstyled
        classNames={{
          root: "u-root",
          stepList: "u-steps",
          step: "u-step",
          stepActive: "u-step-active",
          content: "u-panel",
          footer: "u-footer",
          backButton: "u-btn u-btn-ghost",
          nextButton: "u-btn",
          finishButton: "u-btn",
        }}
        onComplete={() => console.log("Unstyled wizard finished")}
      >
        <FormWizard.TabContent title="Details">
          <p>No bundled CSS is applied here — every class is mine.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Preferences">
          <p>Swap these for Tailwind utilities and nothing else changes.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Done">
          <p>Screen-reader helpers stay hidden even without the stylesheet.</p>
        </FormWizard.TabContent>
      </FormWizard>

      <style>{`
        .u-root { display: flex; flex-direction: column; gap: 20px; }
        .u-steps { display: flex; gap: 8px; list-style: none; margin: 0; padding: 0; }
        .u-step { padding: 6px 14px; border-radius: 999px; background: #eef2f2;
                  color: #5c6968; font-size: 14px; cursor: pointer; display: block; }
        .u-step-active { background: var(--color-fd-primary); color: #fff; }
        .u-panel { border: 1px solid #d6dede; border-radius: 10px; padding: 20px; }
        .u-footer { display: flex; gap: 10px; }
        .u-btn { border: 0; border-radius: 8px; padding: 9px 18px; cursor: pointer;
                 background: var(--color-fd-primary); color: #fff; font-size: 14px; }
        .u-btn-ghost { background: transparent; color: var(--color-fd-primary); border: 1px solid var(--color-fd-primary); }
      `}</style>
    </>
  );
}
