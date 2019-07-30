import * as routes from './app_routes.js';
import * as methods from './app.js';

// Expose public functions
global.doGet = routes.doGet;
global.getRowsInSheetByColumn = methods.getRowsInSheetByColumn;
// global.getCurrentGymClasses = methods.getCurrentGymClasses;
global.getCurrentCalenderEvents = methods.getCurrentCalenderEvents;
global.getRowsInSheet = methods.getRowsInSheet;
global.setAttendance = methods.setAttendance;
