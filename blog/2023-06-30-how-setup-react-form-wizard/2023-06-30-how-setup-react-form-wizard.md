---
title: How to Setup React Form Wizard 
date: June 30, 2023
tags: [React, Form Wizard, Component]
authors: [parsa]
---

# React Form Wizard Component

![React Form Wizard](./react-form-wizard-icon.png)

Are you looking for an easy way to implement a form wizard in your React application? Look no further! Introducing the **React Form Wizard Component** - a powerful and customizable form wizard component that simplifies tab wizard management without any external dependencies.

## Installation

To install the React Form Wizard Component, you can use either npm or yarn. Open your terminal and run the following command:

```bash
npm install react-form-wizard-component
```

or

```bash
yarn add react-form-wizard-component
```

## Usage

Using the React Form Wizard Component is straightforward. Here's an example of how you can integrate it into your React application:

```tsx
import React from 'react';
import FormWizard from 'react-form-wizard-component';
import 'react-form-wizard-component/dist/style.css';

function App() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };

  const tabChanged = ({ prevIndex, nextIndex }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  return (
    <FormWizard
      shape="circle"
      color="#e74c3c"
      onComplete={handleComplete}
      onTabChange={tabChanged}
    >
      <FormWizard.TabContent title="Personal details" icon="ti-user">
        {/* Add your form inputs and components for the first step */}
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
  );
}

export default App;
```

## Features

The React Form Wizard Component offers a range of features to enhance your form wizard experience:

- Title and Subtitle: Customize the title and subtitle of your form wizard to provide context and guidance.
- Tab Shape and Color: Choose between different shapes (e.g., circle, square) and customize the color of the tabs and progress bar.
- Navigation Buttons: Easily configure the text for the "Next," "Back," and "Finish" buttons to match your desired user flow.
- Step Size and Layout: Adjust the size of the steps (e.g., xs, sm, md, lg) and define the layout of your form wizard (e.g., horizontal, vertical).
- Completion and Tab Change Callbacks: Utilize the onComplete and onTabChange callback functions to perform custom logic when the form is completed or the active tab is changed.
- The FormWizard.TabContent component allows you to define the content of each tab, including the title, icon, and content itself.

Refer to the component's source code or documentation for additional props and details.

## Examples

Visit our [GitHub repository](https://github.com/parsajiravand/react-form-wizard-component) to explore a range of examples showcasing the usage of the React Form Wizard Component. These examples will help you understand the various ways to configure and customize the component to suit your needs.

## Conclusion

The React Form Wizard Component is a valuable tool for building interactive form wizards in React applications. With its simplicity, flexibility, and extensive features, it allows you to manage complex form flows with ease. Save development time and deliver a smooth user experience by incorporating the React Form Wizard Component into your projects today!

Download the React Form Wizard Component and get started now!

```bash
npm install react-form-wizard-component
```

or

```bash
yarn add react-form-wizard-component
```

For more information, check out the [documentation](https://your-website.com/docs/react-form-wizard-component) and feel free to contribute to the [GitHub repository](https://github.com/parsajiravand/react-form

-wizard-component) to help make the component even better!

Happy form wizarding!
