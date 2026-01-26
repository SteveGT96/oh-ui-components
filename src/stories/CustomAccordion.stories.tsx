import { cn } from "@/lib";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomAccordion } from "../lib/components/ui/CustomAccordion";

const meta = {
  title: "Components/Accordion",
  component: CustomAccordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Single accordion with paragraph",
    collapsible: true,
    content:
      "This is the default content of the accordion. You can put any ReactNode here, such as text, images, or other components.",
  },
};

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
      <button
        className={cn(
          "border-ring border hover:bg-ring focus-visible:bg-ring rounded-md px-4 py-2 text-sm font-medium transition-colors",
        )}
      >
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
