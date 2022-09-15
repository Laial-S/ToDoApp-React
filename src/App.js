import React, { useState } from "react";
import AppUI from "./AppUI.js";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el cursso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALAA", completed: false },
// ];
function App() {
  //*localStorage
  //creamos una version de localStorage donde se van a guardar nuestros todos
  const localStorageTodos = localStorage.getItem("TODOS_v1");
  //creamos una variable para luego guardar nuestros todos parseados
  let parsedTodo;
  // si todavia no hay ningun toDo creado entonces
  if (!localStorageTodos) {
    // creamos en localStorage un array vacio y
    localStorage.setItem("TODOS_v1", JSON.stringify([]));
    // asignamos a parsedTodo ese array vacio
    parsedTodo = [];
    console.log("storage vacio");
  } else {
    // sino
    //asignamos a parsedTodo la version parseada de localStorageTodos que serian nuestros todos ya creados
    parsedTodo = JSON.parse(localStorageTodos);
    console.log(parsedTodo, "storage actual");
  }
  //y el estado inicial de todos pasa a ser parsedTodos.
  const [todos, setTodos] = useState(parsedTodo);
  const [inputValue, setinputValue] = useState("");
  const completedTodos = todos.filter((t) => t.completed).length;
  const totalTodos = todos.length;
  //* aca van a estar todos lad busquedas que se puedieron hacer
  let searchedTodos = [];
  if (!inputValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((td) => {
      const todoValue = td.text.toLowerCase();
      const valueValue = inputValue.toLowerCase();
      return todoValue.includes(valueValue);
    });
  }
  //* logica del checked
  const completeTodo = (text) => {
    const index = todos.findIndex((td) => td.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = true;
    saveTodos(newTodos);
  };
  //creamos una funcion para guardar el estado en localStorage
  const saveTodos = (newTodos) => {
    const todosStringified = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_v1", todosStringified);
    setTodos(newTodos);
  };
  //* logica del delete
  const deleteTodo = (text) => {
    const index = todos.findIndex((td) => td.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <AppUI
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        value={inputValue}
        setValue={setinputValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
