import ToDo from "./todo"
import { type ToDo as ToDoType } from "../types"

export default function ToDoList({toDoList, deleteTodo, setIsChecked}: {toDoList: ToDoType[], deleteTodo: (id: string) => void, setIsChecked: (id: string) => void} ) {
    return (
       <ul className="todo-list">
        {toDoList.map((todo) => {
          return <ToDo key={todo.id} text={todo.text} deleteTodo={() => deleteTodo(todo.id)} setIsChecked={() => setIsChecked(todo.id)} isChecked={todo.checked}/>
        })}
      </ul>
      )
}