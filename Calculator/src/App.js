import React, { useReducer } from "react";

import "./styles.css";

const initialValue = {
  currentOp: "",
  previousOp: "",
  operation: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_num":
      if (state.previousOp && !state.currentOp) {
        return {
          ...state,
          currentOp: action.value,
        };
      }
      if (action.value === "0" && state.currentOp.trim() === "0") return state;

      if (action.value === "." && state.currentOp.includes(".")) return state;

      return {
        ...state,
        currentOp: `${state.currentOp || ""}${action.value}`,
      };

    case "del_num":
      if (!state.currentOp) return state;
      return {
        ...state,
        currentOp: `${state.currentOp.slice(0, state.currentOp.length - 1)}`,
      };

    case "clear_num":
      return { previousOp: "", operation: "", currentOp: "" };

    case "operator":
      // console.log("operator");
      if (state.currentOp.length === 0) return state;
      return {
        previousOp: `${state.currentOp} `,
        operation: action.value,
      };
    case "result":
      if (!state.currentOp || !state.previousOp) return state;
      if (state.operation === "/") {
        let num = state.previousOp / state.currentOp;
        if (isInt(num)) return { currentOp: num };
        else return { currentOp: num.toFixed(3) };
      }
      if (state.operation === "*") {
        let num = state.previousOp * state.currentOp;
        if (isInt(num)) return { currentOp: num };
        else return { currentOp: num.toFixed(3) };
      }
      if (state.operation === "+") {
        let num = Number(state.previousOp) + Number(state.currentOp);
        if (isInt(num)) return { currentOp: num };
        else return { currentOp: num.toFixed(3) };
      }
      if (state.operation === "-") {
        let num = Number(state.previousOp) - Number(state.currentOp);
        if (isInt(num)) return { currentOp: num };
        else return { currentOp: num.toFixed(3) };
      }
      return state;
    default:
      return state;
  }
};

function isInt(n) {
  return n % 1 === 0;
}

const App = () => {
  const [{ currentOp, previousOp, operation }, dispatchFunc] = useReducer(
    reducer,
    initialValue
  );

  const addNumBtn = (e) => {
    dispatchFunc({
      type: "add_num",
      value: e.target.id,
    });
  };
  const calculation = (e) => {
    dispatchFunc({
      type: "operator",
      value: e.target.id,
    });
  };

  return (
    <div className="grid">
      <div className="output">
        <div className="previous">
          {previousOp} {operation}
        </div>
        <div className="now">{currentOp}</div>
      </div>

      <button
        className="span-2"
        onClick={() => {
          dispatchFunc({
            type: "clear_num",
          });
        }}
      >
        AC
      </button>

      <button
        onClick={() => {
          dispatchFunc({
            type: "del_num",
          });
        }}
      >
        DEL
      </button>
      {/* <button id="/" onClick={calculation}>
        /
      </button> */}
      {["/", "*", "+", "-"].map((el) => (
        <button id={el} className="op" onClick={calculation}>
          {el}
        </button>
      ))}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((el) => (
        <button id={el} onClick={addNumBtn}>
          {el}
        </button>
      ))}
      {/* <button id="1" onClick={addNumBtn}>
        1
      </button>
      <button id="2" onClick={addNumBtn}>
        2
      </button>
      <button id="3" onClick={addNumBtn}>
        3
      </button> */}
      {/* <button id="*" onClick={calculation}>
        *
      </button> */}
      {/* <button id="4" onClick={addNumBtn}>
        4
      </button>
      <button id="5" onClick={addNumBtn}>
        5
      </button>
      <button id="6" onClick={addNumBtn}>
        6
      </button> */}
      {/* <button id="+" onClick={calculation}>
        +
      </button> */}
      {/* <button id="7" onClick={addNumBtn}>
        7
      </button>
      <button id="8" onClick={addNumBtn}>
        8
      </button>
      <button id="9" onClick={addNumBtn}>
        9
      </button> */}
      {/* <button id="-" onClick={calculation}>
        -
      </button> */}
      {/* <button id="." onClick={addNumBtn}>
        .
      </button>
      <button id="0" onClick={addNumBtn}>
        0
      </button> */}
      <button
        className="span-2"
        onClick={() => {
          dispatchFunc({
            type: "result",
          });
        }}
      >
        =
      </button>
    </div>
  );
};
export default App;
