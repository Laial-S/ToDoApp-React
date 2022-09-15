import React from "react";
import "./ToDoItem.css";

function ToDoItem({ onDelete, onComplete, completed, text }) {
  return (
    <li className="TodoItem">
      <button
        onClick={onComplete}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >
        √
      </button>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export default ToDoItem;
