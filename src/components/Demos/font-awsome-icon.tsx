import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function withFontAwsome() {
  const handleComplete = () => {
    alert("Form completed!");
    // Handle form completion logic here
  };


  return (
    <>
    <FormWizard
      onComplete={handleComplete}
      color="#094899"
    >
      <FormWizard.TabContent title="Personal details" icon="fa fa-user">

        <h3>First Tab</h3>
        <p>Some content for the first tab</p>
      </FormWizard.TabContent>
      <FormWizard.TabContent title="Additional Info" icon="fa fa-gear">
        <h3>Second Tab</h3>
        <p>Some content for the second tab</p>
      </FormWizard.TabContent>
      <FormWizard.TabContent title="Last step" icon="fa fa-city">
        <h3>Last Tab</h3>
        <p> Yuhuuu! This seems pretty damn simple</p>
      </FormWizard.TabContent>
    </FormWizard>
     {/* add style */}
     <style>{`
       @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
      `}</style>
    </>
  );
}
