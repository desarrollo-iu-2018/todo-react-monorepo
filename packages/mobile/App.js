import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "todo-core/build/reducers";

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
