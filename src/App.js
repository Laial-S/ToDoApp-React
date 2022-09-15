import React, { useState } from "react";
import AppUI from "./AppUI.js";
import { ToDoProvider } from "./toDoContext/index.js";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el cursso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALAA", completed: false },
// ];

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
