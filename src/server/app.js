import config from './config';

const getImage = (name, isMemberPhoto = false) => {
  let folderName = isMemberPhoto
    ? config.drive.members_photos_folder_name
    : config.drive.project_folder_name;
  let folders = DriveApp.getFoldersByName(folderName);
  let fileBytes = null;

  while (folders.hasNext()) {
    let files = folders.next().getFilesByName(name);
    while (files.hasNext()) {
      fileBytes = files.next().getBlob().getBytes();
    }
  }

  return fileBytes
    ? Utilities.base64Encode(fileBytes)
    : false;
};

const getMembers = (col, data, ignoreCase = true) => {
  let rows = getSheet(config.spreadsheets.members_sheet_name);
  rows.shift(); // remove the first item with all the labels

  return JSON.parse(JSON.stringify(rows.filter((item) => {
    let testValue = item[col] + '';
    let value = data + '';

    return (ignoreCase)
      ? testValue.toUpperCase() === value.toUpperCase()
      : testValue === value;
  })));
};

const getCurrentCalenderEvents = (rangeInHours) => {
  let range = rangeInHours ? rangeInHours : config.calendar.rangeInHours;
  let name = config.calendar.name;
  let calendar = CalendarApp.getCalendarsByName(name);
  let now = new Date();
  let fromNow = new Date(now.getTime() + (range * 60 * 60 * 1000));
  let events = calendar[0].getEvents(now, fromNow).map((event) => {
    return {
      id: event.getId(),
      title: event.getTitle(),
      start: event.getStartTime(),
      end: event.getEndTime(),
      details: event.getDescription(),
    };
  });

  return JSON.parse(JSON.stringify(events));
};

const setAttendance = (newRow = []) => {
  let name = config.spreadsheets.attendance_sheet_name;
  newRow.unshift(new Date());
  getSheet(name, false).appendRow(newRow);
  return true;
};

const getSheet = (sheetName, getValues = true) => {
  let spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadSheet.getSheetByName(sheetName);
  return getValues ? sheet.getDataRange().getValues() : sheet;
};

export {
  getCurrentCalenderEvents,
  getMembers,
  getImage,
  setAttendance,
};
