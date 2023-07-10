---
sidebar_position: 2
title: Props
description: The props for the FormWizard component.
---

### FormWizard Component

| Prop               | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `title`            | The title of the form wizard. It can be a string or a ReactNode.           |
| `subtitle`         | The subtitle or description of the form wizard.                            |
| `shape`            | The shape of the wizard tabs (e.g., "circle", "square").                   |
| `color`            | The color of the wizard tabs and progress bar.                             |
| `children`         | The content of the form wizard, including the form tabs and their content. |
| `nextButtonText`   | The text for the "Next" button.                                            |
| `backButtonText`   | The text for the "Back" button.                                            |
| `finishButtonText` | The text for the "Finish" button.                                          |
| `stepSize`         | The size of the steps (e.g., "xs", "sm", "md", "lg").                      |
| `layout`           | The layout of the form wizard (e.g., "horizontal", "vertical").            |
| `startIndex`       | The index started default is 0                                             |
| `onComplete`       | A callback function to be called when the form wizard is completed.        |
| `onTabChange`      | A callback function to be called when the active tab is changed.           |

<br />

### FormWizard.TabContent Component

The `FormWizard.TabContent` component is used to define each tab's content and accepts the following props:

| Prop              | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `title`           | The title of the tab.                                                   |
| `icon`            | The icon for the tab.                                                   |
| `isValid`         | A boolean value indicating whether the tab is valid or not.             |
| `validationError` | The validation error message to be displayed when the tab is not valid. (Function) |

Please refer to the component's source code or documentation for additional props and more detailed information.
