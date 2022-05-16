import React, { useReducer } from "react";

import "./App.css";
import Counter from "./Component/MultipleState";

// 👉👉👉👉👉👉 CASE:2
// boylar plate
// ebar initialState take object akare lekhi & action takeo object baniye feli

///////
const initialState = {
  counter: 0,
}; // counter's value

const reducer = (state, action) => {
  switch (action.type) {
    // ebar action ekta object jar moddhe type name ekta propertry ache jar value hbe increment,decrement
    case "increment":
      return { counter: state.counter + 1 };
    //eta kno value na eta ekta object
    // return { counter: state.counter + action.value };// 1 er jaygay dynamic value use kora jete pare tobe dispatch ke call korar somoy tar moddhe value er man define korte hbe dispatch({type:'increment',value:2//tahole 2 kore barbe})

    case "decrement":
      return { counter: state.counter - 1 };
    // initialstate object hower karone
    default:
      return state;
  } // action er state take object baniye fellam
};

// component:
const App = () => {
  // case :2
  const [count, dispatch] = useReducer(reducer, initialState);
  // ebar count ekta object pabe tai count na likhe count.counter likhte hbe update state ke access er jonno

  return (
    <>
      <div>
        <h1>Uses of useReducer() hook :</h1>
        <div className="value">{count.counter}</div>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>

        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
      </div>
      <Counter></Counter>
    </>
  );
};

///////////////////////////////////////////////////////////////////////////
// // 👉👉👉👉👉👉 CASE:1
// // boylar plate
// const initialState = 0; // counter's value

// const reducer = (state, action) => { // how the reducer will be know the action is happing . for knowing we will call the dispatch function
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// // component:
// const App = () => {
//   // case :1
//   const [count, dispatch] = useReducer(reducer, initialState); // count will produce new value and dispatch is a updating function. ei dispatch er madhoomei action ke define korte hbe

//   return (
//     <>
//       <div>
//         <div className="value">{count}</div>
//         <button onClick={() => dispatch("decrement")}>Decrement</button>

//         <button onClick={() => dispatch("increment")}>Increment</button>
//       </div>
//     </>
//   );
// };

export default App;
