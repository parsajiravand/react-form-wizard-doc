import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function squareSteps() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };

  return (
    <>
    <FormWizard
      onComplete={handleComplete}
      shape="square"
    >
      <FormWizard.TabContent title="Personal details" icon="ti-user">
        <h3>First Tab square</h3>
        <p>Some content for the first tab</p>
      </FormWizard.TabContent>
      <FormWizard.TabContent title="Additional Info" icon="ti-settings">
        <h3>Second Tab square</h3>
        <p>Some content for the second tab</p>
      </FormWizard.TabContent>
      <FormWizard.TabContent title="Last step" icon="ti-check">
        <h3>Last Tab square</h3>
        <p>Some content for the last tab</p>
      </FormWizard.TabContent>
    </FormWizard>
     {/* add style */}
     <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}
