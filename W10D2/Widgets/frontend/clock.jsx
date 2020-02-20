import React from 'react';

export default class Clock extends React.Component {
  constructor (){ 
    super();
    this.state = {
      time: new Date()
    };
  }

  componentDidMount (){
    this.handle = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount (){
    clearInterval(this.handle);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-time">
          <span>Time:</span>
          {/* <span>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</span> */}
          <span>{this.state.time.toLocaleTimeString('en-US', {timeZoneName: 'short'})}</span>
        </div>
        <div className="clock-date"> 
          <span>Date:</span>
          {/* <span>{this.state.time.getFullYear()}-{this.state.time.getMonth() + 1}-{this.state.time.getDate()}</span> */}
          <span>{this.state.time.toLocaleDateString('en-US')}</span>
        </div>
      </div>
    );
  }
};