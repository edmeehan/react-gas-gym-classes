import * as routes from './app_routes.js';
import * as methods from './app.js';

// Expose public functions
global.doGet = routes.doGet;
global.getRowsInSheetByColumn = methods.getRowsInSheetByColumn;
global.getRowsInSheet = methods.getRowsInSheet;
global.test = methods.test;

// global.onOpen = publicFunctions.onOpen;
// global.openDialog = publicFunctions.openDialog;
// global.openAboutSidebar = publicFunctions.openAboutSidebar;
// global.getSheetsData = publicFunctions.getSheetsData;
// global.addSheet = publicFunctions.addSheet;
// global.deleteSheet = publicFunctions.deleteSheet;
// global.setActiveSheet = publicFunctions.setActiveSheet;
