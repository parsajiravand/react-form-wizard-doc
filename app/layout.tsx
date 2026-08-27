import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE = "https://react-form-wizard-component-document.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "React Form Wizard — multi-step forms for React",
    template: "%s · React Form Wizard",
  },
  description:
    "Accessible multi-step form wizard for React 17, 18 and 19. Zero dependencies, TypeScript-first, styled or headless, with per-step validation for Zod and react-hook-form.",
  keywords: [
    "react form wizard",
    "multi-step form react",
    "react stepper",
    "react hook form wizard",
    "zod multi step form",
    "headless wizard react",
    "nextjs multi step form",
  ],
  openGraph: {
    type: "website",
    siteName: "React Form Wizard",
    url: SITE,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
