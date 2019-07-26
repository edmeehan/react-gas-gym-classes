import React from 'react';
import ReactDOM from 'react-dom';
import TimeStamp from './components/time-stamp';
import UserSearch from './components/user-search';
import UserIcon from './components/user-icon';
import ClassIcon from './components/class-icon';
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
      <button className="app-controllers__restart-btn">
        <svg width="56px" height="56px" viewBox="0 0 56 56"><use xlinkHref="#icon-cancel"></use></svg>
      </button>
      <div className="app-controllers__timestamp">
        <TimeStamp></TimeStamp>
      </div>
      <div className="app-controllers__views">
        {/* <section className="view view--user">
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
                  <div className="module__list">
                    <UserIcon></UserIcon>
                    <UserIcon></UserIcon>
                    <UserIcon></UserIcon>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="view view--class">
          <div className="module__list">
            <ClassIcon></ClassIcon>
            <ClassIcon></ClassIcon>
            <ClassIcon></ClassIcon>
            <ClassIcon></ClassIcon>
            <ClassIcon></ClassIcon>
          </div>
        </section> */}
        <section className="view view--confirm">
          <div className="view__content">
            <div className="view__top">
              <div className="module module--card module--split">
                <div className="module__left class">
                  <div className="class__title">Boxing</div>
                  <div className="class__time">9:00 - 13:00</div>
                  <div className="class__instructor">John Smith</div>
                  <div className="class__details">This is the boxing class details.</div>
                </div>
                <div className="module__right">
                  <img className="user-image" src="https://via.placeholder.com/175x175" width="175" height="175" alt="user image"/>
                </div>
              </div>
            </div>
            <div className="view__bottom">
              {/* <div className="module">
                <div className="module__title">Confirm your class attendance.</div>
                <div className="module__list module__list--confirm">
                  <div className="module module--card">
                    <svg width="60px" height="60px" viewBox="0 0 56 56"><use xlinkHref="#icon-cancel"></use></svg>
                  </div>
                  <div className="module module--card">
                    <svg width="60px" height="60px" viewBox="0 0 61 46"><use xlinkHref="#icon-confirm"></use></svg>
                  </div>
                </div>
              </div> */}
              <div className="module">
                <div className="module__title">Thank you for attending class today!</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>,
  document.getElementById('index')
);
