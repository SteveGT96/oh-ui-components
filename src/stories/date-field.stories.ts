import type { Meta, StoryObj } from '@storybook/react';

import { DateField } from '@/components/ui/date-field';

const meta: Meta<typeof DateField> = {
	title: 'Components/DateField',
	component: DateField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateField>;

export const Default: Story = {
	args: {
		label: 'Date field',
		fieldValue: undefined,
	},
};

export const WithValue: Story = {
	args: {
		label: 'Date field',
		fieldValue: new Date('1998-06-12'),
	},
};

export const Disabled: Story = {
	args: {
		label: 'Date field',
		fieldValue: undefined,
		disabled: true,
	},
};

export const WithError: Story = {
	args: {
		label: 'Date field',
		fieldValue: undefined,
		error: true,
		helperText: 'Invalid Date',
		required: true,
	},
};
