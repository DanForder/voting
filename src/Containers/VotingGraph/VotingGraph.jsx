import React, { Component } from "react";

import VoteBlock from "../../Components/VoteBlock/VoteBlock";
import styles from "./VotingGraph.module.scss";

class VotingGraph extends Component {
  state = { numberOfParties: 2, numberOfVotes: 10 };

  getVoteBlocks(votes) {
    let returnResults = [];
    for (let index = 0; index < votes; index++) {
      returnResults.push(<VoteBlock />);
    }
    return returnResults;
  }

  renderResults() {
    let returnResults = [];
    const votes = [4, 6];

    for (let index = 0; index < this.state.numberOfParties; index++) {
      returnResults.push(
        <div className={styles.partyContainer}>
          <span>
            <strong>Party #{index + 1}</strong>
          </span>
          {this.getVoteBlocks(votes[index])}
        </div>
      );
    }
    return <>{returnResults}</>;
  }

  render() {
    return <div className={styles.wrapper}>{this.renderResults()}</div>;
  }
}

export default VotingGraph;
