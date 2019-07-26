import React from 'react';
import ReactDOM from 'react-dom';
import TimeStamp from './components/time-stamp';
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
        <img src="https://via.placeholder.com/150x150" width="150" height="150" alt="gym logo"/>
      </div>
    </section>
    <section className="app-controllers">
      <button className="app-controllers__restart-btn"></button>
      <div className="app-controllers__timestamp">
        <TimeStamp></TimeStamp>
      </div>
    </section>
  </div>,
  document.getElementById('index')
);
