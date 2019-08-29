import React, { Component } from "react";
// import styles from "./SearchBar.module.scss";

class InputBox extends Component {
  state = {};
  render() {
    return (
      <input
        // className={styles.searchBar}
        onChange={this.props.onChangeFunction}
        placeholder={this.props.placeholder}
        value={this.props.value}
        type={this.props.type}
      />
    );
  }
}

export default InputBox;
