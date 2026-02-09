'use client'
import { createContext, ReactNode, useEffect, useState } from "react"
import { ToDo } from "../types";
import { v4 as uuid } from "uuid";

type ToDoContextType = {
  toDoList: ToDo[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
  deleteTodo: (id: string) => void;
  setIsChecked: (id: string) => void;
  addTodo: (text: string) => void;
}

export const ToDoContext = createContext<ToDoContextType | undefined>(undefined)

export default function ToDoProvider ({children}: {children: ReactNode}) {
  const defaultToDoList: ToDo[] = [
    { text: "Iniciar sesión en GitHub", id: uuid(), checked: false },
    { text: "Hacer ejercicio", id: uuid(), checked: false },
    { text: "Subir repositorio", id: uuid(), checked: false },
  ];

  const [toDoList, setToDoList] = useState<ToDo[]>(defaultToDoList)

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

  function addTodo (text: string) {
    setToDoList([...toDoList, {text, id: uuid(), checked: false}]);
  }
    
  return <ToDoContext.Provider value={{toDoList, setToDoList, deleteTodo, setIsChecked, addTodo}}>
    {children}
  </ToDoContext.Provider>
}
