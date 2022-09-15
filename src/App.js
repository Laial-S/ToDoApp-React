// import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import CreateToDoButton from "./components/CreateToDoButton/CreateToDoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];
function App() {
  const [todos, setTodos] = useState(defaultTodos);
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
    setTodos(newTodos);
  };
  //* logica del delete
  const deleteTodos = (text) => {
    const index = todos.findIndex((td) => td.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <Counter completedTodos={completedTodos} totalTodos={totalTodos} />
      <Search value={inputValue} setValue={setinputValue} />
      <List>
        {searchedTodos.map((todo) => (
          <ToDoItem
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </List>
      <CreateToDoButton />
    </div>
  );
}

export default App;
