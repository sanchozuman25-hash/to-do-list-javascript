"use client"

import { useState } from "react";

export default function Home() {
  const [arrayToDoList, setArrayToDoList] = useState(["Iniciar sesión en GitHub", "Hacer ejercicio", "Subir respositorio"]);
  let valorLeido

  function onChangeInput (event) {
    console.log(event.target.value);
    valorLeido = event.target.value
  }

  function onClickButton () {
    setArrayToDoList([...arrayToDoList, valorLeido])
  }

  return (
    <div>
      <h1>Lista de cosas que hacer</h1>
      <input onChange={onChangeInput} type="text" />
      <button onClick={onClickButton}>+</button>

      {arrayToDoList.map((valor, index) => {
        return <div className="Tick" key={index}><input type="checkbox" /><h1>{valor}</h1></div>
      })
      }
    </div>
  );

}
