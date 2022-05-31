import { Fragment } from "react";

import Task from "./Component/task";

function App() {
  return (
    <Fragment>
      <h1 style={{ color: "white", margin: "2rem auto", maxWidth: "30rem" }}>
        Basic Redux
      </h1>
      <Task></Task>
    </Fragment>
  );
}

export default App;
