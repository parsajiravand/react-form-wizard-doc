import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function Sample12SquareShape() {
  return (
    <>
      <FormWizard
        title="Sample 12: Square Shape"
        subtitle="Square step indicators"
        shape="square"
        onComplete={(data?: any) => {
          console.log("Wizard completed with data:", data);
        }}
      >
        <FormWizard.TabContent title="Square Step 1" icon="ti-layout-grid2">
          <h4>Square Shapes</h4>
          <p>Step indicators use square shape instead of circles.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Square Step 2" icon="ti-layout-grid3">
          <h4>Shape Options</h4>
          <p>Choose between circle and square shapes.</p>
        </FormWizard.TabContent>
      </FormWizard>
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}
