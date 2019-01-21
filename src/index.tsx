import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import "./styles/styles.css";
import "./styles/styles-reset.css";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./reducers/reducers";

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
