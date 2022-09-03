import React from "react";
// import Counter from "./components/Counter";
// import CounterToolkit from "./components/Counter-toolkit";

// function App() {
//   return (
//     <>
//       {/* <Counter />; */}
//       <CounterToolkit />
//     </>
//   );
// }

// export default App;

import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
