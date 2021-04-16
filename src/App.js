import React, { Component } from "react";
import "./App.css";

import Input from "./components/input";
import Buttons from "./components/buttons";
import Clear from "./components/clear";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      operator: "",
      currentNumber: "",
      prevNumber: "",
    };
  }

  addToInput = (value) => {
    this.setState({
      input: this.state.value + value,
    });
    console.log("clicked")
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  startWithZero = (value) => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + value });
    }
  }

  multiply = () => {
    this.setState.prevNumber = this.state.input;
    this.setState({ input: "" });
    this.setState.operator = "multiply";
  };

  divide = () => {
    this.setState.prevNumber = this.state.input;
    this.setState({ input: "" });
    this.setState.operator = "divide";
  };

  add = () => {
    this.setState.prevNumber = this.state.input;
    this.setState({ input: "" });
    this.setState.operator = "add";
  };

  subract = () => {
    this.setState.prevNumber = this.state.input;
    this.setState({ input: "" });
    this.setState.operator = "subtract";
  };

  doTheMath = () => {
    this.setState.prevNumber = this.state.input;

    if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "add") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <div className="input-wrapper">
            <Input>{this.state.input}</Input>
          </div>
          <div claassName="buttons-container">
            <div className="buttons-row">
              <Buttons>(</Buttons>
              <Buttons>)</Buttons>
              <Buttons></Buttons>
              <Clear handleClear={this.clearInput}>CE</Clear>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>7</Buttons>
              <Buttons handleClick={this.addToInput}>8</Buttons>
              <Buttons handleClick={this.addToInput}>9</Buttons>
              <Buttons handleClick={this.multiply}>x</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>4</Buttons>
              <Buttons handleClick={this.addToInput}>5</Buttons>
              <Buttons handleClick={this.addToInput}>6</Buttons>
              <Buttons handleClick={this.divide}>÷</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>1</Buttons>
              <Buttons handleClick={this.addToInput}>2</Buttons>
              <Buttons handleClick={this.addToInput}>3</Buttons>
              <Buttons handleClick={this.add}>+</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons>.</Buttons>
              <Buttons handleClick={this.addToInput}>0</Buttons>
              <Buttons handleClick={this.doTheMath}>=</Buttons>
              <Buttons handleClick={this.subract}>-</Buttons>
            </div>
          </div>
        </div>
        <div>Made by Robert di Scipio</div>
      </div>
    );
  }
}
