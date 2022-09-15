import React, { useContext } from "react";
import Counter from "./components/Counter";
import Search from "./components/Search";
import List from "./components/List";
import ToDoItem from "./components/ToDoItem";
import CreateToDoButton from "./components/CreateToDoButton";
import Modal from "./components/Modal";
import { ToDoContext } from "./toDoContext";
import TodoForm from "./components/ToDoForm";

const AppUI = () => {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, isModalOn } =
    useContext(ToDoContext);
  return (
    <>
      <Counter />
      <Search />
      <List>
        {error && <p>desesperate, hubo un error</p>}
        {loading && <p>estamos cargando, no desesperes</p>}
        {!loading && !searchedTodos.length && <p>crea tu primer toDo</p>}
        {searchedTodos.map((todo) => (
          <ToDoItem
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </List>
      <CreateToDoButton />
      {isModalOn && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};
export default AppUI;
