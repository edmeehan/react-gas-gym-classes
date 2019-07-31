function doGet() {
}
function getCurrentCalenderEvents() {
}
function getMembers() {
}
function getImage() {
}
function setAttendance() {
}!function(e, a) {
    for (var i in a) e[i] = a[i];
}(this, function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var config_drive = {
        project_folder_name: "React Project Gym Classes",
        members_photos_folder_name: "Member Photos"
    }, config_spreadsheets = {
        members_sheet_name: "Members",
        attendance_sheet_name: "Attendance"
    }, config_calendar = {
        name: "React App Gym Class Schedule",
        rangeInHours: 2
    };
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return app_getCurrentCalenderEvents;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return app_getMembers;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return app_getImage;
    }), __webpack_require__.d(__webpack_exports__, "d", function() {
        return app_setAttendance;
    });
    var app_getImage = function(name) {
        for (var folderName = arguments.length > 1 && arguments[1] !== undefined && arguments[1] ? config_drive.members_photos_folder_name : config_drive.project_folder_name, folders = DriveApp.getFoldersByName(folderName), fileBytes = null; folders.hasNext(); ) for (var files = folders.next().getFilesByName(name); files.hasNext(); ) fileBytes = files.next().getBlob().getBytes();
        return !!fileBytes && Utilities.base64Encode(fileBytes);
    }, app_getMembers = function(col, data) {
        var ignoreCase = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2], rows = getSheet(config_spreadsheets.members_sheet_name);
        return rows.shift(), JSON.parse(JSON.stringify(rows.filter(function(item) {
            var testValue = item[col] + "", value = data + "";
            return ignoreCase ? testValue.toUpperCase() === value.toUpperCase() : testValue === value;
        })));
    }, app_getCurrentCalenderEvents = function(rangeInHours) {
        var range = rangeInHours || config_calendar.rangeInHours, name = config_calendar.name, calendar = CalendarApp.getCalendarsByName(name), now = new Date(), fromNow = new Date(now.getTime() + 60 * range * 60 * 1e3), events = calendar[0].getEvents(now, fromNow).map(function(event) {
            return {
                id: event.getId(),
                title: event.getTitle(),
                start: event.getStartTime(),
                end: event.getEndTime(),
                details: event.getDescription()
            };
        });
        return JSON.parse(JSON.stringify(events));
    }, app_setAttendance = function() {
        var newRow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [], name = config_spreadsheets.attendance_sheet_name;
        return newRow.unshift(new Date()), getSheet(name, !1).appendRow(newRow), !0;
    }, getSheet = function(sheetName) {
        var getValues = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1], sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
        return getValues ? sheet.getDataRange().getValues() : sheet;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return doGet;
    });
    var doGet = function(e) {
        var template = e && e.parameter && e.parameter.page ? HtmlService.createTemplateFromFile(e.parameter.page) : HtmlService.createTemplateFromFile("Index");
        return template.data = [], template.evaluate();
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), function(global) {
        var _app_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1), _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
        global.doGet = _app_routes_js__WEBPACK_IMPORTED_MODULE_0__["a"], global.getCurrentCalenderEvents = _app_js__WEBPACK_IMPORTED_MODULE_1__["a"], 
        global.getMembers = _app_js__WEBPACK_IMPORTED_MODULE_1__["c"], global.getImage = _app_js__WEBPACK_IMPORTED_MODULE_1__["b"], 
        global.setAttendance = _app_js__WEBPACK_IMPORTED_MODULE_1__["d"];
    }.call(this, __webpack_require__(3));
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || new Function("return this")();
    } catch (e) {
        "object" == typeof window && (g = window);
    }
    module.exports = g;
} ]));