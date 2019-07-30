import React, {useState} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TimeStamp from './time-stamp';
import UserSearch from './user-search';
import UserCard from './user-card';
import ClassCard from './class-card';
import ConfirmCard from './confirm-card';
import server from '../server';
import {devMemberList, devCalenderClassList} from '../utilities';

export default function App() {
  const [member, setMember] = useState([]);
  const [gymClass, setGymClass] = useState({});
  const [memberList, setMemberList] = useState([]);
  const [gymClassList, setGymClassList] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const memberSearchHandler = (event, value = '') => {
    setLoading(true);
    // ----------------- env conditional
    if (process.env.NODE_ENV === 'production' && google) {
      server.getRowsInSheetByColumn('Members', (!isNaN(value)) ? 0 : 2, value)
        .then((value) => {
          setLoading(false);
          console.log('members', value);
          setMemberList(value);
        })
        .catch(alert);
    } else {
      setMemberList(devMemberList);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  const memberSelectHandler = (event, value = []) => {
    if (Array.isArray(value) && value.length > 0) {
      setMember(value);
      setLoading(true);
      // ----------------- env conditional
      if (process.env.NODE_ENV === 'production' && google) {
        server.getCurrentCalenderEvents(2)
          .then((value) => {
            setLoading(false);
            setGymClassList(value);
          })
          .catch(alert);
      } else {
        setGymClassList(devCalenderClassList);
        setTimeout(() => setLoading(false), 2000);
      }
    }
  };

  const gymClassSelectHandler = (event, value = {}) => {
    setGymClass(value);
  };

  const finalConfirmHandler = (event, value = false) => {
    let donezo = () => {
      setLoading(true);
      setConfirmed(true);
      setTimeout(() => resetAppHandler(), 3000);
    };

    if (!value) {
      setGymClass([]);
    } else {
      // pass member and class id's for attendance
      let newAttendanceRow = [member[0], gymClass.id];
      // ----------------- env conditional
      if (process.env.NODE_ENV === 'production' && google) {
        server.setAttendance(newAttendanceRow)
          .then(donezo)
          .catch(alert);
      } else {
        donezo();
      }
    }
  };

  const resetAppHandler = () => {
    // reset state to defaults
    setConfirmed(false);
    setLoading(false);
    setMember([]);
    setGymClass({});
    setMemberList([]);
    setGymClassList([]);
  };

  return (
    <div className="app-content">
      <section className="app-branding">
        <div className="app-branding__logo">
          <img src="https://pixabay.com/get/57e0d14b4257ae14f1dc8460825668204022dfe05555754a76287cdd/gym-1048852_640.png" width="200" height="200" alt="gym logo"/>
        </div>
      </section>
      <div className="app-controllers">
        {(member.length > 0 || Object.values(gymClass).length > 0) &&
          <button className="app-controllers__restart-btn"
            onClick={resetAppHandler}>
            <svg width="56px" height="56px" viewBox="0 0 56 56">
              <use xlinkHref="#icon-cancel"></use>
            </svg>
          </button>
        }
        <div className="app-controllers__timestamp">
          <TimeStamp></TimeStamp>
        </div>

        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {loading &&
          <div key={1} className="app-controllers__loading">
            This is the loading animation
          </div>
          }
        </ReactCSSTransitionGroup>

        <div className="app-controllers__views">

          {/* USER SELECTION */}
          {!member.length > 0 && !Object.values(gymClass).length > 0 &&
            <section className="view view--user">
              <div className="view__content">
                <div className="view__top">
                  <div className="module">
                    <div className="module__title">Please enter your LAST NAME or MEMBER NUMBER.</div>
                    <UserSearch searchHandler={memberSearchHandler} ></UserSearch>
                  </div>
                </div>
                <div className="view__bottom">
                  {memberList.length > 0 &&
                    <div className="module">
                      <div className="module__title">Tap to select your photo.</div>
                      <div className="module__list">
                        {memberList.map((member) =>
                          <UserCard
                            clickHandler={(e) => memberSelectHandler(e, member)}
                            key={member[0].toString()}
                            src={member[3]}></UserCard>
                        )}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </section>
          }

          {/* CLASS SELECTION */}
          {member.length > 0 && !Object.values(gymClass).length > 0 &&
            <section className="view view--class">
              <div className="module__list">
                {gymClassList.length > 0 && gymClassList.map((gymClass) =>
                  <ClassCard
                    clickHandler={(e) => gymClassSelectHandler(e, gymClass)}
                    key={gymClass.id.toString()}
                    title={gymClass.title}
                    time={[gymClass.start, gymClass.end]}
                    // instructor={gymClass[6]}
                    details={gymClass.details}></ClassCard>
                )}
              </div>
            </section>
          }

          {/* CONFIRM SELECTION */}
          {member.length > 0 && Object.values(gymClass).length > 0 &&
            <section className="view view--confirm">
              <div className="view__content">
                <div className="view__top">
                  <ConfirmCard
                    title={gymClass.title}
                    time={[gymClass.start, gymClass.end]}
                    // instructor={gymClass[6]}
                    details={gymClass.details}
                    src={member[3]}></ConfirmCard>
                </div>
                <div className="view__bottom">
                  {!confirmed ? (
                  <div className="module">
                    <div className="module__title">Confirm your class attendance.</div>
                    <div className="module__list module__list--confirm">
                      <div onClick={(e) => finalConfirmHandler(e, false)} className="module module--card">
                        <svg width="60px" height="60px" viewBox="0 0 56 56"><use xlinkHref="#icon-cancel"></use></svg>
                      </div>
                      <div onClick={(e) => finalConfirmHandler(e, true)} className="module module--card">
                        <svg width="60px" height="60px" viewBox="0 0 61 46"><use xlinkHref="#icon-confirm"></use></svg>
                      </div>
                    </div>
                  </div>
                  ) : (
                  <div className="module">
                    <div className="module__title">Thank you for attending class today!</div>
                  </div>
                  )}
                </div>
              </div>
            </section>
          }
        </div>
      </div>
    </div>
  );
}
