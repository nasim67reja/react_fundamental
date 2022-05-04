import React, { useState } from "react";
import "./useState.css";
function NumberCom() {
  const [count, setCount] = useState(0); // useState er moddhokar argument ero function version ache but seta onk completecitaed 'https://www.youtube.com/watch?v=O6P86uwfdR0' see this lecture for more
  // 📝📝 Explaination: here 0 is the initial value of useState function. the useState function returns an array which first value is the initial value in case is 0 and the setCount is the updated function. setCount function theke protibar je value paowa jabe sei value ta count er moddhe chole jabe............. nicher example e setCount er value 1 kore barano hocce count er theke aar protita setCount er return kora value count e jaye jukto hocce . this is very important understand the logic behind it
  //   /////////////////////////////////////////
  //   /////////////////////////////////////////
  //   const Increment = () => setCount(count + 1);
  //function version
  const Increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    //  the number will be add 2 but this will be not work in version1
  };

  const Decrement = () => setCount(count - 1);
  //
  return (
    <div className="d-flex">
      <button className="decrement" onClick={Decrement}>
        -
      </button>
      <p className="number">{count}</p>
      <button className="increment" onClick={Increment}>
        +
      </button>
    </div>
  );
}
export default NumberCom;
