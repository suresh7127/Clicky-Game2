import React from 'react';
import './scoreboard.css';

const Scoreboard = props => (
  <div className="container text-center mb-3">
    <div className="row">
      <div className="col-sm-6">
        <div className="row">
          <div className="glove1 col-sm-1 mr-auto"></div>
          <h2 className="scoreboard col-sm-10">{props.msg}</h2>
          <div className="glove2 col-sm-1 ml-auto"></div>
        </div>
      </div>
      <div className="col-sm-6">
        <h2 className="scoreboard">Score: {props.score} | High Score: {props.highScore}</h2>
      </div>
    </div>
  </div>
)

export default Scoreboard;