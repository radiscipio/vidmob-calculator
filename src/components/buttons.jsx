import React, { Component } from "react";
import "./Buttons.css"

export default class Buttons extends Component {

  isNotANumber = value => {
    return !isNaN(value) || 
            value === ")" || 
            value === "(" || 
            value === "." || 
            value === "="
  };

  render() {
    return (

      <div 
        className={`buttons ${this.isNotANumber(this.props.children) ? "" : "special-button"}`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

