"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
