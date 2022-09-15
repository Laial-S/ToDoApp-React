import React, { useContext } from "react";
import { ToDoContext } from "../../toDoContext";
import "./ToDoItem.css";

function ToDoItem(props) {
  const { deleteTodo, completeTodo } = useContext(ToDoContext);
  return (
    <li className="TodoItem">
      <button
        onClick={() => completeTodo(props.text)}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        √
      </button>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={() => deleteTodo(props.text)} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export default ToDoItem;
