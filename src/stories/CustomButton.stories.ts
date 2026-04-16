import { CustomButton } from "@/lib/components/ui/CustomButton";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUpIcon } from "lucide-react";
import { fn } from "storybook/test";

const meta = {
  title: "Components/Button",
  component: CustomButton,
  parameters: {
    layout: "centered",
    width: "400%",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    title: { control: "text" },
    variant: {
      control: "text",
    },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Button",
    onClick: fn(),
  },
};

export const withIcone: Story = {
  args: {
    title: "Button",
    onClick: fn(),
    icon: ArrowUpIcon,
  },
};

export const Disabled: Story = {
  args: {
    title: "Button",
    disabled: true,
    onClick: fn(),
  },
};
