import React, {useState, useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import server from '../server';

export default function DriveImg(props) {
  const [img, setImg] = useState('');

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && google) {
      server.getImage(props.src, props.member || false)
        .then(setImg)
        .catch(alert);
    } else {
      // dev pixel
      setTimeout(() => setImg('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='), 2500);
    }
  });

  const styles = {
    width: `${props.width}px`,
    height: `${props.height}px`,
  };

  return (
    <div className="img" style={styles}>
      <ReactCSSTransitionGroup
        transitionName="show"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {img &&
          <img
            key="1"
            src={`data:image/png;base64,${img}`}
            width={props.width}
            height={props.height}
            className={props.class}
            alt={props.alt}/>
        }
      </ReactCSSTransitionGroup>
      {!img &&
        <div className="loader-bar loader-bar--img"></div>
      }
    </div>
  );
}

DriveImg.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
  class: PropTypes.string,
  member: PropTypes.bool,
};
