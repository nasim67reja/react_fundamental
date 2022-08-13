# Redux (Basics)

For Install redux into your project run this command in terminal

```JavaScript
npm i redux
```

```JavaScript
npm i react-redux
```

## Creating and exporting redux file

```JavaScript

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

- we need to use the `JavaScript useSelector()` hook. Now we can access the data from redux store in our functional component by using useSelector().
- We need to pass a function in their. a function which will be executed by react-redux. A function which then basically determines which piece of data we wanna extract from our store.

```JavaScript
useSelector(state=>state.counter) // this will return a exact part of a state
```

- Now the Great things is when we use useSelector() react-redux will automatically set up a subscription to the redux store for the component.<br>
  So our component will be updated and will recieve the lates counter automatically whenever the data change in redux store.

```JavaScript
import { useSelector } from "react-redux";

import Input from "./Input";
import Button from "./Button";
import styles from "./task.module.css";

const Task = () => {
  const element = useSelector((state) => state.element);

  const content = element.map((el) => <li key={Math.random()}>{el}</li>);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className={styles.task}>
        <form onSubmit={formSubmitHandler}>
          <Input />
          <Button />
        </form>
      </div>
      <ul className={styles["task-list"]}>{content}</ul>
    </React.Fragment>
  );
};

export default Task;

```

## Dispatching Actions from Inside Component

for dispatching we need to use another hook from **react-redux** `JavaScript const dispatch=useDispatch()`

Example:

```JavaScript
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const addTaskHandler = () => {
    dispatch({
      type: "CLICK",
    });
  };
  return (
    <button type="submit" onClick={addTaskHandler}>
      add task
    </button>
  );
};

export default Button;

import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const defaultInput = useSelector((state) => state.defaultInput);

  const inputHandler = (e) => {
    dispatch({ type: "CURRENT", value: e.target.value });
  };
  return <input type="text" value={defaultInput} onChange={inputHandler} />;
};

export default Input;

```
