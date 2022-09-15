import React, { useContext } from "react";
import { ToDoContext } from "../../toDoContext";
import "./Search.css";

function Search() {
  const { inputValue, setinputValue } = useContext(ToDoContext);
  const onChange = (e) => {
    setinputValue(e.target.value);
  };
  return (
    <input
      onChange={onChange}
      value={inputValue}
      className="TodoSearch"
      placeholder="Cebolla"
    />
  );
}

export default Search;
