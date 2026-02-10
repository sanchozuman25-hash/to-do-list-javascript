import ToDoList from "@/app/components/todo-list";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/app/page.css"
import "@/app/globals.css"
import { ToDoContext } from "@/app/components/todo-context";

const meta = {
  component: ToDoList,
  decorators: [
    (Story, context) => (
      <ToDoContext.Provider value={{
        toDoList: context.args?.todoList || [],
        setToDoList: () => {},
        deleteTodo: () => {},
        setIsChecked: () => {},
        addTodo: () => {},
      }}>
        <Story />
      </ToDoContext.Provider>
    ),
  ],
} satisfies Meta<typeof ToDoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    todoList: [
      { text: "Iniciar sesión en GitHub", id: "1", checked: false },
      { text: "Hacer ejercicio", id: "2", checked: true },
      { text: "Subir repositorio", id: "3", checked: false },
    ]
  },
}