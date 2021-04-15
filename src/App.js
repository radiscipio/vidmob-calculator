import { Component } from "react";
import "./App.css";
import Buttons from "./components/buttons";

class App extends Component {

  constructor(props) {

    super(props);  
    this.state =  {

  }
  this.render(){
    return (
      <div className="App">
        <input
          className="CalculatorInput"
          value={input.input}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="0"
        />
  
        <Buttons />
      </div>
    );
  }

  
}
