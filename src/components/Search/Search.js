import React from "react";
import "./Search.css";

function Search({ inputValue, setValue }) {
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    // <>
    <input
      onChange={onChange}
      value={inputValue}
      className="TodoSearch"
      placeholder="Cebolla"
    />
    // </>
  );
}

export default Search;
