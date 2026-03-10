import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function Sample4CustomColors() {
  return (
    <>
      <FormWizard
        title="Sample 4: Custom Colors"
        subtitle="Orange theme with custom styling"
        color="#ff6b35"
        customDarkModeColor={{
          title: "#ff6b35",
          subtitle: "#ff8f65",
          tab: "#ff6b35",
          tabIconColor: "#ffffff",
          buttons: "#ff6b35",
          buttonsText: "#ffffff",
          finishButton: "#4caf50",
          finishButtonText: "#ffffff",
        }}
        onComplete={(data?: any) => {
          console.log("Wizard completed with data:", data);
        }}
      >
        <FormWizard.TabContent title="Orange Step 1" icon="ti-paint-bucket">
          <h4>Custom Colors</h4>
          <p>This wizard uses custom orange theme.</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Orange Step 2" icon="ti-palette">
          <h4>Color Options</h4>
          <p>Fully customizable color scheme.</p>
        </FormWizard.TabContent>
      </FormWizard>
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}