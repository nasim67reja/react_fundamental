///👇👇👇👇👇👇👇👇 sending and getting data in firebase

import { Fragment, useState, useEffect, useCallback } from "react";

function App() {
  const [data, setData] = useState("");
  const getQuran = useCallback(async () => {
    try {
      const response = await fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json"
      );

      if (!response.ok) throw new Error("Problem getting verse");

      const data = await response.json();
      // console.log(data.quran[0]);
      setData(data.quran[0]);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  // ///////////
  useEffect(() => {
    getQuran();
  }, [getQuran]);

  const sendVerseHandler = async () => {
    const response = await fetch(
      "https://react-auth-71ecf-default-rtdb.firebaseio.com/ayat.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data2 = await response.json();
    // console.log(data2);
  };

  // ///////
  const getVerseHandler = async () => {
    const response = await fetch(
      "https://react-auth-71ecf-default-rtdb.firebaseio.com/ayat.json"
    );
    const data3 = await response.json();
    for (const key in data) {
      console.log(key);
    }
    console.log(data3);
  };
  return (
    <Fragment>
      <div>hello</div>
      <button onClick={sendVerseHandler}>add the verse</button>

      <button onClick={getVerseHandler}>Get the verse</button>
    </Fragment>
  );
}

export default App;
