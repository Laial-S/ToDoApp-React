import React from "react";
import "./Counter.css";

function Counter({ completedTodos, totalTodos }) {
  return (
    <h2 className="TodoCounter">{`Completed ${completedTodos} of ${totalTodos}`}</h2>
  );
}

export default Counter;
