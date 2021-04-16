import React, { Component } from "react";
import "./input.css"

export default class Input extends Component {
  render() {
    return( 
      <div className="input-container">
        {this.props.children}
      </div>
    )
  }
}
