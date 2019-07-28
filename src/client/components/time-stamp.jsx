import React from 'react';
import {monthLong, displayTime} from '../utilities';

export default class TimeStamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5000 // update every five secounds
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <span className="timestamp">
        {monthLong[this.state.date.getMonth()]}
        &nbsp;
        {this.state.date.getDate()}
        &nbsp;-&nbsp;
        {displayTime(this.state.date)}
      </span>
    );
  }
}
