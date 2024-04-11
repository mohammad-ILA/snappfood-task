import type { Meta, StoryObj } from "@storybook/react";
import CardSkeleton from "@/components/common/card-skeleton";

const meta = {
  title: "Components/CardSkeleton",
  component: CardSkeleton,
  parameters: {
    direction: "rtl",
  },
} satisfies Meta<typeof CardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Skeleton: Story = {
  args: {},
};
