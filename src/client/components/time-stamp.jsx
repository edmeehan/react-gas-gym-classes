import React from 'react';
import {monthLong} from '../utilities';
// import moment from 'moment';

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
        {this.state.date.getHours()}:{this.state.date.getMinutes()}
      </span>
    );
  }
}
