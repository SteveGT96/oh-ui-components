import { Button } from "@/components/ui/button";
import type { ButtonProps } from "./type";

export function OptimizeButton({
  title,
  onClick,
  disabled,
  variant = "outline",
  icon: Icon,
}: ButtonProps) {
  return (
    <Button variant={variant} onClick={onClick} disabled={disabled}>
      {Icon && <Icon />}
      {title}
    </Button>
  );
}
