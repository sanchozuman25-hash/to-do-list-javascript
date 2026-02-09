import ToDo from "./todo"
import { useContext } from "react"
import { ToDoContext } from "./todo-context"

export default function ToDoList() {
  const {toDoList, deleteTodo, setIsChecked}= useContext(ToDoContext)!
  
  return (
      <ul className="todo-list">
      {toDoList.map((todo) => {
        return <ToDo key={todo.id} text={todo.text} deleteTodo={() => deleteTodo(todo.id)} setIsChecked={() => setIsChecked(todo.id)} isChecked={todo.checked}/>
      })}
    </ul>
  )
}