import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type CustomButtonProps = {
	variant?:
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link';
	title: string;
	onClick?: () => void;
	disabled?: boolean;
	icon?: LucideIcon;
} & React.ComponentProps<typeof Button>;

export function CustomButton({
	title,
	onClick,
	disabled,
	variant = 'outline',
	icon: Icon,
	...props
}: CustomButtonProps) {
	return (
		<Button variant={variant} onClick={onClick} disabled={disabled} {...props}>
			{Icon && <Icon />}
			{title}
		</Button>
	);
}
