import React, { Component } from "react";
import "./App.css";

import Input from "./components/input"
import Buttons from "./components/buttons";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      operator: "",
      currentNumber: "",
      prevNumber: ""
    };
  }

  addToInput = value => {
    this.setState({
      input: this.state.value + value 
    });
  };

  clear = () => {
    this.setState({ input: "" });
  };

  multiply = () => {
    this.setState.prevNumber = this.state.input;
    this.setState({ input : "" });
    this.setState.operator = "multiply";
  };

  divide = () => {
    this.setState.prevNumber = this.state.input;
    this.setState({ input : "" });
    this.setState.operator = "divide";
  };

  add = () => {
    this.setState.prevNumber = this.state.input;
    this.setState({ input : "" });
    this.setState.operator = "add";
  };

  subract = () => {
    this.setState.prevNumber = this.state.input;
    this.setState({ input : "" });
    this.setState.operator = "subtract";
  };

  doTheMath = () => {
    this.setState.prevNumber = this.state.input;

    if (this.state.operator === "multiply") {
        this.setState({
          input:
            parseInt(this.state.previousNumber) *
            parseInt(this.state.currentNumber)
        });
    }

    else if (this.state.operator === "divide") {
        this.setState({
          input:
            parseInt(this.state.previousNumber) /
            parseInt(this.state.currentNumber)
        });
    }

    else if (this.state.operator === "add") {
        this.setState({
          input:
            parseInt(this.state.previousNumber) +
            parseInt(this.state.currentNumber)
        });
    }

    else if (this.state.operator === "subtract") {
        this.setState({
          input:
            parseInt(this.state.previousNumber) /
            parseInt(this.state.currentNumber)
        });
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <Input>{this.state.input}</Input>
          <Buttons 
            addToInput={this.state.addToInput}
          />
        </div>
        <div>Made by Robert di Scipio</div>
      </div>
    );
  }
}
