import React, { useContext } from "react";
import { ToDoContext } from "../../toDoContext";
import "./ToDoItem.css";

function ToDoItem() {
  const { onDelete, onComplete, completed, text } = useContext(ToDoContext);
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
