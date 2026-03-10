---
title: Introducing Schema API - Revolutionize Your React Form Wizards
date: March 11, 2026
tags: [React, Form Wizard, Schema API, TypeScript, Dynamic Forms, Conditional Logic]
authors: [parsa]
---

![Schema API Banner](../../static/img/undraw_docusaurus_tree.svg)

# 🎯 Introducing Schema API - The Future of React Form Wizards

**React Form Wizard v1.0.0** introduces the **Schema API** - a powerful new way to define form wizards using configuration objects instead of JSX components.

## 🚀 What is Schema API?

Schema API lets you define your entire wizard with a **configuration object** instead of nested JSX. Benefits:

- **🎯 Declarative** - Define logic in plain JavaScript objects
- **🔄 Dynamic steps** - Show/hide steps based on form data
- **📊 Data-driven** - Centralized form state
- **🔧 Type-safe** - Full TypeScript support

## 📋 Schema API vs Children API

### Traditional Children API (Still Supported)
```tsx
<FormWizard title="Registration" onComplete={handleComplete}>
  <FormWizard.TabContent title="Personal Info" icon="ti-user">
    <PersonalInfoForm />
  </FormWizard.TabContent>
  <FormWizard.TabContent title="Payment" icon="ti-credit-card" isValid={paymentValid}>
    <PaymentForm />
  </FormWizard.TabContent>
</FormWizard>
```

### Schema API (New)
```tsx
const schema: FormWizardSchema = {
  initialData: { plan: "basic", paymentMethod: "", acceptedTerms: false },
  steps: [
    {
      id: "personal",
      title: "Personal Info",
      icon: "ti-user",
      content: <PersonalInfoForm />,
    },
    {
      id: "payment",
      title: "Payment",
      icon: "ti-credit-card",
      validate: ({ data }) => data.paymentMethod ? true : "Select payment method",
      content: <PaymentForm />,
    },
    {
      id: "premium",
      title: "Premium Features",
      condition: ({ data }) => data.plan === "premium",
      content: <PremiumFeatures />,
    },
  ],
};

<FormWizard schema={schema} data={data} onDataChange={setData} onComplete={handleComplete} />
```

## 🎯 Key Features

- **Conditional steps** - Show steps based on `condition: ({ data }) => ...`
- **Validation** - Per-step validation with `validate: ({ data }) => true | "error message"`
- **Dynamic content** - Content can be functions: `content: ({ data }) => <div>...</div>`

## 🔗 Try It Live

### Playground
Experiment in our [**Playground**](/docs/playground) - embed CodeSandbox examples.

### Demo Gallery
Explore [**all v1 demos**](/docs/category/demos-v1):

- [Basic Schema API](/docs/demos-v1/schema-api)
- [Conditional Steps](/docs/demos-v1/conditional-steps-schema)
- [Validation with Error Display](/docs/demos-v1/validation-with-error-display)
- [Imperative API](/docs/demos-v1/imperative-api)
- [Complete Feature Showcase](/docs/demos-v1/complete-feature-showcase)

## 🚀 Getting Started

```bash
npm install react-form-wizard-component@latest
```

**React v19+ required!**

```tsx
import { FormWizard, FormWizardSchema, WizardData } from 'react-form-wizard-component';

const schema: FormWizardSchema = {
  initialData: {},
  steps: [
    { id: "step1", title: "Step 1", content: <div>Your content</div> },
  ],
};

<FormWizard schema={schema} data={data} onDataChange={setData} />
```

## 📚 Resources

- [Schema API Demo](/docs/demos-v1/schema-api)
- [All v1 Demos](/docs/category/demos-v1)
- [Playground](/docs/playground)
- [Props Reference](/docs/props)

---

*Ready to try it? Visit the [Playground](/docs/playground) or [Schema API demo](/docs/demos-v1/schema-api)!* 🚀