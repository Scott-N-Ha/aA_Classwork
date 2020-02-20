import React from 'react';
import * as Bull from './bullshit.jsx';

export default class Store extends React.Component {
  constructor(){
    super();
    // this.rootReducer = rootReducer;
    this.state = {
      user: "Andy",
      role: "Instructor"
    };
  }

  getState(){
    return Object.assign(this.state);
  }

  render(){
    debugger
    return (
      <div className="store">
        <h1>working</h1>
      </div>
    );
  }
}