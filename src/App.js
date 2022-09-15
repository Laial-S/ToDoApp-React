import React, { useState } from "react";
import useLocalStorage from "./hooks/index.js";
import AppUI from "./AppUI.js";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el cursso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALAA", completed: false },
// ];

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_v1", []);
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
    const newItem = [...todos];
    newItem[index].completed = true;
    saveTodos(newItem);
  };
  //* logica del delete
  const deleteTodo = (text) => {
    const index = todos.findIndex((td) => td.text === text);
    const newItem = [...todos];
    newItem.splice(index, 1);
    saveTodos(newItem);
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
