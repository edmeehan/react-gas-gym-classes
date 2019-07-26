// Use ES6/7 code
const onOpen = () => {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .createMenu('Custom scripts')
    .addItem('Edit sheets [sample React project]', 'openDialog')
    .addItem('About me', 'openAboutSidebar')
    .addToUi();
};

const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('main')
    .setWidth(400)
    .setHeight(600);
  SpreadsheetApp
    .getUi() // Or DocumentApp or FormApp.
    .showModalDialog(html, 'Sheet Editor');
};

const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('about');
  SpreadsheetApp
    .getUi()
    .showSidebar(html);
};

const getSheets = () => SpreadsheetApp
  .getActive()
  .getSheets();

const getActiveSheetName = () => SpreadsheetApp
  .getActive()
  .getSheetName();

const getSheetsData = () => {
  const activeSheetName = getActiveSheetName();
  return getSheets().map((sheet, index) => {
    const sheetName = sheet.getName();
    return {
      text: sheetName,
      sheetIndex: index,
      isActive: sheetName === activeSheetName,
    };
  });
};

const addSheet = (sheetTitle) => {
  SpreadsheetApp
    .getActive()
    .insertSheet(sheetTitle);
  return getSheetsData();
};

const deleteSheet = (sheetIndex) => {
  const sheets = getSheets();
  SpreadsheetApp
    .getActive()
    .deleteSheet(sheets[sheetIndex]);
  return getSheetsData();
};

const setActiveSheet = (sheetName) => {
  SpreadsheetApp
    .getActive()
    .getSheetByName(sheetName)
    .activate();
  return getSheetsData();
};

export {
  onOpen,
  openDialog,
  openAboutSidebar,
  getSheetsData,
  addSheet,
  deleteSheet,
  setActiveSheet,
};
