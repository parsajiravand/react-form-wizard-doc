import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function DarkMode() {
  const [darkMode, setDarkMode] = React.useState(true);

  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };

  return (
    <>
      <button
        style={{
          padding: "20px 40px",
          margin: "10px",
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
          border: "1px solid black",
          borderRadius: "5px",
        }}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light mode" : "Dark mode"}
      </button>

      <FormWizard
        key={darkMode ? "dark" : "light"}
        title="Form Wizard"
        subtitle="Step by step form wizard"
        darkMode={darkMode}
        color="darkblue"
        customDarkModeColor={{
          title: "white", //simple color
          subtitle: "white",
          tab: "#d9f3fc", //hex color
          tabIconColor: "rgb(42, 74, 247)", //rgb color
          buttons: "black",
          buttonsText: "white",
          finishButton: "green",
          finishButtonText: "white",
        }}
        onComplete={handleComplete}
      >
        <FormWizard.TabContent title="Personal details" icon="ti-user">
          <h3>
            First Tab
            {darkMode ? " (dark mode)" : " (light mode)"}
          </h3>
          <p>Some content for the first tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="ti-settings">
          <h3>Second Tab </h3>
          <p>Some content for the second tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <h3>Last Tab </h3>
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
