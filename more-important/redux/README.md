# Redux (Basics)

For Install redux into your project run this command in terminal

```JavaScript
npm i redux react-redux
```

## Creating and exporting redux file

```JavaScript
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;


```

## Alternative

```js
import { createStore } from "redux";

const initialstore = {
  currentValue: "",
  element: [],
  defaultInput: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CURRENT":
      return {
        ...state,
        currentValue: `${action.value}`,
        defaultInput: action.value,
      };
    case "CLICK":
      return {
        ...state,
        defaultInput: "",
        element: [...state.element, state.currentValue],
      };

    default:
      return state;
  }
};

const store = createStore(reducer, initialstore);

export default store;
```

- And Now we wanna to connect our react file with this redux store. For this we need to provide this store to the react app. And we only have one redux store we only needs to provide only ones store we have

## Providing Redux

```JavaScript
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


```

- Now our React components can use the redux's data.They can get data and can dispatch data also.

## Using Redux data in React Component

- we need to use the `useSelector()` hook. Now we can access the data from redux store in our functional component by using useSelector().
- We need to pass a function in their. a function which will be executed by react-redux. A function which then basically determines which piece of data we wanna extract from our store.

```JavaScript
useSelector(state=>state.counter) // this will return a exact part of a state
```

- Now the Great things is when we use useSelector() react-redux will automatically set up a subscription to the redux store for the component.<br>
  So our component will be updated and will recieve the lates counter automatically whenever the data change in redux store.

### dispatch and useSelector

```JavaScript
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


```

# IntroDuction to redux-toolkit

### see after 242 number lecture

- For install redux toolkit run this command on the terminal `npm i @reduxjs/toolkit`
- now we can remove the `redux`. because it's already exist in `redux-toolkit`

## Adding State Slices

```js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;

export default store;
```

- now we can find this reducers by `counterSlice.actions.reducersName`
- so we will export the actions for better experience `const counterActions=counterSlice.actions`

- now we will use and dispatch as like before.
  some example:

```js
const dispatch = useDispatch();
const counter = useSelector((state) => state.counter);

const increaseHandler = () => {
  dispatch(counterActions.increase({ amount: 10 })); // ekhane ja dibo tai payload er moddhe jabe
};
```

## It's time to work with Multiple Slice

`index.js` file

```js
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
```

`auth.js` file :

```js
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
```

`counter.js` file :

```js
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
```
