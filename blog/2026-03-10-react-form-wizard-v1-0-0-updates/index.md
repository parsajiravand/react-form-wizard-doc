---
title: React Form Wizard v1.0.0 - Major Update with Schema Support & Performance Improvements
date: March 10, 2026
tags: [React, Form Wizard, v1.0.0, Schema API, Performance, TypeScript]
authors: [parsa]
---

![React Form Wizard v1.0.0](../../static/img/undraw_docusaurus_react.svg)

# 🚀 React Form Wizard v1.0.0 - Major Update Released!

We're excited to announce the release of **React Form Wizard v1.0.0**! This major update brings significant improvements in performance, developer experience, and introduces powerful new features including **schema-based form wizards**.

## ⚠️ Important: React Version Requirements

**BREAKING CHANGE**: This version requires **React v19+**. If you're using React v18 or lower, please continue using version 0.2.7:

```bash
npm install react-form-wizard-component@0.2.7
```

Check your React version with:
```bash
npm list react
```

## 🌟 What's New in v1.0.0

### 🔥 Schema-First API (New Feature)

The biggest addition is the **Schema API** - a powerful new way to define form wizards using configuration objects instead of JSX components.

#### Before (Children API - Still Supported)
```tsx
<FormWizard title="My Wizard">
  <FormWizard.TabContent title="Step 1" icon="ti-user">
    <MyStep1Component />
  </FormWizard.TabContent>
  <FormWizard.TabContent title="Step 2" icon="ti-settings">
    <MyStep2Component />
  </FormWizard.TabContent>
</FormWizard>
```

#### After (Schema API - New!)
```tsx
const schema: FormWizardSchema = {
  initialData: { plan: "basic", accepted: false },
  steps: [
    {
      id: "plan",
      title: "Choose Plan",
      content: <PlanSelector />,
    },
    {
      id: "premium",
      title: "Premium Features",
      condition: ({ data }) => data.plan === "premium",
      content: <PremiumFeatures />,
    },
  ],
};

<FormWizard schema={schema} data={data} onDataChange={setData} />
```

### 🚀 Performance Improvements

- **React.memo** applied to core components for better re-rendering
- **useMemo** and **useCallback** optimizations for expensive computations
- **Reduced bundle size** through better tree-shaking

### ♿ Accessibility Enhancements

- **ARIA roles and attributes** for better screen reader support
- **Keyboard navigation** with arrow keys, Home, and End
- **Focus management** improvements
- **Screen reader announcements** for step changes

### 🎨 UI/UX Improvements

- **Touch-friendly interactions** with swipe gestures
- **Responsive design** improvements for mobile devices
- **High contrast support** for accessibility
- **Reduced motion support** for users with vestibular disorders

### 🛠️ Developer Experience

- **Enhanced TypeScript support** with better type inference
- **New imperative API methods** (`goToTabById`, `setData`, `getData`)
- **Improved error handling** with better validation feedback
- **Better documentation** with comprehensive examples

### 📊 Testing Infrastructure

- **Jest + React Testing Library** setup
- **Comprehensive test coverage** for all components
- **CI/CD pipeline** improvements

## 📈 Migration Guide

The Children API is still fully supported. Your existing code will continue to work without changes. The `onComplete` callback now optionally receives wizard data, and `onTabChange` includes `stepId`.

## 🎉 Getting Started

```bash
npm install react-form-wizard-component@latest
```

**⚠️ Remember: React v19+ required!**

## 📚 Resources

- [Quick Start Guide](/docs/intro)
- [v1 Demos (Schema & all features)](/docs/category/demos-v1)
- [Playground (try it live)](/docs/playground)
- [Legacy Demos (Children API)](/docs/category/demos-old)

---

*Ready to upgrade? Check out our [comprehensive examples](/docs/category/demos-v1) and [playground](/docs/playground)!* 🚀