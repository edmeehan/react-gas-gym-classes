import * as publicFunctions from './app_routes.js';

// Expose public functions

global.doGet = publicFunctions.doGet;

// global.onOpen = publicFunctions.onOpen;
// global.openDialog = publicFunctions.openDialog;
// global.openAboutSidebar = publicFunctions.openAboutSidebar;
// global.getSheetsData = publicFunctions.getSheetsData;
// global.addSheet = publicFunctions.addSheet;
// global.deleteSheet = publicFunctions.deleteSheet;
// global.setActiveSheet = publicFunctions.setActiveSheet;
