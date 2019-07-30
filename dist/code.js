function doGet() {
}
function getRowsInSheetByColumn() {
}
function getCurrentGymClasses() {
}
function getCurrentCalenderEvents() {
}
function getRowsInSheet() {
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
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return getCurrentCalenderEvents;
    }), __webpack_require__.d(__webpack_exports__, "d", function() {
        return getRowsInSheetByColumn;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return getCurrentGymClasses;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return getRowsInSheet;
    }), __webpack_require__.d(__webpack_exports__, "e", function() {
        return setAttendance;
    });
    var getRowsInSheetByColumn = function(sheetName, col, data) {
        var ignoreCase = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3], rows = getSheet(sheetName);
        return rows.shift(), JSON.parse(JSON.stringify(rows.filter(function(item) {
            var testValue = item[col] + "", value = data + "";
            return ignoreCase ? testValue.toUpperCase() === value.toUpperCase() : testValue === value;
        })));
    }, getRowsInSheet = function(sheetName, data) {
        var ignoreCase = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2], rows = getSheet(sheetName);
        return rows.shift(), JSON.parse(JSON.stringify(rows.filter(function(item) {
            var testValue = item.join("#"), value = data + "";
            return ignoreCase ? -1 !== testValue.toUpperCase().indexOf(value.toUpperCase()) : -1 !== testValue.indexOf(value);
        })));
    }, getCurrentGymClasses = function() {
        var rows = getSheet("Schedule"), now = new Date(), timeMath = function(dateObj) {
            return 100 * dateObj.getHours() + dateObj.getMinutes();
        };
        return rows.shift(), JSON.parse(JSON.stringify(rows.filter(function(item) {
            var today = !1;
            if ("" === item[1] && "" === item[2] && (today = !0), item[2] === now.getDay() && (today = !0), 
            item[1]) {
                var date = new Date(item[1]);
                date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate() && (today = !0);
            }
            if (today) {
                var end = timeMath(new Date(item[4]));
                return timeMath(now) < end - 5;
            }
        })));
    }, getCurrentCalenderEvents = function() {
        var rangeInHours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2, calendar = CalendarApp.getCalendarsByName("React App Gym Class Schedule"), now = new Date(), fromNow = new Date(now.getTime() + 60 * rangeInHours * 60 * 1e3), events = calendar[0].getEvents(now, fromNow).map(function(event) {
            return {
                id: event.getId(),
                title: event.getTitle(),
                start: event.getStartTime(),
                end: event.getEndTime(),
                details: event.getDescription()
            };
        });
        return JSON.parse(JSON.stringify(events));
    }, setAttendance = function() {
        var newRow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return newRow.unshift(new Date()), getSheet("Attendance", !1).appendRow(newRow), 
        !0;
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
        global.doGet = _app_routes_js__WEBPACK_IMPORTED_MODULE_0__["a"], global.getRowsInSheetByColumn = _app_js__WEBPACK_IMPORTED_MODULE_1__["d"], 
        global.getCurrentGymClasses = _app_js__WEBPACK_IMPORTED_MODULE_1__["b"], global.getCurrentCalenderEvents = _app_js__WEBPACK_IMPORTED_MODULE_1__["a"], 
        global.getRowsInSheet = _app_js__WEBPACK_IMPORTED_MODULE_1__["c"], global.setAttendance = _app_js__WEBPACK_IMPORTED_MODULE_1__["e"];
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