import React, { Component } from "react";

import VoteBlock from "../../Components/VoteBlock/VoteBlock";
import styles from "./VotingGraph.module.scss";

class VotingGraph extends Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.partyContainer}>
          <span>
            <strong>Party #1</strong>
          </span>

          <VoteBlock />
          <VoteBlock />
          <VoteBlock />
          <VoteBlock />
          <VoteBlock />
        </div>
        <div className={styles.partyContainer}>
          <span>
            <strong>Party #2</strong>
          </span>
          <VoteBlock />
          <VoteBlock />
          <VoteBlock />
          <VoteBlock />
          <VoteBlock />
          <VoteBlock />
          <VoteBlock />
        </div>
      </div>
    );
  }
}

export default VotingGraph;
