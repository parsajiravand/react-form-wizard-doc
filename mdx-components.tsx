import defaultComponents from "fumadocs-ui/mdx";
import { Callout } from "fumadocs-ui/components/callout";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Callout,
    Tabs,
    Tab,
    Steps,
    Step,
    Accordion,
    Accordions,
    // `kbd` appears throughout the accessibility docs.
    kbd: (props) => (
      <kbd
        {...props}
        className="rounded border border-fd-border bg-fd-muted px-1.5 py-0.5 text-[0.8125rem] font-medium"
      />
    ),
    ...components,
  };
}
