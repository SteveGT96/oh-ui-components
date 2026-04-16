import type { ReactNode } from "react";

export interface CustomAccordionProps {
  title: string;
  collapsible?: boolean;
  content: ReactNode;
}
