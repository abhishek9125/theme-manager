import React, { Component } from "react";
import Pallete from "./components/Pallete";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Pallete {...seedColors[4]}/>
    </div>
  );
}

export default App;
