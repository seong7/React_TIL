import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import rootReducer from "./modules";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

/* redux-logger 관련 */
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";

/* redux-thunk 관련 */
import ReduxThunk from "redux-thunk";

const logger = createLogger();
// const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));  // 직접만든 logger 사용
// const store = createStore(rootReducer, applyMiddleware(logger)); // redux-logger 라이브러리로 만든 logger 사용

/* redux-thunk 적용  (logger 도 함께 적용함) */
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
