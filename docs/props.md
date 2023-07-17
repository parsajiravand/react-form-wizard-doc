---
sidebar_position: 2
title: Props
description: The props for the FormWizard component.
---

### FormWizard Component

| Prop                   | Description                                                                | Samples                                     |
| ---------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| `title`                | The title of the form wizard. It can be a string or a ReactNode.           | [sample](./Demos/custom-title.mdx)          |
| `subtitle`             | The subtitle or description of the form wizard.                            | [sample](./Demos/custom-title-template.mdx) |
| `shape`                | The shape of the wizard tabs (e.g., "circle", "square").                   | [sample](./Demos/square-steps.mdx)          |
| `color`                | The color of the wizard tabs and progress bar.                             | [sample](./Demos/simple.mdx)                |
| `children`             | The content of the form wizard, including the form tabs and their content. | In each demo                                |
| `nextButtonText`       | The text for the "Next" button.                                            | -                                           |
| `nextButtonTemplate`   | A function with one argument for customize footer next button              | [sample](./Demos/custom-footer-buttons.mdx) |
| `backButtonText`       | The text for the "Back" button.                                            | -                                           |
| `backButtonTemplate`   | A function with one argument for customize footer back button              | [sample](./Demos/custom-footer-buttons.mdx) |
| `finishButtonText`     | The text for the "Finish" button.                                          |
| `finishButtonTemplate` | A function with one argument for customize footer finish button            | [sample](./Demos/custom-footer-buttons.mdx) |
| `stepSize`             | The size of the steps (e.g., "xs", "sm", "md", "lg").                      | [sample](./Demos/small-step-size.mdx)       |
| `layout`               | The layout of the form wizard (e.g., "horizontal", "vertical").            | -                                           |
| `startIndex`           | The index started default is 0                                             | [sample](./Demos/step-index.mdx)            |
| `onComplete`           | A callback function to be called when the form wizard is completed.        | In each demo                                |
| `onTabChange`          | A callback function to be called when the active tab is changed.           | [sample](./Demos/simple.mdx)                |

<br />

### FormWizard.TabContent Component

The `FormWizard.TabContent` component is used to define each tab's content and accepts the following props:

| Prop              | Description                                                                        | Samples                            |
| ----------------- | ---------------------------------------------------------------------------------- | ---------------------------------- |
| `title`           | The title of the tab.                                                              | In each demo                       |
| `icon`            | The icon for the tab.                                                              | In each demo                       |
| `isValid`         | A boolean value indicating whether the tab is valid or not.                        | [sample](./Demos/validate-tab.mdx) |
| `validationError` | The validation error message to be displayed when the tab is not valid. (Function) | [sample](./Demos/validate-tab.mdx) |

Please refer to the component's source code or documentation for additional props and more detailed information.
