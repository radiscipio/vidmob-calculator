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
    this.setState((prevState) => (
      { input: prevState.input + value }))
    console.log(value, this.state.input)
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  backspace = () => {
    this.setState({
      input: this.state.input.slice(0, -1)
    })
  }


  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <div className="input-wrapper">
            <Input handleInput={this.state.input} />
          </div>
          <div claassName="buttons-container">
            <div className="buttons-row">
              <Buttons>(</Buttons>
              <Buttons>)</Buttons>
              <Buttons handleClick={this.backspace}>←</Buttons>
              <Clear handleClear={this.clearInput}>AC</Clear>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>7</Buttons>
              <Buttons handleClick={this.addToInput}>8</Buttons>
              <Buttons handleClick={this.addToInput}>9</Buttons>
              <Buttons>x</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>4</Buttons>
              <Buttons handleClick={this.addToInput}>5</Buttons>
              <Buttons handleClick={this.addToInput}>6</Buttons>
              <Buttons>÷</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>1</Buttons>
              <Buttons handleClick={this.addToInput}>2</Buttons>
              <Buttons handleClick={this.addToInput}>3</Buttons>
              <Buttons>+</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons>.</Buttons>
              <Buttons>0</Buttons>
              <Buttons>=</Buttons>
              <Buttons>-</Buttons>
            </div>
          </div>
        </div>
        <div>Made by Robert di Scipio</div>
      </div>
    );
  }
}
