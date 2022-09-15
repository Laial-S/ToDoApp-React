import React from "react";
import Counter from "./components/Counter";
import Search from "./components/Search";
import List from "./components/List";
import ToDoItem from "./components/ToDoItem";
import CreateToDoButton from "./components/CreateToDoButton";

const AppUI = ({
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
      <Search value={inputValue} setValue={setinputValue} />
      <List>
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
