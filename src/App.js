import React, { Component } from "react";
import "./App.css";

import Input from "./components/input";
import Buttons from "./components/buttons";
import Clear from "./components/clear";

import parensCheck from "./components/functions";

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
    if(value === "=") {
      return this.calculate
    }
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

  calculate = () => {
    this.setState({ 
      input : parensCheck(this.state.input 
    )})
    return parensCheck(this.state.input)
  }

  insertDecimal = () => {
    this.setState({
      input: this.state.input + "."
    })
  }

  onChangeInput = (e) => {
    e.preventDefault();
    this.setState({ input : e.target.value })
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-container">
            <Input 
              onChangeInput={this.onChangeInput}
              handleInput={this.state.input} 
            />
          <div className="buttons-container">
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>(</Buttons>
              <Buttons handleClick={this.addToInput}>)</Buttons>
              <Buttons handleClick={this.backspace}>←</Buttons>
              <Clear handleClear={this.clearInput}>AC</Clear>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>7</Buttons>
              <Buttons handleClick={this.addToInput}>8</Buttons>
              <Buttons handleClick={this.addToInput}>9</Buttons>
              <Buttons handleClick={this.addToInput}>x</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>4</Buttons>
              <Buttons handleClick={this.addToInput}>5</Buttons>
              <Buttons handleClick={this.addToInput}>6</Buttons>
              <Buttons handleClick={this.addToInput}>÷</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.addToInput}>1</Buttons>
              <Buttons handleClick={this.addToInput}>2</Buttons>
              <Buttons handleClick={this.addToInput}>3</Buttons>
              <Buttons handleClick={this.addToInput}>+</Buttons>
            </div>
            <div className="buttons-row">
              <Buttons handleClick={this.insertDecimal}>.</Buttons>
              <Buttons handleClick={this.addToInput}>0</Buttons>
              <Buttons handleClick={this.calculate}>=</Buttons>
              <Buttons handleClick={this.addToInput}>-</Buttons>
            </div>
          </div>
        </div>
        <div>Made by Robert di Scipio</div>
      </div>
    );
  }
}
