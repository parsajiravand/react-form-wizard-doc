import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

const GITHUB = "https://github.com/parsajiravand/react-form-wizard";
const NPM = "https://www.npmjs.com/package/react-form-wizard-component";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="font-semibold tracking-tight">React Form Wizard</span>
    ),
  },
  links: [
    { text: "Docs", url: "/docs", active: "nested-url" },
    { text: "Examples", url: "/docs/examples/checkout", active: "nested-url" },
    { text: "API", url: "/docs/api/form-wizard", active: "nested-url" },
    {
      text: "npm",
      url: NPM,
      external: true,
    },
    {
      type: "icon",
      text: "GitHub",
      label: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12v3.14c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
        </svg>
      ),
      url: GITHUB,
      external: true,
    },
  ],
  githubUrl: GITHUB,
};
