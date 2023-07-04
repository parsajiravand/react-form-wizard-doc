import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

const Sample = () => {
  const formWizardRef = React.createRef();
  console.log("formWizardRef", formWizardRef);
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  const handelNext = () => {
    console.log("nextTab");
    formWizardRef.current?.nextTab();
  };
  const handelPrev = () => {
    console.log("prevTab");
    formWizardRef.current?.prevTab();
  };
  const handelReset = () => {
    console.log("reset");
    formWizardRef.current?.reset();
  };
  const handelActiveAll = () => {
    console.log("activeAll");
    formWizardRef.current?.activeAll();
  };
  const handelChangeTab = () => {
    console.log("changeTab");
    formWizardRef.current?.goToTab(2);
  };
  const tabChanged = ({ prevIndex, nextIndex }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
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

          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <button className="sample-refrence-button" onClick={handelNext}>
          nextTab
        </button>
        <button className="sample-refrence-button" onClick={handelPrev}>
          prevTab
        </button>
        <button className="sample-refrence-button" onClick={handelReset}>
          reset
        </button>
        <button className="sample-refrence-button" onClick={handelActiveAll}>
          activeAll
        </button>
        <button className="sample-refrence-button" onClick={handelChangeTab}>
          changeTab
        </button>
      </div>

      <FormWizard
        ref={formWizardRef}
        shape="square"
        color="#2196f3"
        onComplete={handleComplete}
        onTabChange={tabChanged}
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
        .sample-refrence-button{
          margin: 5px;
          padding: 8px 15px;
          border: 1px solid transparent;
          border-radius: 5px;
          background-color: #2196f3;
          color: #fff;
          cursor: pointer;

        }
        .sample-refrence-button:hover{
          background-color: #fff;
          color: #2196f3;
          border: 1px solid #2196f3;
        }

      `}</style>
    </>
  );
};

export default Sample;
