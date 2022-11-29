import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
    let { name } = this.props;
    return (
      <>
      <div className="col-3">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={name.img} alt="" className="img" />
            </div>
            <div class="flip-card-back">
              <h1>{name.name}</h1>
              <p>{name.nickname}</p>
              <p>{name.birthday}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
