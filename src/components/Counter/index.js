import React, { useContext } from "react";
import { ToDoContext } from "../../toDoContext";
import "./Counter.css";

function Counter() {
  const { completedTodos, totalTodos } = useContext(ToDoContext);
  return (
    <h2 className="TodoCounter">{`Completed ${completedTodos} of ${totalTodos}`}</h2>
  );
}

export default Counter;
