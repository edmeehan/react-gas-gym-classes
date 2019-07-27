import React from 'react';
import PropTypes from 'prop-types';

export default function UserCard(props) {
  return (
    <div className="module module--card">
      <img width="150" height="150" alt="user image"
        className="user-image"
        src={props.src}/>
    </div>
  );
}

UserCard.propTypes = {
  src: PropTypes.string,
};
