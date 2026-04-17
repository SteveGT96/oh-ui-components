import { SearchIcon } from 'lucide-react';

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';

export type SearchInputProps = Omit<
	React.ComponentProps<typeof InputGroupInput>,
	'onChange'
> & {
	onChange: (value: string) => void;
};

export function SearchInput({
	placeholder,
	onChange,
	disabled = false,
	...props
}: SearchInputProps) {
	return (
		<InputGroup>
			<InputGroupInput
				{...props}
				placeholder={placeholder}
				onChange={(e) => onChange?.(e.target.value)}
				disabled={disabled}
			/>
			<InputGroupAddon>
				<SearchIcon />
			</InputGroupAddon>
		</InputGroup>
	);
}
