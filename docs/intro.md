---
sidebar_position: 1
---

# Quick Start

A react form wizard component with validation and progress bar with no external dependencies which simplifies tab wizard management.

## Installation

To install the package, you can use npm or yarn:

```bash
npm install react-form-wizard-component
```

or

```bash
yarn add react-form-wizard-component
```

## Usage

Import the `FormWizard` component and use it in your React application:

```tsx
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

function App() {
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
        shape="circle"
        color="#e74c3c"
        onComplete={handleComplete}
        onTabChange={tabChanged}
      >
        <FormWizard.TabContent title="Personal details" icon="ti-user">
          {/* Add your form inputs and components for the frst step */}
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
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}

export default App;
```

## Next.js Usage
please note that you need to add `"use client";` at the top of your file to avoid SSR issues.

```tsx
"use client";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
// import type FormWizard from "react-form-wizard-component/dist/types/FormWizard";
export default function App() {
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
    <main className="">
      <FormWizard onComplete={handleComplete} onTabChange={tabChanged}>
        <FormWizard.TabContent title="Personal details" icon="ti-user">
          <h3>First Tab</h3>
          <p>Some content for the first tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="ti-settings">
          <h3>Second Tab</h3>
          <p>Some content for the second tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </main>
  );
}
```

## Props

The `FormWizard` component accepts the following props:

[sample](/docs/props)

The `FormWizard.TabContent` component is used to define each tab's content and accepts the following props:

[sample](/docs/props#formwizardtabcontent-component)


Refer to the component's source code or documentation for additional props and details.

## Examples

You can find examples of using the `react-form-wizard-component` in the [examples](/docs/category/demos) directory.

## License

This package is licensed under the MIT License. See the [LICENSE](https://github.com/parsajiravand/react-form-wizard/blob/master/LICENSE) file for more information.

Please note that this is a basic README.md template, and you may need to modify it further to match your specific package and requirements.
