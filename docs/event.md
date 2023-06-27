---
title: Event Handling
description: The event handling options for the FormWizard component.
sidebar_position: 3
---
## Event Handling

The `FormWizard` component provides the following event handling options:

| Event             | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| `onComplete`      | A callback function that is called when the form wizard is completed.  |
| `onTabChange`     | A callback function that is called when the active tab is changed.     |

### `onComplete`

The `onComplete` event is triggered when the form wizard is completed. You can assign a callback function to this event prop to perform any desired actions upon completion.

Example usage:

```jsx
<FormWizard onComplete={handleFormWizardComplete}>
  {/* ... */}
</FormWizard>
```

In the above example, `handleFormWizardComplete` is a function that will be called when the form wizard is completed.

### `onTabChange`

The `onTabChange` event is triggered when the active tab in the form wizard is changed. You can assign a callback function to this event prop to perform any desired actions when the active tab changes.

Example usage:

```jsx
<FormWizard onTabChange={handleTabChange}>
  {/* ... */}
</FormWizard>
```

In the above example, `handleTabChange` is a function that will be called when the active tab changes in the form wizard.

You can define these event handling functions in your component and implement any logic or functionality according to your requirements.

Make sure to check the documentation or source code of the `FormWizard` component for additional details and available parameters for these event handling options.