import React from "react";
import FormWizard, {
  type FormWizardMethods,
} from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function Sample8ImperativeApi() {
  const wizardRef = React.useRef<FormWizardMethods>(null);

  return (
    <>
      <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
        <FormWizard
          ref={wizardRef}
          title="Sample 8: Imperative API"
          subtitle="External controls"
          onComplete={(data?: any) => {
            console.log("Wizard completed with data:", data);
          }}
        >
          <FormWizard.TabContent title="Step A" icon="ti-control-play">
            <h4>Imperative Control</h4>
            <p>Use buttons below to control navigation.</p>
          </FormWizard.TabContent>
          <FormWizard.TabContent title="Step B" icon="ti-control-forward">
            <h4>Programmatic Navigation</h4>
            <p>Wizard controlled externally.</p>
          </FormWizard.TabContent>
          <FormWizard.TabContent title="Step C" icon="ti-control-stop">
            <h4>Complete</h4>
            <p>End of imperative demo.</p>
          </FormWizard.TabContent>
        </FormWizard>

        <div style={{ margin: "12px 0", display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="wizard-btn" onClick={() => wizardRef.current?.prevTab()}>
            Previous
          </button>
          <button className="wizard-btn" onClick={() => wizardRef.current?.nextTab()}>
            Next
          </button>
          <button className="wizard-btn" onClick={() => wizardRef.current?.goToTab(0)}>
            Go to Start
          </button>
          <button className="wizard-btn" onClick={() => wizardRef.current?.goToTab(2)}>
            Jump to End
          </button>
          <button className="wizard-btn" onClick={() => wizardRef.current?.reset()}>
            Reset
          </button>
        </div>
      </div>
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}