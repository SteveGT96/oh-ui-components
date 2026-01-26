import type { LucideIcon } from "lucide-react";

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
