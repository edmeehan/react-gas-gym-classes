import React from 'react';
import ReactDOM from 'react-dom';
import TimeStamp from './components/time-stamp';
import UserSearch from './components/user-search';
import UserIcon from './components/user-icon';
// import server from './server';
import './styles.css';

// const {animals} = server;

// animals('hello mom')
//     .then((e) => console.log(e))
//     .catch((error) => console.log(error));

ReactDOM.render(
  <div className="app-content">
    <section className="app-branding">
      <div className="app-branding__logo">
        <img src="https://via.placeholder.com/200x200" width="200" height="200" alt="gym logo"/>
      </div>
    </section>
    <div className="app-controllers">
      <button className="app-controllers__restart-btn"></button>
      <div className="app-controllers__timestamp">
        <TimeStamp></TimeStamp>
      </div>
      <div className="app-controllers__views">
        <section className="view view--user">
          <div className="view__content">
            <div className="view__top">
              <div className="module">
                <div className="module__title">Please enter your last name or member number.</div>
                <UserSearch></UserSearch>
              </div>
            </div>
            <div className="view__bottom">
              <div className="module">
                  <div className="module__title">Select your profile photo.</div>
                  <div className="user-list">
                    <UserIcon></UserIcon>
                    <UserIcon></UserIcon>
                    <UserIcon></UserIcon>
                  </div>
                </div>
            </div>
          </div>
        </section>
        {/* <section className="view view--class">

        </section>
        <section className="view view--confirm">

        </section> */}
      </div>
    </div>
  </div>,
  document.getElementById('index')
);
