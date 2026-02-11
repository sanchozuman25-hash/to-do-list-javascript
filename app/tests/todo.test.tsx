import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";
import ToDo from "@/app/components/todo";

describe("Todo Component", () => {
  
  let todoElement : ReturnType<typeof render>;
  const mockDeleteTodo = jest.fn();

  const todo = {
    text: "Test Todo",
    completed: false,
  };

  beforeEach(() => {
    todoElement = render(
      <ToDo
        deleteTodo={mockDeleteTodo}
        isChecked={todo.completed}
        setIsChecked={() => {}}
        text={todo.text}
      />
    );
  });

  it("renders to do", () => {
    todoElement.getByText(todo.text);
  });

  it("clicking the delete button calls deleteTodo", () => {
    const button = todoElement.getByRole("button");
    button.click()

    expect(mockDeleteTodo).toHaveBeenCalledTimes(1)
  });

  it("checkbox is checked when isChecked is true", () => {
    todoElement.rerender(<ToDo deleteTodo={() => {}} setIsChecked={() => {}} isChecked={true} text="T" />);
    const checkbox = todoElement.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("style with checkbox checked", () => {
    todoElement.rerender(<ToDo deleteTodo={() => {}} setIsChecked={() => {}} isChecked={true} text="T" />);
    const h1 = todoElement.getByRole("heading", { level: 1 });
    expect(h1).toHaveStyle("text-decoration: line-through");
  });
});
