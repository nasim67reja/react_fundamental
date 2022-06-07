import React, { useState } from "react";
import "./AddItem.css";

const AddItem = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const addItemHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const [isValid, setIsValid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    // Empty input field
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onReceive(enteredValue);
    setIsValid(true);

    setEnteredValue("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`input-field ${isValid ? "" : "invalid"}`}
    >
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
