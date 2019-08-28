import React, { Component } from "react";
import styles from "./VoteBlock.module.scss";

class VoteBlock extends Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <p>A Vote</p>
      </div>
    );
  }
}

export default VoteBlock;
