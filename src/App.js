import React, { Component } from "react";
import styles from "./App.module.scss";
import VotingGraph from "./Containers/VotingGraph/VotingGraph";

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Voting is fun</h1>
        <span>?</span>
        <VotingGraph />
      </div>
    );
  }
}

export default App;
