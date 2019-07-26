import React from 'react';
import moment from 'moment';

export default class TimeStamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: moment()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      15000 // update four times a minute
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: moment()});
  }

  render() {
    return (
      <span>{this.state.date.format('lll')}</span>
    );
  }
}
