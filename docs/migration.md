---
sidebar_position: 10
title: Migration
description: Upgrading to v1.2.0 from 1.1.x or 0.2.x.
---

# Migration

## From 1.1.x → 1.2.0

**No breaking changes.** The children API, the schema API and every existing
prop behave as before. Upgrade and nothing needs touching.

Optional cleanups:

```diff
- import "react-form-wizard-component/dist/style.css";
+ import "react-form-wizard-component/styles.css";
```

```diff
  // Next.js App Router — the directive is now in the published bundle
- "use client";
  import FormWizard from "react-form-wizard-component";
```

### Things that were broken and now are not

If you worked around any of these, you can remove the workaround:

| Symptom | Cause | Status |
| --- | --- | --- |
| `TS7016: Could not find a declaration file` | `types` pointed at a file that was never generated | Fixed — types ship and are CI-verified |
| `import { FormWizardSchema }` failed | Documented types were never exported from the entry | Fixed — all public types export from one barrel |
| `require()` returned `{}` | The `require` condition resolved to a UMD file that exposed nothing | Fixed — real CJS build |
| Crash on React 18 | React 19's JSX runtime was compiled into the bundle | Fixed — React is fully external |
| `useState only works in Client Components` | No `"use client"` directive | Fixed — shipped in all bundles |
| Two wizards both moved on one arrow key | Keyboard listener was page-wide | Fixed — scoped to the focused wizard |

### Small behaviour changes

- **`onTabChange` no longer fires on mount.** It previously reported a
  `0 → 0` transition on the first render. If you relied on that to initialise
  something, do it directly instead.
- **An out-of-range `startIndex` is clamped on the first render** rather than
  briefly rendering an empty panel.

## From 0.2.7 → 1.2.0

If you pinned `0.2.7` because v1 required React 19 — **you can upgrade now.**
React 18 (and 17) support was restored in 1.2.0. The incompatibility was a
build-configuration bug, not a limitation of the component.

Two API changes carried over from 1.0.0:

```diff
- const handleComplete = () => {};
+ const handleComplete = (data?: WizardData) => {};
```

```diff
- const handleTabChange = ({ prevIndex, nextIndex }) => {};
+ const handleTabChange = ({ prevIndex, nextIndex, stepId }) => {};
```

Everything else in the children API is unchanged. What you gain:

- [Schema API](/docs/demos-v1/schema-api) with conditional steps
- [Validation adapters](/docs/validation) for Zod and react-hook-form
- [Headless `useWizard()`](/docs/headless)
- [Theming](/docs/theming) and unstyled mode
- [Persistence and URL sync](/docs/persistence)
- [Accessibility](/docs/accessibility) — ARIA, live regions, keyboard
- Correct TypeScript types, working `require()`, and `"use client"`

## From 1.0.0 / 1.1.x on React 19

Nothing to do. React 19 remains fully supported and is covered by CI alongside
17 and 18.

## Checking your upgrade

```bash
npm install react-form-wizard-component@latest
npx tsc --noEmit   # types now resolve — this used to fail
```

If something regressed, please
[open an issue](https://github.com/parsajiravand/react-form-wizard/issues) with
your React version and bundler.
