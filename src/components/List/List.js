import React from "react";
import "./List.css";

function List(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export default List;
