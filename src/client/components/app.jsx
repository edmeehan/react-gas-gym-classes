import React from 'react';

import TimeStamp from './time-stamp';
import UserSearch from './user-search';
import UserCard from './user-card';
import ClassCard from './class-card';
import ConfirmCard from './confirm-card';

// import server from './server';
// const {animals} = server;
// animals('hello mom')
//     .then((e) => console.log(e))
//     .catch((error) => console.log(error));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null,
      class: null,
      memberList: null,
      classList: null,
    };
  }

  render() {
    return (
      <div className="app-content">
        <section className="app-branding">
          <div className="app-branding__logo">
            <img src="https://via.placeholder.com/200x200" width="200" height="200" alt="gym logo"/>
          </div>
        </section>
        <div className="app-controllers">
          {this.state.member || this.state.class &&
            <button className="app-controllers__restart-btn">
              <svg width="56px" height="56px" viewBox="0 0 56 56"><use xlinkHref="#icon-cancel"></use></svg>
            </button>
          }
          <div className="app-controllers__timestamp">
            <TimeStamp></TimeStamp>
          </div>
          <div className="app-controllers__views">

            {/* USER SELECTION */}
            {!this.state.member && !this.state.class &&
              <section className="view view--user">
                <div className="view__content">
                  <div className="view__top">
                    <div className="module">
                      <div className="module__title">Please enter your last name or member number.</div>
                      <UserSearch></UserSearch>
                    </div>
                  </div>
                  <div className="view__bottom">
                    {this.state.memberList &&
                      <div className="module">
                        <div className="module__title">Select your profile photo.</div>
                        <div className="module__list">
                          <UserCard src="https://via.placeholder.com/150x150?text=Member+One"></UserCard>
                          <UserCard src="https://via.placeholder.com/150x150?text=Member+Two"></UserCard>
                          <UserCard src="https://via.placeholder.com/150x150?text=Member+Three"></UserCard>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </section>
            }

            {/* CLASS SELECTION */}
            {this.state.member && !this.state.class &&
              <section className="view view--class">
                <div className="module__list">
                  <ClassCard
                    title="Jiu-Jitsu"
                    time="6:00 - 7:30"
                    instructor="Bo Jackson"
                    details="These are the class details"></ClassCard>
                  <ClassCard
                    title="Boxing"
                    time="6:00 - 7:30"
                    instructor="Bo Jackson"
                    details="These are the class details"></ClassCard>
                  <ClassCard
                    title="Yoga"
                    time="6:00 - 7:30"
                    instructor="Bo Jackson"
                    details="These are the class details that are a big longer to drop a line"></ClassCard>
                  <ClassCard
                    title="Kick Boxing"
                    time="6:00 - 7:30"
                    instructor="Bo Jackson"
                    details="These are the class details"></ClassCard>
                  <ClassCard
                    title="Strength Training"
                    time="6:00 - 7:30"
                    instructor="Bo Jackson"
                    details="These are the class details"></ClassCard>
                </div>
              </section>
            }

            {/* CONFIRM SELECTION */}
            {this.state.member && this.state.class &&
              <section className="view view--confirm">
                <div className="view__content">
                  <div className="view__top">
                    <ConfirmCard
                      title="Strength Training"
                      time="6:00 - 7:30"
                      instructor="Bo Jackson"
                      details="These are the class details"
                      src="https://via.placeholder.com/150x150?text=Member+One"></ConfirmCard>
                  </div>
                  <div className="view__bottom">
                    
                    {/* PER CONFIRM */}
                    <div className="module">
                      <div className="module__title">Confirm your class attendance.</div>
                      <div className="module__list module__list--confirm">
                        <div className="module module--card">
                          <svg width="60px" height="60px" viewBox="0 0 56 56"><use xlinkHref="#icon-cancel"></use></svg>
                        </div>
                        <div className="module module--card">
                          <svg width="60px" height="60px" viewBox="0 0 61 46"><use xlinkHref="#icon-confirm"></use></svg>
                        </div>
                      </div>
                    </div>

                    {/* POST CONFIRM */}
                    <div className="module">
                      <div className="module__title">Thank you for attending class today!</div>
                    </div>
                  </div>
                </div>
              </section>
            }
          </div>
        </div>
      </div>
    );
  }
}
