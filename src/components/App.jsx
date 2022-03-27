import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [notes, setNote] = useState([]);
  const [toDo, setToDo] = useState("");

  function handleChange(event) {
    setToDo(event.target.value);
    //console.log(toDo);
  }

  function handleClick(event) {
    setNote((prevNote) => {
      return [...prevNote, { text: toDo }];
    });
    console.log(notes);
    setToDo("");
    event.preventDefault();
  }

  function createList(item) {
    return <Item note={item.text} />;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <input onChange={handleChange} value={toDo} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>{notes.map(createList)}</ul>
      </div>
    </div>
  );
}

export default App;
