import ToDo from "@/app/components/todo";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/app/page.css"
import "@/app/globals.css"

const meta = {
  component: ToDo,
} satisfies Meta<typeof ToDo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "holaaaaa"
  },
}