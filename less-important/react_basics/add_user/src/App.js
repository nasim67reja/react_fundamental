import React, { useState } from "react";

import AddItem from "./Component/AddItem/AddItem";
import DisplayItem from "./Component/DisplayItem/DisplayItem";
import Ovarlay from "./Component/Ovarlay/Ovarlay";

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [ovarlay, setOvarlay] = useState("");

  const deleteOvarlay = () => {
    setOvarlay("");
  };

  let x = <Ovarlay onDelete={deleteOvarlay}></Ovarlay>;

  const receieveData = (userName, age) => {
    if (userName.trim().length === 0 && age.trim().length === 0) {
      return setOvarlay(x);
    }
    setUserInfo((el) => [`${userName} (${age} years old)`, ...el]);
  };

  return (
    <div>
      <div className="container">
        <AddItem onGetInfo={receieveData} />
        <DisplayItem items={userInfo} />
        {ovarlay}
      </div>
    </div>
  );
};

export default App;
