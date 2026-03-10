import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function Sample9VerticalLayout() {
  return (
    <>
      <FormWizard
        title="Sample 9: Vertical Layout"
        subtitle="Steps arranged vertically"
        layout="vertical"
        onComplete={(data?: any) => {
          console.log("Wizard completed with data:", data);
        }}
      >
        <FormWizard.TabContent title="Vertical Step 1" icon="ti-direction-alt">
          <h4>Vertical Layout</h4>
          <p>Steps are arranged vertically instead of horizontally.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Vertical Step 2" icon="ti-direction">
          <h4>Layout Options</h4>
          <p>Choose between horizontal and vertical layouts.</p>
        </FormWizard.TabContent>
      </FormWizard>
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}
