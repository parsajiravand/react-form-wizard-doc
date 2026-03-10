import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

const Sample: React.FC = () => {
  const formWizardRef = React.createRef<any>();
  const handleComplete = () => {
    console.log("Form completed!");
  };
  const handleNext = () => {
    formWizardRef.current?.nextTab();
  };
  const handlePrev = () => {
    formWizardRef.current?.prevTab();
  };
  const handleReset = () => {
    formWizardRef.current?.reset();
  };
  const handleActiveAll = () => {
    formWizardRef.current?.activeAll();
  };
  const handleGoToTab = () => {
    formWizardRef.current?.goToTab(2);
  };

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          color: "#2196f3",
          fontWeight: "bold",
          margin: "40px 0px",
        }}
      >
        React Form Wizard Example With Custom Ref
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <button className="sample-reference-button" onClick={handleNext}>
          nextTab
        </button>
        <button className="sample-reference-button" onClick={handlePrev}>
          prevTab
        </button>
        <button className="sample-reference-button" onClick={handleReset}>
          reset
        </button>
        <button className="sample-reference-button" onClick={handleActiveAll}>
          activeAll
        </button>
        <button className="sample-reference-button" onClick={handleGoToTab}>
          goToTab(2)
        </button>
      </div>

      <FormWizard
        ref={formWizardRef}
        shape="square"
        color="#2196f3"
        onComplete={handleComplete}
      >
        <FormWizard.TabContent title="Personal details" icon="ti-user">
          <h3> Personal details</h3>
          <p> Add your form inputs and components for the first step </p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="ti-settings">
          <h3> Additional Info</h3>
          <p> Add your form inputs and components for the second step </p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Identify Tab" icon="ti-user">
          <h3> Identify Tab</h3>
          <p> Add your form inputs and components for the third step </p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Address" icon="ti-map">
          <h3> Address</h3>
          <p> Add your form inputs and components for the last step </p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <h3> Last step</h3>
          <p> Add your form inputs and components for the last step </p>
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
        .sample-reference-button{
          margin: 5px;
          padding: 8px 15px;
          border: 1px solid transparent;
          border-radius: 5px;
          background-color: #2196f3;
          color: #fff;
          cursor: pointer;
        }
        .sample-reference-button:hover{
          background-color: #fff;
          color: #2196f3;
          border: 1px solid #2196f3;
        }
      `}</style>
    </>
  );
};

export default Sample;