import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function removeBackgroudTab() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };

  return (
    <>
      <FormWizard
        removeBackgroundTab={true}
        removeBackgroundTabColor="white"
        onComplete={handleComplete}
      >
        <FormWizard.TabContent title="Personal details" icon="">
          <h3>First Tab</h3>
          <p>Some content for the first tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="">
          <h3>Second Tab</h3>
          <p>Some content for the second tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        .react-form-wizard .wizard-icon-container .wizard-icon  span {
          color: darkBlue !important;
        }
      `}</style>
    </>
  );
}
