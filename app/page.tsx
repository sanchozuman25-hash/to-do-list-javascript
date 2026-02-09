"use client"

import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import ToDo from "./components/todo";
import "./page.css";
 
type ToDo = { 
  text: string
  id: string
}

export default function Home() {
  const defaultToDoList: ToDo[] = [
    { text: "Iniciar sesión en GitHub", id: uuid() },
    { text: "Hacer ejercicio", id: uuid() },
    { text: "Subir repositorio", id: uuid() },
  ];

  const [toDoList, setToDoList] = useState<ToDo[]>(defaultToDoList)
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("toDoList");
      if (saved) {
        const parsed = JSON.parse(saved);
        const id = window.setTimeout(() => setToDoList(parsed), 0);
        return () => clearTimeout(id);
      }
    } catch {}
  }, []);

  useEffect(() => {
    window.localStorage.setItem("toDoList", JSON.stringify(toDoList))
  }, [toDoList])


  function onChangeInput (event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  function onSubmit (event) {
    event.preventDefault()

    if(inputText === "") return
    setToDoList([...toDoList, {text: inputText, id: uuid()}]);
    setInputText("");
  }

  function deleteTodo(id: string) {
    setToDoList(actualTodoList => 
      actualTodoList.filter((todo) => todo.id !== id)
    )
  }

  return (
    <section className="container">
      <h1 className="title">To Do List</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeInput} type="text" value={inputText} />
        <button>+</button>
      </form>
      

      <ul className="todo-list">
        {toDoList.map((todo) => {
          return <ToDo key={todo.id} text={todo.text} deleteTodo={() => deleteTodo(todo.id)} />
        })}
      </ul>
    </section>
  );

}
