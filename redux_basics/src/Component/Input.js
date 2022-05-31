import React from "react";

import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const defaultInput = useSelector((state) => state.defaultInput);

  const inputHandler = (e) => {
    dispatch({ type: "CURRENT", value: e.target.value });
  };
  return <input type="text" value={defaultInput} onChange={inputHandler} />;
};

export default Input;
