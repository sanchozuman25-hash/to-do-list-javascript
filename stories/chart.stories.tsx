import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Chart from '@/app/components/chart'
import ToDoProvider from '@/app/components/todo-context'
 
const meta = {
  component: Chart,
  decorators: [
    (Story) => (
      <ToDoProvider>
        <Story />
      </ToDoProvider>
    ),
  ],
} satisfies Meta<typeof Chart>;
 
export default meta;

// 👇 Type helper to reduce boilerplate 
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "hola mundo"
  },
}