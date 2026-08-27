---
title: v1.2.0 — React 18 is back, and so are your TypeScript types
date: August 27, 2026
tags: [React, Form Wizard, Release, TypeScript, Accessibility, Headless, Zod]
authors: [parsa]
---

**React Form Wizard v1.2.0** is out. It fixes four packaging defects that each
independently blocked adoption, restores **React 17 and 18** support, and adds
a headless API, validation adapters, theming and persistence.

If you pinned `0.2.7` because v1 needed React 19 — you can upgrade now.

{/* truncate */}

## The short version

```bash
npm install react-form-wizard-component@latest
```

No breaking changes. The children API, the schema API and every existing prop
behave exactly as before.

## What was broken

Being direct about this, because some of it cost people real time.

### TypeScript users got no types at all

`package.json` pointed `types` at `dist/types/main.d.ts` — a file that was
never generated. Every TypeScript consumer hit:

```
error TS7016: Could not find a declaration file for module
  'react-form-wizard-component'
```

Worse, the docs showed `import { FormWizardSchema, WizardData }` while the
entry point only exported the component. Those types were never exported at
all.

**Fixed.** The library now builds from a real `src/main.ts` barrel that
exports the component, the hooks, the adapters and all 20 public types. Type
resolution is verified in CI under `bundler`, `node16` and `node10`.

### React 18 crashed — and it was our bug

The build config externalized `react` and `react-dom`, but **not**
`react/jsx-runtime`. So Rollup compiled React 19's *development* JSX runtime
straight into the bundle. That inlined runtime is what broke on React 18:

```
TypeError: Cannot read properties of undefined
  (reading 'recentlyCreatedOwnerStacks')
```

The component itself never used a single React 19 API. The "React 19 required"
warning in the README was working around one missing line of build config.

```diff
- external: ["react", "react-dom"],
+ external: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
```

**Fixed.** React 17, 18 and 19 all work, and each is tested in CI against the
real published tarball. The bundle also got smaller, since it is no longer
carrying a copy of React's dev runtime.

### `require()` returned an empty object

The `require` condition resolved to a UMD file that, under `"type": "module"`,
exposed nothing. Jest and older CommonJS setups got `{}`.

**Fixed.** There is a real `.cjs` build, plus a separate `.d.cts` declaration
tree so TypeScript resolves it correctly rather than reporting the package as
"masquerading as ESM".

### The package depended on itself

```json
"dependencies": { "react-form-wizard-component": "^1.0.1" }
```

**Fixed.** Zero runtime dependencies, and CI now fails if that ever changes.

### Also

- No `peerDependencies` were declared, so npm never warned about React version
  mismatches. Now `^17 || ^18 || ^19`.
- No `"use client"`, so Next.js App Router users hit *"useState only works in
  Client Components"*. It ships in every bundle now — no wrapper needed.

## What's new

### Headless `useWizard()`

The same state machine with none of the markup. `<FormWizard />` is built on
these hooks, so both APIs behave identically.

```tsx
import { useWizard } from "react-form-wizard-component";

const wizard = useWizard({ stepIds: ["account", "profile", "review"] });

wizard.next();
wizard.updateData({ email: "hi@example.com" });
```

`useWizardData` and `useWizardCursor` are exported separately, for when the
step list itself is data. [Read more →](/docs/guides/headless)

### Validation adapters for Zod and react-hook-form

Per-step validation without splitting your form:

```tsx
import { zodValidator, hookFormValidator } from "react-form-wizard-component";

validate: zodValidator(accountSchema, { pick: ["email", "password"] });
validate: hookFormValidator(form, { fields: ["street", "city"] });
```

Neither library becomes a dependency — the adapters are typed *structurally*,
so anything exposing `safeParse` works (Zod, Valibot, ArkType).
[Read more →](/docs/guides/validation)

### Theming and unstyled mode

```tsx
<FormWizard theme={{ primaryColor: "#0e6f70", borderRadius: "8px" }} />
```

Theme tokens become `--rfw-*` CSS custom properties, so overriding one value no
longer means restating a palette. Or go fully `unstyled` and bring Tailwind,
CSS modules, or your own system. [Read more →](/docs/guides/theming)

### Persistence and URL sync

```tsx
<FormWizard persist={{ key: "checkout" }} syncToUrl />
```

A refresh mid-checkout no longer loses the form.
[Read more →](/docs/guides/persistence)

### Accessibility, finished properly

- `aria-live` announcements on every step change
- Focus moves to the revealed panel (never on first paint)
- Tabs activate with <kbd>Enter</kbd> and <kbd>Space</kbd>
- **Several wizards on one page no longer fight over the arrow keys** — only
  the one containing focus responds

Earlier releases claimed "full WCAG 2.1 AA compliance". That claim has been
corrected to what is actually implemented and tested, rather than quietly kept.
[Read more →](/docs/guides/accessibility)

## How we know it works

Every defect above shared one cause: nothing ever checked the *published
artifact*. Tests ran against source, so a broken `exports` map was invisible.

CI now packs the tarball, installs it into a clean project, and does what you
do — typechecks it, imports it, requires it, server-renders it — on React 17,
18 and 19. Plus `publint`, `attw` across all four resolution modes, a bundle
size budget, and a check that compiles every documented example against the
tarball with real `zod` and `react-hook-form`.

Documentation that does not compile is now a build failure.

## Upgrading

From 1.1.x, nothing is required. Two optional cleanups:

```diff
- import "react-form-wizard-component/dist/style.css";
+ import "react-form-wizard-component/styles.css";
```

```diff
  // Next.js — the directive is in the bundle now
- "use client";
  import FormWizard from "react-form-wizard-component";
```

One behaviour change worth knowing: **`onTabChange` no longer fires on mount.**
It used to report a spurious `0 → 0` transition on the first render.

Full details in the [migration guide](/docs/migration) and the
[changelog](https://github.com/parsajiravand/react-form-wizard/blob/master/CHANGELOG.md).

## Thanks

If you hit any of the packaging bugs above and worked around them quietly —
sorry, and thank you for sticking with it. Issues and PRs are welcome on
[GitHub](https://github.com/parsajiravand/react-form-wizard).
