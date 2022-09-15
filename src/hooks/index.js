import React, { useState } from "react";

export default function useLocalStorage(itemName, initialValue) {
  //*localStorage
  //creamos una version de localStorage donde se van a guardar nuestros todos
  const localStorageItem = localStorage.getItem(itemName);
  //creamos una variable para luego guardar nuestros todos parseados
  let parsedItem;
  // si todavia no hay ningun toDo creado entonces
  if (!localStorageItem) {
    // creamos en localStorage un array vacio y
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    // asignamos a parsedItem ese array vacio
    parsedItem = initialValue;
  } else {
    // sino
    //asignamos a parsedItem la version parseada de localStorageItem que serian nuestros todos ya creados
    parsedItem = JSON.parse(localStorageItem);
  }
  //y el estado inicial de todos pasa a ser parsedItems.
  const [item, setItem] = useState(parsedItem);
  //creamos una funcion para guardar el estado en localStorage
  const saveItem = (newItem) => {
    const itemStringified = JSON.stringify(newItem);
    localStorage.setItem(itemName, itemStringified);
    setItem(newItem);
  };
  //para que el hook funcione tenemos que retornar un array donde la 1ra posicion es el estado que va a cambiar
  // y la segunda es la funcion que lo va a modificar, en este caso es saveItem
  return [item, saveItem];
}
