import React, { useContext } from "react";
import ReactDOM from "react-dom";
// import { ToDoContext } from "../../toDoContext";
import "./Modal.css";

const Modal = ({ children }) => {
  // const {isModalOn} = useContext(ToDoContext);
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export default Modal;
