import React, { Component } from 'react';
import moment from 'moment';

export default class Stopwatch extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      startTime: moment(),
      current: moment(),
      textColor: 'timeGreen',
    };

    this.tick = this.tick.bind(this);
  }

  // set the tick interval to 50ms
  componentDidMount() {
    this.interval = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const { current, startTime } = this.state;
    const timeElapsed = moment(current.diff(startTime));

    // change the text to red after five minutes
    if (timeElapsed.minutes() >= 5) {
      this.setState({ textColor: 'timeRed' });
    }

    this.setState({ current: moment() });
  }

  render() {
    const { current, startTime, textColor } = this.state;
    const timeElapsed = moment(current.diff(startTime));

    return (
      <div className="stopwatchContainer">
        <h2 id="stopwatch" className={textColor}>
          {timeElapsed.format('mm[mins] ss.SSS[s]')}
        </h2>
      </div>
    );
  }
}
