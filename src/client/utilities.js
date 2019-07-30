const monthLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const devMemberList = [
  [2890, 'John', 'Pallas', 'https://via.placeholder.com/300x300.png?text=Member+Photo+Here'],
  [2891, 'Jake', 'Pallas', 'https://via.placeholder.com/300x300.png?text=Member+Photo+Here'],
  [2892, 'Stacey', 'Pallas', 'https://via.placeholder.com/300x300.png?text=Member+Photo+Here'],
];

// const devGymClassList = [
//   [1, '', 0, 'Sat Dec 30 12:00:00 GMT-05:00 1899', 'Sat Dec 30 15:00:00 GMT-05:00 1899', 'Boxing', 'John Smith', 'This is the boxing class details.'],
//   [2, '', 0, 'Sat Dec 30 15:00:00 GMT-05:00 1899', 'Sat Dec 30 19:00:00 GMT-05:00 1899', 'Yoga', 'Jess Smith', 'This is the yoga class details.'],
//   [3, '', 0, 'Sat Dec 30 19:00:00 GMT-05:00 1899', 'Sat Dec 30 21:00:00 GMT-05:00 1899', 'Jiu Jitsu', 'Jax Smith', 'This is the jiu jitsu class details.'],
// ];

const devCalenderClassList = [
  {id: 1, start:'Sat Dec 30 12:00:00 GMT-05:00 1899', end:'Sat Dec 30 15:00:00 GMT-05:00 1899', title:'Boxing', details:'<b>John Smith</b><br>This is the boxing class details.'},
  {id: 2, start:'Sat Dec 30 15:00:00 GMT-05:00 1899', end:'Sat Dec 30 19:00:00 GMT-05:00 1899', title:'Yoga', details:'<b>Jess Smith</b><br>This is the yoga class details.'},
  {id: 3, start:'Sat Dec 30 19:00:00 GMT-05:00 1899', end:'Sat Dec 30 21:00:00 GMT-05:00 1899', title:'Jiu Jitsu', details:'<b>Jax Smith</b><br>This is the jiu jitsu class details.'},
];

const displayTime = (dateObj) => {
  let minutes = (`0${dateObj.getMinutes()}`).slice(-2);
  return `${dateObj.getHours()}:${minutes}`;
};

export {
  monthLong,
  monthShort,
  displayTime,
  devMemberList,
  // devGymClassList,
  devCalenderClassList,
};
