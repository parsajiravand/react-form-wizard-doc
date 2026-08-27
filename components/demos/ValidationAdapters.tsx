"use client";

import React from "react";
import FormWizard, {
  composeValidators,
  zodValidator,
  type FormWizardMethods,
  type FormWizardSchema,
} from "react-form-wizard-component";
import "react-form-wizard-component/styles.css";

// `zodValidator` is typed structurally — it accepts anything exposing
// `safeParse`, so zod never becomes a dependency of the package or of these
// docs. With zod installed you would pass `z.object({ ... })` here instead.
const emailSchema = {
  safeParse: (value: unknown) => {
    const email = (value as { email?: unknown } | null)?.email;
    return typeof email === "string" && /.+@.+\..+/.test(email)
      ? ({ success: true } as const)
      : ({
          success: false,
          error: { issues: [{ message: "Enter a valid email address" }] },
        } as const);
  },
};

export default function ValidationAdapters() {
  const wizardRef = React.useRef<FormWizardMethods>(null);

  const schema: FormWizardSchema = {
    initialData: { email: "", terms: false },
    steps: [
      {
        id: "email",
        title: "Email",
        content: ({ data }) => (
          <label className="va-field">
            Email
            <input
              value={String(data.email ?? "")}
              onChange={(e) =>
                wizardRef.current?.updateData({ email: e.target.value })
              }
              placeholder="you@example.com"
            />
          </label>
        ),
        // Two rules on one step; the first failure wins.
        validate: composeValidators(
          zodValidator(emailSchema, { pick: ["email"] }),
          ({ data }) =>
            String(data.email ?? "").endsWith("@example.org")
              ? "example.org addresses are not accepted"
              : true
        ),
      },
      {
        id: "terms",
        title: "Terms",
        content: ({ data }) => (
          <label className="va-opt">
            <input
              type="checkbox"
              checked={Boolean(data.terms)}
              onChange={(e) =>
                wizardRef.current?.updateData({ terms: e.target.checked })
              }
            />
            I accept the terms
          </label>
        ),
        validate: ({ data }) =>
          data.terms === true ? true : "You must accept the terms",
      },
    ],
  };

  return (
    <>
      <p className="va-note">
        Next stays blocked until the step is valid, and the step marker turns
        red. Try <code>bad@example.org</code> to see the second rule fire.
      </p>

      <FormWizard
        ref={wizardRef}
        title="Adapter validation"
        schema={schema}
        onComplete={(data) => console.log("Submitted:", data)}
      />

      <style>{`
        .va-note { color: #5c6968; font-size: 14px; }
        .va-field { display: flex; flex-direction: column; gap: 4px; max-width: 320px; }
        .va-opt { display: flex; gap: 8px; align-items: center; }
      `}</style>
    </>
  );
}
