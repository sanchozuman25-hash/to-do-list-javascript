"use client"

import { useContext, useState } from "react";
import "./page.css";
import ToDoList from "./components/todo-list";
import PieChart from "./components/chart";
import { ToDoContext } from "./components/todo-context";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const { addTodo } = useContext(ToDoContext)!

  function onChangeInput (event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  function onSubmit (event) {
    event.preventDefault()

    if(inputText === "") return
    addTodo(inputText)
    setInputText("");
  }

  return (
    <section className="container">
      <h1 className="title">To Do List</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeInput} type="text" value={inputText} />
        <button>+</button>
      </form>
      <PieChart />
      <ToDoList />
    </section>   
  );

}
