import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function UserSearch(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length === 0) return;

    props.searchHandler(event, text);
    // setText('');
  };

  const handleClearClick = () => setText('');

  return (
    <div className="module__text-input">
      <form onSubmit={handleSubmit}>
        <input placeholder="Start Here" type="text"
          className="user-search"
          onChange={handleChange}
          value={text} />
      </form>
      {text &&
        <button className="clear-input"
          onClick={handleClearClick}>
          <svg width="56px" height="56px" viewBox="0 0 56 56">
            <use xlinkHref="#icon-cancel"></use>
          </svg>
        </button>
      }
    </div>
  );
}

UserSearch.propTypes = {
  searchHandler: PropTypes.func,
};
