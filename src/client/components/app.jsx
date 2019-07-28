import React, {useState} from 'react';
import TimeStamp from './time-stamp';
import UserSearch from './user-search';
import UserCard from './user-card';
import ClassCard from './class-card';
import ConfirmCard from './confirm-card';
import server from '../server';

export default function App() {
  const [member, setMember] = useState([]);
  const [gymClass, setGymClass] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const [gymClassList, setGymClassList] = useState([]);

  const {getRowsInSheetByColumn, getCurrentGymClasses} = server;

  const memberSearchHandler = (event, value = '') => {
    getRowsInSheetByColumn('Members', (!isNaN(value)) ? 0 : 2, value)
      .then(setMemberList)
      .catch(alert);

    // setMemberList([
    //   [2890, 'John', 'Pallas', 'http://ofad.org/files/imagecache/daily_picture/daily-photo/ofad-photo-of-5693.jpg'],
    //   [2891, 'Jake', 'Pallas', 'http://ofad.org/files/imagecache/daily_picture/daily-photo/ofad-photo-of-5693.jpg'],
    //   [2892, 'Stacey', 'Pallas', 'http://ofad.org/files/imagecache/daily_picture/daily-photo/ofad-photo-of-5693.jpg'],
    // ]);
  };

  const memberSelectHandler = (event, value = []) => {
    if (Array.isArray(value) && value.length > 0) {
      setMember(value);

      getCurrentGymClasses()
        .then((v) => {console.log(v);setGymClassList(v);})
        .catch(alert);

      // setGymClassList([
      //   // [Code, Date, Day, Start Time, End Time, Class, Instructor, Details],
      //   [1.0, null, 0.0, 'Sat Dec 30 12:00:00 GMT-05:00 1899', 'Sat Dec 30 15:00:00 GMT-05:00 1899', 'Boxing', 'John Smith', 'This is the boxing class details.'],
      //   [2.0, null, 0.0, 'Sat Dec 30 15:00:00 GMT-05:00 1899', 'Sat Dec 30 19:00:00 GMT-05:00 1899', 'Yoga', 'Jess Smith', 'This is the yoga class details.'],
      //   [3.0, null, 0.0, 'Sat Dec 30 19:00:00 GMT-05:00 1899', 'Sat Dec 30 21:00:00 GMT-05:00 1899', 'Jiu Jitsu', 'Jax Smith', 'This is the jiu jitsu class details.'],
      // ]);
    }
  };

  const gymClassSelectHandler = (event, value = []) => {
    if (Array.isArray(value) && value.length > 0) {
      setGymClass(value);
    }
  };

  const resetAppHandler = () => {
    setMember([]);
    setGymClass([]);
    setMemberList([]);
    setGymClassList([]);
  };

  return (
    <div className="app-content">
      <section className="app-branding">
        <div className="app-branding__logo">
          <img src="https://via.placeholder.com/200x200" width="200" height="200" alt="gym logo"/>
        </div>
      </section>
      <div className="app-controllers">
        {(member.length > 0 || gymClass.length > 0) &&
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
        <div className="app-controllers__views">

          {/* USER SELECTION */}
          {!member.length > 0 && !gymClass.length > 0 &&
            <section className="view view--user">
              <div className="view__content">
                <div className="view__top">
                  <div className="module">
                    <div className="module__title">Please enter your last name or member number.</div>
                    <UserSearch searchHandler={memberSearchHandler} ></UserSearch>
                  </div>
                </div>
                <div className="view__bottom">
                  {memberList.length > 0 &&
                    <div className="module">
                      <div className="module__title">Select your profile photo.</div>
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
          {member.length > 0 && !gymClass.length > 0 &&
            <section className="view view--class">
              <div className="module__list">
                {gymClassList.length > 0 && gymClassList.map((gymClass) =>
                  <ClassCard
                    clickHandler={(e) => gymClassSelectHandler(e, gymClass)}
                    key={gymClass[0].toString()}
                    title={gymClass[5]}
                    time={[gymClass[3], gymClass[4]]}
                    instructor={gymClass[6]}
                    details={gymClass[7]}></ClassCard>
                )}
              </div>
            </section>
          }

          {/* CONFIRM SELECTION */}
          {member.length > 0 && gymClass.length > 0 &&
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
