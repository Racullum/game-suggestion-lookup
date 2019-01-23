import React from "react";
import { render } from "react-dom";

//Provider is a component we wrap our top level component in so that state can "trickle" down to the other components
import { Provider } from "react-redux";
//Thunk middleware so we can create async action creators
import thunkMiddleware from "redux-thunk";
//Create store so we can capture state, applyMiddleware to implement thunk
import { createStore, applyMiddleware } from "redux";

import suggestionApp from "./reducers";
import App from "./components/App";
import "./css/index.css";

const store = createStore(suggestionApp, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
