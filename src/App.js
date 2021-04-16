import React, { Component } from "react";
import "./App.css";

import Buttons from "./components/buttons";
import Input from "./components/input"
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      opreator: "",
      currentNumber: "",
      prevNumber: ""
    };
  }

  addToInput = value => {
    this.setState({
      input: this.state.value  + value 
    });
  }

  

  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <Input
            placeholder="0"
          >
            {this.state.input}
          </Input>
          <Buttons />
        </div>
      </div>
    );
  }
}
