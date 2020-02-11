import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
     seconds: 0,
     minutes:0,
     heurs:0
    };

    setInterval(() => {
      if (!this.state.start) {
        this.setState({ seconds: this.state.seconds + 1 });
     if(this.state.seconds==60){
         this.setState({ minutes: this.state.minutes + 1 });
         this.state.seconds=0
        }
        if(this.state.minutes==60){
            this.setState({ heurs: this.state.heurs + 1 });
         this.state.minutes=0 
        }
      }

    }, 1000);
  }
  start = () => {
    this.setState({ start: !this.state.start });
  };

  render() {
    return (
      <div className="timer">
      <p>{String(this.state.heurs).padStart(2, "0")}:{String(this.state.minutes).padStart(2, "0")}:{String(this.state.seconds).padStart(2, "0")}</p>
        <button onClick={this.start}>
          {this.state.start ? "Pause" : "Start"}
        </button>
      </div>
    );
  }
}

export default Timer;
