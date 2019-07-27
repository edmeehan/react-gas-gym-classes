const getRowsInSheetByColumn = (sheetName, col, data, ignoreCase = true) => {
  let rows = retrieveSheetRows(sheetName);
  rows.shift(); // remove the first item with all the labels

  return rows.filter((item) => {
    let testValue = item[col] + '';
    let value = data + '';

    return (ignoreCase)
      ? testValue.toUpperCase() === value.toUpperCase()
      : testValue === value;
  });
};

const getRowsInSheet = (sheetName, data, ignoreCase = true) => {
  let rows = retrieveSheetRows(sheetName);
  rows.shift(); // remove the first item with all the labels

  return rows.filter((item) => {
    let testValue = item.join('#');
    let value = data + '';

    return (ignoreCase)
      ? testValue.toUpperCase().indexOf(value.toUpperCase()) !== -1
      : testValue.indexOf(value) !== -1;
  });
};

const retrieveSheetRows = (sheetName) => {
  let spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadSheet.getSheetByName(sheetName);
  return sheet.getDataRange().getValues();
};

const test = () => {
  getRowsInSheetByColumn('Members', 0, 1234);
};

export {
  getRowsInSheetByColumn,
  getRowsInSheet,
  test,
};
