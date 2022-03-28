import React, { useState } from "react";

function Item(props) {
  //status to track whether check box is ticked
  const [isChecked, setIsChecked] = useState(false);

  //handles when the check-box is selected/unselected
  function handleSelect(event) {
    setIsChecked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    //this helps to change style when the isChecked is true i.e checkBox is ticked
    <li style={{ textDecoration: isChecked ? "line-through" : "none" }}>
      <input
        className="check"
        type="checkbox"
        value={isChecked}
        onClick={handleSelect}
      />
      {/* this handles deletion of item when it is clicked */}
      <div
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        {props.note}
      </div>
    </li>
  );
}

export default Item;
