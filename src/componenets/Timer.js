import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      reset: false,
      seconds: 0,
      minutes: 0,
      heurs: 0
    };
    setInterval(() => {
      if (!this.state.start) {
        this.setState({ seconds: this.state.seconds + 1 });
        if (this.state.seconds == 59) {
          this.setState({ minutes: this.state.minutes + 1 });
          this.state.seconds = 0;
        }
        if (this.state.minutes == 59) {
          this.setState({ heurs: this.state.heurs + 1 });
          this.state.minutes = 0;
        }
      }
    }, 1000);
  }
  start = () => {
    if (this.state.start) {
      clearInterval();
    }
    this.setState({ start: !this.state.start });
  };
  reset = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
      heurs: 0,
      start: false
    });
  };
  render() {
    return (
      <div className="timer">
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="phone">
          <div className="home">
            <i class="far fa-clone"></i>
            <div className="menu"></div>
            <i class="fas fa-undo-alt"></i>
          </div>
        </div>

        <div>
          <img
            className="screen"
            src={
              "https://i.pinimg.com/236x/28/1b/ca/281bca47deb60c23382509bb04f01334.jpg"
            }
          ></img>
        </div>
        <div className="time">
          <h3>
            {String(this.state.heurs).padStart(2, "0")}:
            {String(this.state.minutes).padStart(2, "0")}:
            {String(this.state.seconds).padStart(2, "0")}
          </h3>
        </div>
        <div className="text">
          <span>Heurs</span>
          <span>Minute</span>
          <span>Seconde</span>
        </div>
        <div className="boutton">
          <button className="start" onClick={this.start}>
            {!this.state.start ? "Pause" : "Start"}
          </button>
          <button className="rest" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
