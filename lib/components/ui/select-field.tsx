import { useState } from 'react';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib';

export type SelectOption = {
	label: string;
	value: string;
};

export type SelectFieldProps = {
	fieldName: string;
	label: string;
	placeholder?: string;
	options: SelectOption[];
	isValid?: boolean;
	fieldValue?: string;
	required?: boolean;
	disabled?: boolean;
	errorText?: string;
	onChange: (value: string) => void;
} & React.ComponentProps<typeof SelectTrigger>;

export function SelectField({
	fieldName,
	label,
	placeholder = 'Select an option',
	options,
	fieldValue,
	isValid = true,
	required = false,
	disabled = false,
	errorText,
	onChange,
	className,
	...props
}: SelectFieldProps) {
	const [value, setValue] = useState<string | undefined>(fieldValue);

	return (
		<div className="w-full max-w-sm">
			<Field>
				<FieldLabel>{label}</FieldLabel>
				<Select
					value={value}
					onValueChange={(value) => {
						setValue(value);
						onChange(value);
					}}
					disabled={disabled}
					name={fieldName}
				>
					<SelectTrigger
						className={cn(
							'border rounded-md transition-colors duration-200 hover:border-ring ',
							{
								'border-destructive hover:border-destructive focus:border-destructive focus-visible:border-destructive':
									!isValid,
							},
							className,
						)}
						{...props}
					>
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>
					<SelectContent>
						{options.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{!isValid && required && (
					<FieldDescription className="destructive">
						{errorText}
					</FieldDescription>
				)}
			</Field>
		</div>
	);
}
