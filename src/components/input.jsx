import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  render() {
    return (
      <input 
        className="input" 
        onChange={this.props.onChangeInput}
        type="text"
        value={this.props.handleInput}
        >
      </input>
    );
  }
}
