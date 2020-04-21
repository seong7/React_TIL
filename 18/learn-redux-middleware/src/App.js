import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import CounterContainer_thunk from "./containers/CounterContainer_thunk";
import Api_Sample_Container from "./containers/Api_Sample_Container";

function App() {
  return (
    <div>
      {/* <CounterContainer /> */}
      {/* <CounterContainer_thunk /> */}
      <Api_Sample_Container />
    </div>
  );
}

export default App;
