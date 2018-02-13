import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: props.startTime
    };
    // this.timer = null;
    this.startTimer();
  }


  startTimer(time) {
    this.timer = setInterval(this._tick.bind(this), 1000);
  }

  timeDisplay() {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }



  _tick() {
    let timeLeft = this.state.timeLeft - 1;
    if (timeLeft <= 0) {
      timeLeft = this.props.startTime;
      this.props.submit();
    }
    this.setState({ timeLeft: timeLeft });
  }


  render() {
    return (
      <div className="timer-container">
        <div className="timer">{this.timeDisplay()}</div>
      </div>
    );
  }
}
