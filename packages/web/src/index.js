import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "todo-core/build/reducers";

import "./index.css";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
