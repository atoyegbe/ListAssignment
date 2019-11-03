import React, { Component } from "react";
import ReactDOM from "react-dom";
import Validation from "./Components/validationComponent";
import Char from "./Components/CharComponent";

import "./styles.css";

class App extends Component {
  state = {
    name: "deyemie"
  };

  changeHandler = e => {
    this.setState({ name: e.target.value });
  };

  deleteChar = s => {
    const charName = [...this.state.name];
     charName.splice(charName, 1);
    this.setState({name: charName.join('')})
  }



  render() {
    
    let name = this.state.name;
    let spiltName = name.split('');
    let showchar =  spiltName.map((char, index)=> {
      return <Char 
      click={() => this.deleteChar(index)}  
      showChar={char}
      key={index} />
    });

    return (
      <div className="App">
        <input
          type="text"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <p> {this.state.name} </p>
        <Validation text={this.state.name.length} />

        {showchar}

        
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
