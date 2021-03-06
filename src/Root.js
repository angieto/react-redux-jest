import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import reduxPromise from 'redux-promise';
// import stateValidator from "middlewares/stateValidator";

const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose // add support for Redux dev tools

export const Root = ({ children, initialState }) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxPromise))
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
