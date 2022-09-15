import React, { useContext } from "react";
import { ToDoContext } from "../../toDoContext";
import "./CreateToDoButton.css";

function CreateToDoButton() {
  const { isModalOn, setModalOn } = useContext(ToDoContext);
  const onClickButton = () => {
    setModalOn(!isModalOn);
  };
  return (
    <button onClick={onClickButton} className="CreateTodoButton">
      +
    </button>
  );
}

export default CreateToDoButton;
