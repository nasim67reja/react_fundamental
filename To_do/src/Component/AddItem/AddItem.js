import React, { useState } from "react";
import "./AddItem.css";

const AddItem = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const addItemHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onReceive(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={submitHandler} className="input-field">
      <input
        type="text"
        value={enteredValue}
        className="input"
        onChange={addItemHandler}
      />
      <button type="submit" className="btn">
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
