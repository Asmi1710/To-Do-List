import React from "react";

function Input(props) {
  return (
    <div>
      <input onChange={props.handleChangeFunction} value={props.toDoItem} />
      <button onClick={props.handleClickFunction}>Add</button>
    </div>
  );
}

export default Input;
