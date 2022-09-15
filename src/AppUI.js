import React from "react";
import Counter from "./components/Counter";
import Search from "./components/Search";
import List from "./components/List";
import ToDoItem from "./components/ToDoItem";
import CreateToDoButton from "./components/CreateToDoButton";

const AppUI = ({
  loading,
  error,
  completedTodos,
  totalTodos,
  inputValue,
  setinputValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <>
      <Counter completedTodos={completedTodos} totalTodos={totalTodos} />
      <Search value={inputValue} setinputValue={setinputValue} />
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
    </>
  );
};
export default AppUI;
