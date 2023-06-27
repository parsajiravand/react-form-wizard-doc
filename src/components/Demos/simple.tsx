import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function simple() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  const tabChanged = ({
    prevIndex,
    nextIndex,
  }: {
    prevIndex: number;
    nextIndex: number;
  }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  return (
    <>
    <FormWizard
      color="#e74c3c"
      onComplete={handleComplete}
      onTabChange={tabChanged}
    >
      <FormWizard.TabContent title="Personal details" icon="ti-user">

        <h1>First Tab</h1>
        <p>Some content for the first tab</p>
      </FormWizard.TabContent>
      <FormWizard.TabContent title="Additional Info" icon="ti-settings">
        <h1>Second Tab</h1>
        <p>Some content for the second tab</p>
      </FormWizard.TabContent>
      <FormWizard.TabContent title="Last step" icon="ti-check">
        <h1>Last Tab</h1>
        <p>Some content for the last tab</p>
      </FormWizard.TabContent>
    </FormWizard>
    </>
  );
}
