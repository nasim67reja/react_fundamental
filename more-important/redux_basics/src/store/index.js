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
