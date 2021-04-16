import { Component } from "react";
import "./App.css";
import Buttons from "./components/buttons";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <input
            placeholder="0"
          >
          </input>
          <Buttons />
        </div>
      </div>
    );
  }
}
