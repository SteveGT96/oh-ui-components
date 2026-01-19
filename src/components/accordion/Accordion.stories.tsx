import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptimizeAccordion } from "./Accordion";

const meta = {
  title: "UI/Accordion",
  component: OptimizeAccordion,
  parameters: {
    layout: "centered",
    width: "500%",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OptimizeAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleWithParagraph: Story = {
  args: {
    title: "Single accordion with paragraph",
    collapsible: true,
    content: (
      <p className="text-sm text-muted-foreground">This is the free text.</p>
    ),
  },
};

export const SingleWithButton: Story = {
  args: {
    title: "Single accordion with button",
    collapsible: true,
    content: (
      <button className="hover:bg-gray-300 focus-visible:bg-gray-300 rounded-md px-4 py-2 text-sm font-medium transition-colors">
        Save Button
      </button>
    ),
  },
};

export const SingleWithDiv: Story = {
  args: {
    title: "Single accordion with div",
    collapsible: true,
    content: (
      <div className="gap-3">
        <h1>Compilation of elements</h1>
        <div className="flex">
          <button className="bg-gray-200 hover:bg-gray-300 focus-visible:bg-gray-300 rounded-md px-4 py-2 text-sm font-medium transition-colors m-2">
            Save
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 focus-visible:bg-gray-300 rounded-md px-4 py-2 text-sm font-medium transition-colors m-2">
            Cancel
          </button>
        </div>
      </div>
    ),
  },
};
