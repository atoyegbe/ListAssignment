import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";



class App extends Component {
  state = {
    name: 'deyemie'
  }

  changeHandler = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div className="App">
      <input type="text" value={this.state.name} onChange={this.changeHandler} />
      <p> {this.state.name} </p>
  
    </div>
    )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
