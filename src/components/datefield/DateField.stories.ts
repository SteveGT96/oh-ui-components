import type { Meta, StoryObj } from "@storybook/react";

import { DateField } from "./DateField";

const meta: Meta<typeof DateField> = {
  title: "Form/DateField",
  component: DateField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateField>;

export const Default: Story = {
  args: {
    label: "Birth date",
    fieldValue: undefined,
  },
};

export const WithValue: Story = {
  args: {
    label: "Birth date",
    fieldValue: new Date("1998-06-12"),
  },
};

export const Disabled: Story = {
  args: {
    label: "Birth date",
    fieldValue: undefined,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Birth date",
    fieldValue: undefined,
    error: true,
    helperText: "Invalid Date",
    required: true,
  },
};
