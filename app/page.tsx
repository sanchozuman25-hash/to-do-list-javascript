"use client"

import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./page.css";
import ToDoList from "./components/todo-list";
import { type ToDo } from "./types";
import PieChartWithCustomizedLabel from "./components/chart";
 


export default function Home() {
  const defaultToDoList: ToDo[] = [
    { text: "Iniciar sesión en GitHub", id: uuid(), checked: false },
    { text: "Hacer ejercicio", id: uuid(), checked: false },
    { text: "Subir repositorio", id: uuid(), checked: false },
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
    setToDoList([...toDoList, {text: inputText, id: uuid(), checked: false}]);
    setInputText("");
  }

  function deleteTodo(id: string) {
    setToDoList(actualTodoList => 
      actualTodoList.filter((todo) => todo.id !== id)
    )
  }

  function setIsChecked(id: string) {
    setToDoList(actualTodoList => 
      actualTodoList.map((todo) => 
        todo.id === id 
        ? {...todo, checked: !todo.checked} 
        : todo
      )
    )
  }

  function transformToDoListToPieData(toDoList: ToDo[]) {
    const data = [
      {name: "is checked", value:0},
      {name:"isn't checked",value:0}
    ]
    for(const todo of toDoList) {
      if(todo.checked) {
        data[0].value += 1
      } else {
        data[1].value += 1
      }
    }
    return data
  }

  const pieData = transformToDoListToPieData(toDoList)

  return (
    <section className="container">
      <h1 className="title">To Do List</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeInput} type="text" value={inputText} />
        <button>+</button>
      </form>
      <PieChartWithCustomizedLabel data={pieData}/>
      <ToDoList toDoList={toDoList} deleteTodo={deleteTodo} setIsChecked={setIsChecked} />
    </section>   
  );

}
