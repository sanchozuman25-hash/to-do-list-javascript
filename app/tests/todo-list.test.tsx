jest.mock('uuid', () => ({ v4: jest.fn(() => '00000000-0000-0000-0000-000000000000') }));

import { ToDoContext } from "../components/todo-context";
import TodoList from "../components/todo-list";
import { prettyDOM, render } from "@testing-library/react";
import { ToDo } from "../types";

describe("Todo List", () => {
  let todoListElement: ReturnType<typeof render>

  const todos: ToDo[] = [
    { text: "Iniciar sesión en GitHub", id: '3f9a6c2e-8b41-4d7e-9a52-1c6f0b8e7a13', checked: false },
    { text: "Hacer ejercicio", id: 'b7e2d9f4-3c8a-4a61-bf25-9d0c7e1a6f42', checked: false },
    { text: "Subir repositorio", id: '91c4e7ab-5f2d-4b83-a6d1-3e9f0c2b7d58', checked: false },
  ];

  beforeEach(() => {
    todoListElement = render(
      <ToDoContext.Provider value={{
        toDoList: todos,
        addTodo: () => {},
        deleteTodo: () => {},
        setIsChecked: () => {},
        setToDoList: () => {}
      }}>
        <TodoList />
      </ToDoContext.Provider>
    );
  });

  it("renders his children", () => {
    const todoItems = todoListElement.container.querySelectorAll("li");
    expect(todoItems).toHaveLength(todos.length);
  })  
})