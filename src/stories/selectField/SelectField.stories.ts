import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import SelectField from "./SelectField";

// import { SelectField } from "./SelectField";

const meta = {
  title: "Form/SelectField",
  component: SelectField,
  parameters: {
    layout: "centered",
    width: "400%",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
  argTypes: {
    fieldValue: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    errorText: {
      control: "text",
    },
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select an option",
    fieldName: "defaultSelect",
    fieldValue: "",
    isValid: false,
    errorText: "",
  },
};

export const WithValue: Story = {
  args: {
    label: "Select an option",
    fieldName: "defaultSelect",
    fieldValue: "2",
    isValid: false,
    errorText: "",
  },
};

export const WithError: Story = {
  args: {
    label: "Select an option",
    fieldName: "defaultSelect",
    fieldValue: "",
    isValid: true,
    errorText: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled field",
    disabled: true,
    fieldName: "defaultSelect",
    fieldValue: "",
    isValid: false,
    errorText: "",
  },
};
