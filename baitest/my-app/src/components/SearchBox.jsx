import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png"
              alt="photo"
              className="img-logo"
            />
          </div>
          <div className="col-2"></div>
          <div className="col-8">
            <input type="text" placeholder="Search character" className="input" onChange={this.handleChange}/>
          </div>
          <div className="col-2"></div>
        </div>
      </>
    );
  }
}

export default SearchBox;
