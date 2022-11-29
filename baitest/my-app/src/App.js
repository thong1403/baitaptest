import React, { Component } from "react";
import CharactersContainer from "./components/CharactersContainer"

import "./App.css";

class App extends Component {
  state = {
    name:[]
  };
  componentDidMount=(e)=>{
    fetch("https://breakingbadapi.com/api/characters")
    .then((res)=> res.json())
    .then((data) => {
      this.setState({
        name: data,
      })
    })
  }
  render() {
    return <>
    <CharactersContainer name={this.state.name}/>
    </>;
  }
}

export default App;
