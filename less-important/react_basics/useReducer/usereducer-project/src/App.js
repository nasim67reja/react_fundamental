import React, { useReducer } from "react";

const initialValue = "";

const reducer = (state, action) => {
  switch (action.type) {
    case "typing":
      return (state = `${state || ""} ${action.value}`);

    default:
      return state;
  }
};

function App() {
  const [value, dispatchValue] = useReducer(reducer, initialValue);
  const updateFunc = (e) => {
    dispatchValue({
      type: "typing",
      value: e.target.id,
    });
  };

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let item = alphabet.map((el) => (
    <button id={el} onClick={updateFunc}>
      {el}
    </button>
  ));
  return (
    <>
      <div className="name">Write your name ?</div>
      <div className="result">{value.toUpperCase()}</div>
      <div className="grid">
        {item}
        <button id=" " className="space" onClick={updateFunc}></button>
      </div>
    </>
  );
}

export default App;
