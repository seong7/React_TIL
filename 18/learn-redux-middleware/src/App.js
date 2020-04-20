import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import CounterContainer_thunk from "./containers/CounterContainer_thunk";

function App() {
  return (
    <div>
      {/* <CounterContainer /> */}
      <CounterContainer_thunk />
    </div>
  );
}

export default App;
