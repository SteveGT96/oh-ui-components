import type { LucideIcon } from "lucide-react";
import type { Button } from "../ui/button";

export interface ButtonProps extends React.ComponentProps<typeof Button> {
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
