import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function Sample11InlineSteps() {
  return (
    <>
      <FormWizard
        title="Sample 11: Inline Steps"
        subtitle="Compact inline design"
        inlineStep={true}
        onComplete={(data?: any) => {
          console.log("Wizard completed with data:", data);
        }}
      >
        <FormWizard.TabContent title="Inline 1" icon="ti-layout-width-full">
          <h4>Inline Steps</h4>
          <p>Steps are displayed inline without progress bar.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Inline 2" icon="ti-layout-width-default">
          <h4>Compact Design</h4>
          <p>Perfect for space-constrained layouts.</p>
        </FormWizard.TabContent>
      </FormWizard>
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}
