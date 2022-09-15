// import "./App.css";
import React from "react";
import Counter from "./components/Counter/Counter";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import CreateToDoButton from "./components/CreateToDoButton/CreateToDoButton";

function App() {
  const todos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar el cursso de intro a React", completed: false },
    { text: "Llorar con la llorona", completed: false },
    { text: "LALALALAA", completed: false },
  ];
  return (
    <div>
      <Counter />
      <Search />
      <List>
        {todos.map((todo) => (
          <ToDoItem
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
