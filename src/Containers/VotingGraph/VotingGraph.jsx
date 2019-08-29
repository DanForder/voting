import React, { Component } from "react";

import VoteBlock from "../../Components/VoteBlock/VoteBlock";
import InputBox from "../../Components/InputBox/InputBox";

import styles from "./VotingGraph.module.scss";

class VotingGraph extends Component {
  state = { parties: [], numberOfParties: 2, numberOfVotes: 10 };

  componentDidMount() {
    // this.initialiseVote(this.state.numberOfParties, this.state.numberOfVotes);
  }

  setNumberOfParties = event => {
    const numberOfParties = event.target.value;
    if (numberOfParties > 0 && numberOfParties <= 10) {
      this.setState({ numberOfParties });
    }
  };

  setNumberOfVotes = event => {
    const numberOfVotes = event.target.value;
    if (numberOfVotes > 5 && numberOfVotes <= 30) {
      this.setState({ numberOfVotes });
    }
  };

  randomIntFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  castVote = parties => {
    let voteFor = this.randomIntFromRange(0, parties.length - 1);
    parties[voteFor].votes += 1;
  };

  initialiseVote = (numberOfParties, numberOfVoters) => {
    if (numberOfParties > 0 && numberOfVoters > 0) {
      let parties = [];
      for (let index = 1; index <= numberOfParties; index++) {
        parties.push({ partyName: `Party #${index}`, votes: 0 });
      }

      for (let index = 0; index < numberOfVoters; index++) {
        this.castVote(parties);
      }

      this.setState({ parties });
    } else {
      alert("Please enter at least 1 voter and 1 party!");
    }
  };

  getVoteBlocks(numberOfVotes) {
    let voteBlocks = [];
    for (let index = 0; index < numberOfVotes; index++) {
      voteBlocks.push(<VoteBlock />);
    }
    return voteBlocks;
  }

  renderResults() {
    let returnResults = [];

    if (this.state.parties[0]) {
      for (let index = 0; index < this.state.parties.length; index++) {
        returnResults.push(
          <div className={styles.partyContainer}>
            <span>
              <strong>Party #{index + 1}</strong>
            </span>
            {this.getVoteBlocks(this.state.parties[index].votes)}
          </div>
        );
      }
    }
    return <>{returnResults}</>;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.filterContainer}>
          <InputBox
            onChangeFunction={this.setNumberOfParties}
            value={this.state.numberOfParties}
            placeholder="Set Number Of Parties..."
            type="number"
          />
          <InputBox
            onChangeFunction={this.setNumberOfVotes}
            value={this.state.numberOfVotes}
            placeholder="Set Number Of Voters..."
            type="number"
          />
          <button
            onClick={() =>
              this.initialiseVote(
                this.state.numberOfParties,
                this.state.numberOfVotes
              )
            }
          >
            Click For An Election
          </button>
        </div>
        <div className={styles.resultsContainer}>{this.renderResults()}</div>
      </div>
    );
  }
}

export default VotingGraph;
