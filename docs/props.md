---
sidebar_position: 2
title: Props
description: The props for the FormWizard component.
---
import Highlight from "../src/components/Highlight/index.js";

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
| `disableBackOnClickStep` <Highlight>v.0.2.4 </Highlight>|  A boolean value  to disable back button when click on step (tab) `default:false` `(v)   |-                                  |
| `showProggressBar` <Highlight>v.0.2.4 </Highlight>   |  A boolean value to show progress bar `default:true`  |-                                            |
| `inlineStep` <Highlight>v.0.2.4 </Highlight>       |   A boolean value to show step (tab) inline `default:false` |[sample](/docs/demos/inline-step)  |       
| `darkMode` <Highlight>v.0.2.4 </Highlight>       |   A boolean value to show dark mode `default:false`       |[sample](/docs/demos/dark-mode)      |    
| `customDarkModeColor` <Highlight>v.0.2.4 </Highlight>       |   A object value to show custom dark mode color `default: {}`                       |[sample](/docs/demos/dark-mode)    | 
| `removeBackgroundTab` <Highlight>v.0.2.4 </Highlight>       |   A boolean value to remove tab background `default:false`                       |[sample](/docs/demos/without-background-tab)   |
| `removeBackgroundTabTransparentColor` <Highlight>v.0.2.4 </Highlight>       | A string value to remove tab background transparent color `default: ''`  |[sample](/docs/demos/without-background-tab)|
| `onComplete`           | A callback function to be called when the form wizard is completed.        | In each demo                                |
| `onTabChange`          | A callback function to be called when the active tab is changed.           | [sample](/docs/demos/simple)                |

<br />

### FormWizard.TabContent Component

The `FormWizard.TabContent` component is used to define each tab's content and accepts the following props:

| Prop                                               | Description                                                                        | Samples                            |
| -----------------                                  | ---------------------------------------------------------------------------------- | ---------------------------------- |
| `title`                                            | The title of the tab.                                                              | In each demo                       |
| `icon`                                             | The icon for the tab. (string,HTML element)                                        | [sample](/docs/demos/custom-icon)  |
| `isValid`                                          | A boolean value indicating whether the tab is valid or not.                        | [sample](/docs/demos/validate-tab) |
| `validationError`                                  | The validation error message to be displayed when the tab is not valid. (Function) | [sample](/docs/demos/validate-tab) |
| `showErrorOnTab` <Highlight>v.0.2.4 </Highlight>   | A boolean value to show error message on tab `default:false`                       | [sample](/docs/demos/show-error-tab) |
| `showErrorOnTabColor` <Highlight>v.0.2.4 </Highlight>  | A string value to show error message color on tab `default:red`                | [sample](/docs/demos/show-error-tab) |

Please refer to the component's source code or documentation for additional props and more detailed information.
