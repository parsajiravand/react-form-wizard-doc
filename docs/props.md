---
sidebar_position: 2
title: Props
description: The props for the FormWizard component.
---

### FormWizard Component

| Prop                   | Description                                                                | Samples                                     |
| ---------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| `title`                | The title of the form wizard. It can be a string or a ReactNode.           | [sample](/docs/demos/custom-title)          |
| `subtitle`             | The subtitle or description of the form wizard.                            | [sample](/docs/demos/custom-title-template) |
| `shape`                | The shape of the wizard tabs (e.g., "circle", "square").                   | [sample](/docs/demos/square-steps)          |
| `color`                | The color of the wizard tabs and progress bar.                             | [sample](/docs/demos/simple)                |
| `children`             | The content of the form wizard, including the form tabs and their content. | In each demo                                |
| `nextButtonText`       | The text for the "Next" button.                                            | -                                           |
| `nextButtonTemplate`   | A function with one argument for customize footer next button              | [sample](/docs/demos/custom-footer-buttons) |
| `backButtonText`       | The text for the "Back" button.                                            | -                                           |
| `backButtonTemplate`   | A function with one argument for customize footer back button              | [sample](/docs/demos/custom-footer-buttons) |
| `finishButtonText`     | The text for the "Finish" button.                                          |
| `finishButtonTemplate` | A function with one argument for customize footer finish button            | [sample](/docs/demos/custom-footer-buttons) |
| `stepSize`             | The size of the steps (e.g., "xs", "sm", "md", "lg").                      | [sample](/docs/demos/small-step-size)       |
| `layout`               | The layout of the form wizard (e.g., "horizontal", "vertical").            | -                                           |
| `startIndex`           | The index started default is 0                                             | [sample](/docs/demos/step-index)            |
| `onComplete`           | A callback function to be called when the form wizard is completed.        | In each demo                                |
| `onTabChange`          | A callback function to be called when the active tab is changed.           | [sample](/docs/demos/simple)                |

<br />

### FormWizard.TabContent Component

The `FormWizard.TabContent` component is used to define each tab's content and accepts the following props:

| Prop              | Description                                                                        | Samples                            |
| ----------------- | ---------------------------------------------------------------------------------- | ---------------------------------- |
| `title`           | The title of the tab.                                                              | In each demo                       |
| `icon`            | The icon for the tab.                                                              | In each demo                       |
| `isValid`         | A boolean value indicating whether the tab is valid or not.                        | [sample](/docs/demos/validate-tab) |
| `validationError` | The validation error message to be displayed when the tab is not valid. (Function) | [sample](/docs/demos/validate-tab) |

Please refer to the component's source code or documentation for additional props and more detailed information.
