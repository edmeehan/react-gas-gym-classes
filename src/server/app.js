const getRowsInSheetByColumn = (sheetName, col, data, ignoreCase = true) => {
  let rows = getSheet(sheetName);
  rows.shift(); // remove the first item with all the labels

  return JSON.parse(JSON.stringify(rows.filter((item) => {
    let testValue = item[col] + '';
    let value = data + '';

    return (ignoreCase)
      ? testValue.toUpperCase() === value.toUpperCase()
      : testValue === value;
  })));
};

const getRowsInSheet = (sheetName, data, ignoreCase = true) => {
  let rows = getSheet(sheetName);
  rows.shift(); // remove the first item with all the labels

  return JSON.parse(JSON.stringify(rows.filter((item) => {
    let testValue = item.join('#');
    let value = data + '';

    return (ignoreCase)
      ? testValue.toUpperCase().indexOf(value.toUpperCase()) !== -1
      : testValue.indexOf(value) !== -1;
  })));
};

const getCurrentGymClasses = () => {
  let rows = getSheet('Schedule');
  let now = new Date();
  let timeMath = (dateObj) => (dateObj.getHours() * 100) + dateObj.getMinutes();
  rows.shift();

  return JSON.parse(JSON.stringify(rows.filter((item) => {
    let today = false;

    // check if daily class
    if (item[1] === '' && item[2] === '') {
      today = true;
    }

    // check if day of week class
    if (item[2] === now.getDay()) {
      today = true;
    }

    // check if special event class
    if (item[1]) {
      let date = new Date(item[1]);
      if ((date.getFullYear() === now.getFullYear()) &&
        ((date.getMonth() === now.getMonth())) &&
        ((date.getDate() === now.getDate()))
      ) {
        today = true;
      }
    }

    // if the class is today - show classes that have not happened yet
    if (today) {
      let end = timeMath(new Date(item[4]));
      let stamp = timeMath(now);

      return (stamp < end - 5);
    }
  })));
};

const setAttendance = (newRow = []) => {
  newRow.unshift(new Date());
  getSheet('Attendance', false).appendRow(newRow);
  return true;
};

const getSheet = (sheetName, getValues = true) => {
  let spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadSheet.getSheetByName(sheetName);
  return getValues ? sheet.getDataRange().getValues() : sheet;
};

export {
  getRowsInSheetByColumn,
  getCurrentGymClasses,
  getRowsInSheet,
  setAttendance,
};
