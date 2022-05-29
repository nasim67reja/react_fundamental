import React, { useState } from "react";

import AddItem from "./Component/AddItem/AddItem";
import DisplayItem from "./Component/DisplayItem/DisplayItem";

const App = () => {
  const dummyData = [
    {
      text: "Book",
      id: "b_1",
    },
    {
      text: "Course",
      id: "c_1",
    },
  ];
  const [initialData, setInitialData] = useState(dummyData);
  const receiveData = (data) => {
    setInitialData((prevData) => {
      return [{ text: data, id: Math.random().toString() }, ...prevData];
    });
  };
  const deleteItemHandler = (arg) => {
    setInitialData((prev) => {
      const data = prev.filter((el) => el.id !== arg);
      return data;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (initialData.length > 0) {
    content = (
      <DisplayItem item={initialData} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div className="container">
      <div id="todo-app">
        <div>
          <AddItem onReceive={receiveData} />
          {/* <DisplayItem item={initialData} onDeleteItem={deleteItemHandler} /> */}
          {content}
        </div>
      </div>
    </div>
  );
};

export default App;
