import React from "react";
import "./Search.css";

function Search({ inputValue, setinputValue }) {
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
