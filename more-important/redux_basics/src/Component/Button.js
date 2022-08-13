import React from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const addTaskHandler = () => {
    dispatch({
      type: "CLICK",
    });
  };
  return (
    <button type="submit" onClick={addTaskHandler}>
      add task
    </button>
  );
};

export default Button;
