import React from 'react';
import DriveImg from './drive-img';
import PropTypes from 'prop-types';

export default function UserCard(props) {
  return (
    <div className="module module--card" onClick={props.clickHandler}>
      <DriveImg
        width="150"
        height="150"
        alt="user image"
        class="user-image"
        member={true}
        src={props.src}></DriveImg>
    </div>
  );
}

UserCard.propTypes = {
  src: PropTypes.string,
  clickHandler: PropTypes.func,
};
