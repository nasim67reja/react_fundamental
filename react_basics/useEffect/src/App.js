import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [resourceType, setResourceType] = useState("posts");
  console.log(
    "look page is rendering but the function is not executed ,when you press the same button. the page is rendering but the resourceType value is not changing "
  );

  // 📝📝📝📝   1:
  // useEffect(() => {
  // console.log("render"); // everytime this function will be executed when the page will be rendered
  // });

  // 📝📝📝📝   2:
  useEffect(() => {
    console.log("render");
  }, [resourceType]); // in this case whenever the array's value(resourceType) will change the function will be executed

  // ⚠⚠⚠ for more see (https://www.youtube.com/watch?v=0ZJgIjIuY7U) this video
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Post</button>
        <button onClick={() => setResourceType("user")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
};

export default App;
