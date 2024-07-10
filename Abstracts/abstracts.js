var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.addHolidays = function (holidays) {
        if (Array.isArray(holidays)) {
            for (var _i = 0, holidays_1 = holidays; _i < holidays_1.length; _i++) {
                var holiday = holidays_1[_i];
                this.holidays.push(holiday);
            }
        }
    };
    Department.prototype.createHolidays = function () {
        var array = [];
        for (var i = 0; i < 10; i++) {
            array.push({
                date: new Date(2024, 10, i + 1),
                reason: "".concat(i, ". ").concat(this.name),
            });
        }
        return array;
    };
    Department.prototype.printHolidays = function () {
        if (this.holidays.length === 0) {
            return console.log("no holidays");
        }
        console.log("Here is list of holidays");
        this.holidays.forEach(function (holiday, index) {
            console.log("".concat(index + 1, ". ").concat(holiday.reason, ", ").concat(holiday.date));
        });
    };
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment() {
        var _this = _super.call(this, "IT Department") || this;
        _this.holidays = [];
        return _this;
    }
    return ItDepartment;
}(Department));
var AdminDepartment = /** @class */ (function (_super) {
    __extends(AdminDepartment, _super);
    function AdminDepartment() {
        var _this = _super.call(this, "Admin Department") || this;
        _this.holidays = [];
        return _this;
    }
    return AdminDepartment;
}(Department));
var itDepartment = new ItDepartment();
var adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itDepartment.createHolidays());
adminDepartment.addHolidays(adminDepartment.createHolidays());
itDepartment.printHolidays();
adminDepartment.printHolidays();
