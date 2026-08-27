"use client";

import React from "react";
import FormWizard, { type WizardTheme } from "react-form-wizard-component";
import "react-form-wizard-component/styles.css";

export default function ThemeTokens() {
  const [theme, setTheme] = React.useState<WizardTheme>({
    primaryColor: "var(--color-fd-primary)",
    borderRadius: "10px",
    errorColor: "#c0392b",
  });

  return (
    <>
      <div className="rfw-theme-controls">
        <label>
          Accent
          <input
            type="color"
            value={theme.primaryColor ?? "var(--color-fd-primary)"}
            onChange={(e) =>
              setTheme((t) => ({ ...t, primaryColor: e.target.value }))
            }
          />
        </label>
        <label>
          Radius
          <input
            type="range"
            min={0}
            max={24}
            value={Number.parseInt(theme.borderRadius ?? "10", 10)}
            onChange={(e) =>
              setTheme((t) => ({ ...t, borderRadius: `${e.target.value}px` }))
            }
          />
        </label>
        <code>{JSON.stringify(theme)}</code>
      </div>

      <FormWizard
        title="Themed wizard"
        subtitle="Live CSS custom properties"
        theme={theme}
      >
        <FormWizard.TabContent title="One">
          <p>The accent, progress ring and buttons all read the same token.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Two">
          <p>No stylesheet edit and no rebuild — just the theme prop.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Three">
          <p>
            Set the same <code>--rfw-*</code> variables in your own CSS for a
            global default.
          </p>
        </FormWizard.TabContent>
      </FormWizard>

      <style>{`
        .rfw-theme-controls {
          display: flex; gap: 16px; flex-wrap: wrap;
          align-items: center; margin-bottom: 16px;
        }
        .rfw-theme-controls label { display: flex; gap: 6px; align-items: center; }
      `}</style>
    </>
  );
}
