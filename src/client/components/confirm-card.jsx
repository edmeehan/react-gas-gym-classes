import React from 'react';
import PropTypes from 'prop-types';
import {displayTime} from '../utilities';

export default function ConfirmCard(props) {
  return (
    <div className="module module--card module--split">
      <div className="module__left class">
        <div className="class__title">{props.title}</div>
        <div className="class__time">{`${displayTime(new Date(props.time[0]))} - ${displayTime(new Date(props.time[1]))}`}</div>
        {/* <div className="class__instructor">{props.instructor}</div> */}
        <div className="class__details" dangerouslySetInnerHTML={{__html: props.details}}></div>
      </div>
      <div className="module__right">
        <img width="150" height="150" alt="user image"
          className="user-image"
          src={props.src}/>
      </div>
    </div>
  );
}

ConfirmCard.propTypes = {
  title: PropTypes.string,
  time: PropTypes.array,
  // instructor: PropTypes.string,
  details: PropTypes.string,
  src: PropTypes.string,
};
