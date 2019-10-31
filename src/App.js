import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React</h2>
        <img src={require("./one-punch.jpg")} className="App-logo" alt="logo" />
        <p>React demo for continous deployments with aws codepipeline.</p>
      </header>
    </div>
  );
}

export default App;
