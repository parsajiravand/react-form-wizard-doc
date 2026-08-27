import React from "react";
import { useWizard } from "react-form-wizard-component";
// Headless: no markup from the library, so no stylesheet either.

const STEPS = ["account", "profile", "review"];

export default function HeadlessWizard() {
  const wizard = useWizard({ stepIds: STEPS });

  return (
    <div className="hw">
      <div className="hw-bar">
        {STEPS.map((id, i) => (
          <span
            key={id}
            className={i <= wizard.currentStep ? "hw-seg hw-seg-on" : "hw-seg"}
          />
        ))}
      </div>

      <p className="hw-meta">
        Step {wizard.currentStep + 1} of {wizard.totalSteps} —{" "}
        <code>{wizard.stepId}</code>
      </p>

      {wizard.stepId === "account" && (
        <label className="hw-field">
          Email
          <input
            value={String(wizard.data.email ?? "")}
            onChange={(e) => wizard.updateData({ email: e.target.value })}
            placeholder="you@example.com"
          />
        </label>
      )}

      {wizard.stepId === "profile" && (
        <label className="hw-field">
          Display name
          <input
            value={String(wizard.data.name ?? "")}
            onChange={(e) => wizard.updateData({ name: e.target.value })}
            placeholder="Ada"
          />
        </label>
      )}

      {wizard.stepId === "review" && (
        <pre className="hw-pre">{JSON.stringify(wizard.data, null, 2)}</pre>
      )}

      <div className="hw-actions">
        <button onClick={wizard.previous} disabled={wizard.isFirstStep}>
          Back
        </button>
        <button onClick={wizard.next} disabled={wizard.isLastStep}>
          Next
        </button>
        <button onClick={wizard.reset}>Reset</button>
      </div>

      <style>{`
        .hw { display: flex; flex-direction: column; gap: 14px; }
        .hw-bar { display: flex; gap: 6px; }
        .hw-seg { flex: 1; height: 4px; border-radius: 2px; background: #dce3e3; }
        .hw-seg-on { background: #0e6f70; }
        .hw-meta { margin: 0; color: #5c6968; font-size: 14px; }
        .hw-field { display: flex; flex-direction: column; gap: 4px; max-width: 320px; }
        .hw-pre { background: #f5f7f7; padding: 12px; border-radius: 6px; font-size: 13px; }
        .hw-actions { display: flex; gap: 10px; }
      `}</style>
    </div>
  );
}
