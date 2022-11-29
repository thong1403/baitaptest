import React, { Component } from "react";
import Result from "./Result";

import SearchBox from "./SearchBox";

class CharactersContainer extends Component {
  state = {};
  render() {
    let { name, handleChange } = this.props;
    console.log(name);
    return (
      <>
        <div className="container">
          <SearchBox/>
          
            <div className="row duoi">
           
              {name.map((e, i) => (
                <Result name={e} key={i} />
              ))}
          
          </div>
         
          
        </div>
      </>
    );
  }
}

export default CharactersContainer;
