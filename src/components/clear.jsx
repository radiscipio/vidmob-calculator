import React, { Component } from "react";

export default class Clear extends Component {
  render() {
    return( 
      <div 
      className="buttons special-button"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}