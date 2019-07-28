import React from 'react';
import PropTypes from 'prop-types';
import {displayTime} from '../utilities';

export default function ClassCard(props) {

  return (
    <div className="module module--card class" onClick={props.clickHandler}>
      <div className="class__title">{props.title}</div>
      <div className="class__time">{`${displayTime(new Date(props.time[0]))} - ${displayTime(new Date(props.time[1]))}`}</div>
      <div className="class__instructor">{props.instructor}</div>
      <div className="class__details">{props.details}</div>
    </div>
  );
}

ClassCard.propTypes = {
  title: PropTypes.string,
  time: PropTypes.array,
  instructor: PropTypes.string,
  details: PropTypes.string,
  clickHandler: PropTypes.func,
};
