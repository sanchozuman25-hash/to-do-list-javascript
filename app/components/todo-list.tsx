import ToDo from "./todo"

export default function ToDoList({toDoList, deleteTodo}: {toDoList: {text: string, id: string}[], deleteTodo: (id: string) => void}) {
    return (
       <ul className="todo-list">
        {toDoList.map((todo) => {
          return <ToDo key={todo.id} text={todo.text} deleteTodo={() => deleteTodo(todo.id)} />
        })}
      </ul>
      )
}