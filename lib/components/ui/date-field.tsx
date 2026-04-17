import { ChevronDownIcon } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib';

export type DateFieldProps = {
	label: string;
	fieldValue: Date | undefined;
	onChange: (value: Date | null) => void;
	disabled?: boolean;
	error?: boolean;
	helperText?: string;
	required?: boolean;
	calendarProps?: Omit<
		React.ComponentProps<typeof Calendar>,
		'onSelect' | 'selected' | 'mode'
	>;
} & React.ComponentProps<typeof PopoverTrigger>;

export function DateField({
	label,
	fieldValue,
	className,
	onChange,
	disabled = false,
	error = false,
	helperText,
	required = false,
	calendarProps,
	...props
}: DateFieldProps) {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(fieldValue);

	const handleSelection = useCallback(
		(date: Date | undefined) => {
			setDate(date);
			setOpen(false);
			onChange(date ? new Date(date) : null);
		},
		[onChange],
	);

	return (
		<div className="flex flex-col gap-3">
			<Label htmlFor="date" className="px-1">
				{label}
			</Label>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger
					asChild
					disabled={disabled}
					className={cn(
						'w-48 justify-between font-normal',
						{ 'border-destructive': error },
						className,
					)}
				>
					<Button variant="outline" id="date" {...props}>
						{date ? date.toLocaleDateString() : 'Select date'}
						<ChevronDownIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						captionLayout="dropdown"
						onSelect={handleSelection}
						{...calendarProps}
					/>
				</PopoverContent>
				{error && helperText && required && (
					<div className={cn('text-destructive text-sm')}>{helperText}</div>
				)}
			</Popover>
		</div>
	);
}
