import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VotingGraph from "./Containers/VotingGraph/VotingGraph";

function App() {
  return (
    <div className="App">
      <p>Voting is fun</p>
      <VotingGraph />
    </div>
  );
}

export default App;
