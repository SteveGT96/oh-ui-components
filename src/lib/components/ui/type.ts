import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface SearchInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export interface CustomButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: LucideIcon;
}

export interface CustomAccordionProps {
  title: string;
  collapsible?: boolean;
  content: ReactNode;
}
