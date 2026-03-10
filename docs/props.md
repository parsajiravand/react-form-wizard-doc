---
sidebar_position: 2
title: Props
description: The props for the FormWizard component.
---

### FormWizard Component

| Prop | Description | Sample |
| --- | --- | --- |
| `title` | Wizard title (string or React node). | [v1 basic](/docs/demos-v1/basic-children-api) |
| `subtitle` | Optional wizard subtitle text. | [v1 basic](/docs/demos-v1/basic-children-api) |
| `shape` | Tab shape (`circle` or `square`). | [v1 square shape](/docs/demos-v1/square-shape) |
| `color` | Main accent color for tabs and progress visuals. | [v1 custom colors](/docs/demos-v1/custom-colors) |
| `children` | Legacy/children API content using `FormWizard.TabContent`. | [v1 basic](/docs/demos-v1/basic-children-api) |
| `schema` | Schema API definition (`FormWizardSchema`). If both `schema` and `children` are passed, `schema` is used. | [v1 schema api](/docs/demos-v1/schema-api) |
| `data` | Controlled wizard data object for schema mode. | [v1 conditional steps](/docs/demos-v1/conditional-steps-schema) |
| `onDataChange` | Callback fired when wizard data changes in schema mode. | [v1 schema api](/docs/demos-v1/schema-api) |
| `nextButtonText` | Text label for next button. | [v1 progress bar](/docs/demos-v1/progress-bar-default) |
| `nextButtonTemplate` | Custom renderer for next button. Receives a `next` callback. | [v1 custom button templates](/docs/demos-v1/custom-button-templates) |
| `backButtonText` | Text label for back button. | [v1 progress bar](/docs/demos-v1/progress-bar-default) |
| `backButtonTemplate` | Custom renderer for back button. Receives a `back` callback. | [v1 custom button templates](/docs/demos-v1/custom-button-templates) |
| `finishButtonText` | Text label for finish button. | [v1 progress bar](/docs/demos-v1/progress-bar-default) |
| `finishButtonTemplate` | Custom renderer for finish button. Receives a `finish` callback. | [v1 custom button templates](/docs/demos-v1/custom-button-templates) |
| `stepSize` | Step size: `xs`, `sm`, `md`, `lg`. | [v1 step sizes](/docs/demos-v1/different-step-sizes) |
| `layout` | Layout direction: `horizontal` or `vertical`. | [v1 vertical layout](/docs/demos-v1/vertical-layout) |
| `startIndex` | Initial active step index. | [legacy step index](/docs/demos/step-index) |
| `disableBackOnClickStep` | Prevents clicking ahead/back by tab selection when enabled. | [v1 complete showcase](/docs/demos-v1/complete-feature-showcase) |
| `showProgressBar` | Toggle progress bar between completed steps. Default: `true`. | [v1 progress bar](/docs/demos-v1/progress-bar-default) |
| `inlineStep` | Compact inline step layout. Default: `false`. | [v1 inline steps](/docs/demos-v1/inline-steps) |
| `darkMode` | Enables dark mode visuals. Default: `false`. | [v1 dark mode](/docs/demos-v1/dark-mode) |
| `customDarkModeColor` | Custom dark mode color tokens object. | [v1 dark mode](/docs/demos-v1/dark-mode) |
| `removeBackgroundTab` | Removes default tab background fill. | [legacy remove tab bg](/docs/demos/without-background-tab) |
| `removeBackgroundTabTransparentColor` | Background color to apply under transparent tab icons. | [legacy remove tab bg](/docs/demos/without-background-tab) |
| `onComplete` | Called on finish. In v1, can receive optional wizard data payload: `(data?: WizardData) => void`. | [v1 schema api](/docs/demos-v1/schema-api) |
| `onTabChange` | Called when active step changes with `{ prevIndex, nextIndex, stepId? }`. | [v1 basic](/docs/demos-v1/basic-children-api) |

<br />

### FormWizard.TabContent Component

The `FormWizard.TabContent` component is used to define each tab's content and accepts the following props:

| Prop | Description | Sample |
| --- | --- | --- |
| `id` | Optional stable step id for imperative navigation and accessibility mapping. | [v1 complete showcase](/docs/demos-v1/complete-feature-showcase) |
| `title` | Tab title text. | [v1 basic](/docs/demos-v1/basic-children-api) |
| `icon` | Tab icon (`string` class name or React node). | [v1 custom react icons](/docs/demos-v1/custom-icons-react-elements) |
| `condition` | Optional condition function to decide if a step is visible. | [v1 conditional steps](/docs/demos-v1/conditional-steps-schema) |
| `validate` | Optional validation function returning `true` or an error message. | [v1 validation](/docs/demos-v1/validation-with-error-display) |
| `isValid` | Legacy boolean validity flag for tab content. | [v1 validation](/docs/demos-v1/validation-with-error-display) |
| `validationError` | Function called when invalid step blocks navigation. | [v1 validation](/docs/demos-v1/validation-with-error-display) |
| `showErrorOnTab` | Shows visual error style on the tab when invalid. | [v1 validation](/docs/demos-v1/validation-with-error-display) |
| `showErrorOnTabColor` | Error color for tab icon/title/progress border. | [v1 validation](/docs/demos-v1/validation-with-error-display) |

### v1 Schema Types

Schema mode introduces these exported helpers:

- `WizardData`
- `WizardConditionContext`
- `WizardValidationContext`
- `WizardCondition`
- `WizardValidation`
- `WizardStepSchema`
- `FormWizardSchema`

For callback details, see [Events](/docs/event). For imperative methods, see [References](/docs/refrence).
