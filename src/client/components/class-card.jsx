import React from 'react';
import PropTypes from 'prop-types';

export default function ClassCard(props) {
  return (
    <div className="module module--card class">
      <div className="class__title">{props.title}</div>
      <div className="class__time">{props.time}</div>
      <div className="class__instructor">{props.instructor}</div>
      <div className="class__details">{props.details}</div>
    </div>
  );
}

ClassCard.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  instructor: PropTypes.string,
  details: PropTypes.string,
};
