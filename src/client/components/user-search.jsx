import React from 'react';

export default function UserSearch() {
  return (
    <div className="module__text-input">
      <input className="user-search" placeholder="Start Here" type="text"/>
      <button className="clear-input">
        <svg width="56px" height="56px" viewBox="0 0 56 56"><use xlinkHref="#icon-cancel"></use></svg>
      </button>
    </div>
  );
}
