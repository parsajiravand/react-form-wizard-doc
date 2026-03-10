# React Form Wizard Docs

This repository contains the Docusaurus documentation site for `react-form-wizard-component`.

## v1.0.0 Release Notes

Version transition:

- Previous: `0.2.9`
- Current: `1.0.0`

### Phase 1: Foundation Stabilized and Modernized

- Package cleanup and distribution improvements (`package.json` exports, side effects, keywords, circular dependency removal).
- TypeScript and ESLint cleanup (removed `@ts-ignore`, fixed hook-order/deps issues, improved type safety).
- Performance updates (`React.memo`, `useMemo`, and `useCallback` in core components).
- Accessibility and UX improvements (ARIA roles/attributes, keyboard navigation with arrows/Home/End, better focus behavior, screen-reader descriptions).
- Mobile/responsive improvements (touch support, swipe navigation, reduced-motion/high-contrast friendly styles).
- Test infrastructure added/expanded with Jest + React Testing Library.

### Phase 2: Schema-first Feature Implementation

- Added schema-first runtime with compatibility bridge:
  - Supports both children API and schema API.
  - If both are provided, `schema` takes precedence.
- Added new schema type contracts:
  - `WizardData`
  - `WizardConditionContext`
  - `WizardValidationContext`
  - `WizardCondition`
  - `WizardValidation`
  - `WizardStepSchema`
  - `FormWizardSchema`
- Extended API contracts:
  - `FormWizardProps` now supports schema/data patterns.
  - `FormWizardMethods` now includes data methods and step-by-id navigation.
- Updated entry exports to include schema/type helpers and `TabContent`.
- Added schema-based examples, conditional step patterns, validation callbacks, and migration guidance in docs.

### Validation Status

Core checks from the package update are passing:

- `npm run lint`
- `npm test`
- `npm run build` (`vite build && tsc`)

Note: a non-blocking bundler warning about mixed named/default export style may still appear in `FormWizard.tsx`, but build output remains successful.

### Migration Notes for Consumers

1. Existing children-based API remains supported.
2. New schema API is available through the `schema` prop.
3. `onComplete` supports an optional wizard data payload.
4. Schema and helper types are exported from package entry.
5. If both `schema` and `children` are passed, `schema` is used.

## Docs Site Development

This website is built with [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
yarn
```

### Local development

```bash
yarn start
```

Starts a local development server and opens the docs site in your browser. Most changes are hot-reloaded.

### Build

```bash
yarn build
```

Builds static content into the `build` directory.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Without SSH:

```bash
GIT_USER=<your-github-username> yarn deploy
```

If hosted on GitHub Pages, this builds and publishes to the `gh-pages` branch.
