const monthLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const displayTime = (dateObj) => {
  let minutes = (`0${dateObj.getMinutes()}`).slice(-2);
  return `${dateObj.getHours()}:${minutes}`;
}

export {
  monthLong,
  monthShort,
  displayTime,
};
