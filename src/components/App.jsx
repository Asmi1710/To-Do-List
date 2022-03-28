import React, { useState } from "react";
import Item from "./Item";

function App() {
  //stores the list of notes added
  const [notes, setNote] = useState([]);
  //stores the new input item in to-do
  const [toDo, setToDo] = useState("");

  //keeps track of new anything typed in the input box
  function handleChange(event) {
    setToDo(event.target.value);
    //console.log(toDo);
  }

  //this maintains the list-> adding new items when "Add" is clicked
  function handleClick(event) {
    // avoiding addition when nothing is typed
    if (toDo !== "") {
      setNote((prevNote) => {
        return [...prevNote, toDo];
      });

      setToDo("");
      event.preventDefault();
    }
    console.log(notes);
  }
  // handles the deletion of items from the list
  function deleteItem(id) {
    setNote((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
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
        <ul>
          {/* mapping:adding the list items by calling Item component */}
          {notes.map((item, index) => (
            <Item note={item} key={index} id={index} onClick={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
