import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function Sample5CustomButtonTemplates() {
  return (
    <>
      <FormWizard
        title="Sample 5: Custom Buttons"
        subtitle="Custom button templates"
        nextButtonTemplate={(next) => (
          <button
            className="wizard-btn"
            onClick={next}
            type="button"
            style={{ backgroundColor: "#8b5cf6" }}
          >
            Continue →
          </button>
        )}
        backButtonTemplate={(back) => (
          <button
            className="wizard-btn"
            onClick={back}
            type="button"
            style={{ backgroundColor: "#6b7280" }}
          >
            ← Go Back
          </button>
        )}
        finishButtonTemplate={(finish) => (
          <button
            className="wizard-btn"
            onClick={finish}
            type="button"
            style={{ backgroundColor: "#10b981" }}
          >
            Complete
          </button>
        )}
        onComplete={(data?: any) => {
          console.log("Wizard completed with data:", data);
        }}
      >
        <FormWizard.TabContent title="Custom Buttons 1" icon="ti-layout">
          <h4>Button Templates</h4>
          <p>This wizard uses custom button components.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Custom Buttons 2" icon="ti-mouse">
          <h4>Interactive</h4>
          <p>Click custom buttons to navigate.</p>
        </FormWizard.TabContent>
      </FormWizard>
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}