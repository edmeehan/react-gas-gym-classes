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
  rows.shift(); // remove the first item with all the labels

  return JSON.parse(JSON.stringify(rows));
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
