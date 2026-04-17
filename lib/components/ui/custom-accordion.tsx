import type { ReactNode } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export type CustomAccordionProps = Omit<
	React.ComponentProps<typeof Accordion>,
	'content' | 'type' | 'value' | 'defaultValue' | 'onValueChange'
> & {
	collapsible?: boolean;
	title: string;
	content: ReactNode;
};

export function CustomAccordion({
	title,
	content,
	className,
	...props
}: CustomAccordionProps) {
	return (
		<Accordion
			type={'single'}
			value="item-1"
			defaultValue="item-1"
			className={cn('max-w-lg', className)}
			{...props}
		>
			<AccordionItem value="item-1">
				<AccordionTrigger>{title}</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance">
					{content}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
