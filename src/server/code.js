import * as routes from './app_routes.js';
import * as methods from './app.js';

// Expose public functions
global.doGet = routes.doGet;
global.getCurrentCalenderEvents = methods.getCurrentCalenderEvents;
global.getMembers = methods.getMembers;
global.getImage = methods.getImage;
global.setAttendance = methods.setAttendance;
