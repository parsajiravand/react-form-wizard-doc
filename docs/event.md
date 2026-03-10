---
title: Event Handling
description: The event handling options for the FormWizard component.
sidebar_position: 3
---

## Event Handling

The `FormWizard` component provides the following event handling options:

| Event | Description |
| --- | --- |
| `onComplete` | Called when the finish action succeeds. In v1, this callback can receive optional wizard data: `(data?: WizardData) => void`. |
| `onTabChange` | Called when the active tab changes with payload `{ prevIndex, nextIndex, stepId? }`. |

### `onComplete`

`onComplete` fires after finish is triggered on a valid final step.

Example usage:

```tsx
import type { WizardData } from "react-form-wizard-component";

const handleComplete = (data?: WizardData) => {
  console.log("Wizard completed with data:", data);
};

<FormWizard onComplete={handleComplete}>{/* ... */}</FormWizard>;
```

### `onTabChange`

`onTabChange` fires whenever navigation changes the active step.

Example usage:

```tsx
const handleTabChange = ({
  prevIndex,
  nextIndex,
  stepId,
}: {
  prevIndex: number;
  nextIndex: number;
  stepId?: string;
}) => {
  console.log("Tab changed:", { prevIndex, nextIndex, stepId });
};

<FormWizard onTabChange={handleTabChange}>{/* ... */}</FormWizard>;
```

See [Props](/docs/props) for full callback signatures and related schema data props.
