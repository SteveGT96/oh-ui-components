import { Button } from "@/components/ui/button";
import type { CustomButtonProps } from "./type";

export function CustomButton({
  title,
  onClick,
  disabled,
  variant = "outline",
  icon: Icon,
}: CustomButtonProps) {
  return (
    <Button variant={variant} onClick={onClick} disabled={disabled}>
      {Icon && <Icon />}
      {title}
    </Button>
  );
}
