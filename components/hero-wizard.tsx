"use client";

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/styles.css";

/**
 * A small live wizard for the landing page. Deliberately plain — the styling
 * comes from the site's single accent token, not from a per-instance colour.
 */
export default function HeroWizard() {
  return (
    <div className="demo !m-0 !border-0 !p-0">
      <FormWizard
        subtitle=""
        stepSize="sm"
        ariaLabel="Example wizard"
        onComplete={() => undefined}
      >
        <FormWizard.TabContent title="Account">
          <p className="text-sm text-fd-muted-foreground">
            Collect an email and a password.
          </p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Profile">
          <p className="text-sm text-fd-muted-foreground">
            Ask for a name, or skip it entirely with a condition.
          </p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Review">
          <p className="text-sm text-fd-muted-foreground">
            Read the collected data back before submitting.
          </p>
        </FormWizard.TabContent>
      </FormWizard>
    </div>
  );
}
