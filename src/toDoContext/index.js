import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ToDoContext = React.createContext();

const ToDoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_v1", []);
  const [isModalOn, setModalOn] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const completedTodos = todos.filter((t) => t.completed).length;
  const totalTodos = todos.length;

  // aca van a estar todos lad busquedas que se puedieron hacer
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
  //* logica de crear todo
  const addTodo = (text) => {
    const newItem = [...todos];
    newItem.push({ completed: false, text });

    saveTodos(newItem);
  };
  //* logica del checked
  const completeTodo = (text) => {
    const index = todos.findIndex((td) => td.text === text);
    console.log(index);
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
    <ToDoContext.Provider
      value={{
        addTodo,
        completedTodos,
        completeTodo,
        deleteTodo,
        error,
        inputValue,
        isModalOn,
        loading,
        searchedTodos,
        setinputValue,
        setModalOn,
        totalTodos,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
