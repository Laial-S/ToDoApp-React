import React, { useContext, useState } from "react";
import { ToDoContext } from "../../toDoContext";
import "./ToDoForm.css";

const TodoForm = () => {
  const { isModalOn, setModalOn, addTodo } = useContext(ToDoContext);
  const [localValue, setLocalValue] = useState("");
  const onChange = (e) => {
    setLocalValue(e.target.value);
  };
  const onCancel = () => {
    setModalOn(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(localValue);
    setModalOn(false);
    setLocalValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={localValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
