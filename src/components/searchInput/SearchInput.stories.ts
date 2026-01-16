import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { SearchInput } from "./SearchInput";

const meta = {
  title: "Search/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
    width: "400%",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Search...",
    disabled: true,
    onChange: fn(),
  },
};
