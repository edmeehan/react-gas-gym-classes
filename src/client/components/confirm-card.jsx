import React from 'react';
import PropTypes from 'prop-types';

export default function ConfirmCard(props) {
  return (
    <div className="module module--card module--split">
      <div className="module__left class">
        <div className="class__title">{props.title}</div>
        <div className="class__time">{props.time}</div>
        <div className="class__instructor">{props.instructor}</div>
        <div className="class__details">{props.details}</div>
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
  time: PropTypes.string,
  instructor: PropTypes.string,
  details: PropTypes.string,
  src: PropTypes.string,
};
