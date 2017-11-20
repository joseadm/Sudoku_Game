webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n    -ms-flex-line-pack: center;\n        align-content: center;\n    text-align: center;\n    color: white;\n}\n.form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: 20px;\n  }\n  .form-signin .form-signin-heading,\n  .form-signin .checkbox {\n    margin-bottom: 10px;\n  }\n  .form-signin .checkbox {\n    font-weight: normal;\n  }\n  .form-signin .form-control {\n    position: relative;\n    height: auto;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n  }\n  .form-signin .form-control:focus {\n    z-index: 2;\n  }\n  .form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<!-- Si identity es true muestra los divs -->\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\" *ngIf=\"identity\">\n  <a class=\"navbar-brand\" href=\"#\">Sudoku</a>\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse left\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Bienvenido {{identity.name}} <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n      </div>\n</nav>\n\n<div class=\"container-fluid content\" *ngIf=\"identity\">\n  <div class=\"row\">\n    <nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar\">\n      <ul class=\"nav nav-pills flex-column\">\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/sudoku']\" class=\"nav-link\" href=\"#\">\n                <i class=\"fa fa-gamepad\" aria-hidden=\"true\"></i> Jugar Sudoku <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/mis-datos']\" class=\"nav-link\" href=\"#\">\n              <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Usuario</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\" href=\"#\">\n              <i class=\"fa fa-power-off\" aria-hidden=\"true\"></i> Salir</a>\n        </li>\n      </ul>\n    </nav>\n\n    <main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\" *ngIf=\"identity\">\n            <div [class.hidden]=\"!identity\">\n                <router-outlet></router-outlet>\n            </div>\n    </main>\n  </div>\n</div>\n\n<div class=\"container\" *ngIf=\"!identity\">\n    <h1 class=\"title\">Sudoku <i class=\"fa fa-gamepad\" aria-hidden=\"true\"></i></h1><hr><br><br>\n<div class=\"row\">\n  <!-- Inicio -->\n  <div class=\"col-sm-12 col-md-6 inicio_sesion\" *ngIf=\"!identity\">\n\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-10 form-signin\">\n        <h1>Iniciar Sesion</h1><hr>\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n          {{errorMessage}}\n        </div>\n        <p>\n        <label>Usuario: </label>\n        <input type=\"username\" #username=\"ngModel\" name=\"username\" [(ngModel)]=\"user.username\"\n        class=\"form-control\" required />\n        <span *ngIf=\"!username.valid && username.touched\">El usuario es obligatorio</span>\n      </p>\n        <p><label>Contraseña: </label>\n          <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"user.password\"\n          class=\"form-control\" required/></p>\n          <input type=\"submit\" value=\"Entrar\" class=\"btn btn-primary\">\n        </form>\n    </div>\n    <div class=\"col-sm-12 col-md-6 registrar\" *ngIf=\"!identity\">\n        <form #registerForm = \"ngForm\" (ngSubmit)=\"onSubmitRegister()\" class=\"col-md-10 form-signin\">\n          <h1>Registrate</h1><hr>\n          <div *ngIf=\"alertRegister\" class=\"alert alert-warning\">\n              {{alertRegister}}\n            </div>\n          <p><label>Nombre: </label>\n          <input type=\"text\" #name = \"ngModel\" name = \"name\" [(ngModel)]=\"user_register.name\" \n          class=\"form-control\" required/>\n          <span *ngIf=\"!name.valid && name.touched\">El nombre es obligatorio</span>\n        </p>\n        <p>\n            <label>Usuario: </label>\n            <input type=\"username\" #username=\"ngModel\" name=\"username\" [(ngModel)]=\"user_register.username\"\n            class=\"form-control\" required />\n            <span *ngIf=\"!username.valid && username.touched\">El usuario es obligatorio</span>\n          </p>\n            <p><label>Contraseña: </label>\n              <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"user_register.password\"\n              class=\"form-control\" required/>\n              <span *ngIf=\"!password.valid && password.touched\">La contrasena es obligatorio</span>\n            </p>\n            <input type=\"submit\" value=\"Registrarse\" class=\"btn btn-primary\">\n            </form><br>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__ = __webpack_require__("../../../../../src/app/services/sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(_userService, _sudokuService) {
        this._userService = _userService;
        this._sudokuService = _sudokuService;
        this.title = 'Sudoku';
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '');
        this.user_register = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this._userService.signup(this.user).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            if (!_this.identity._id) {
                alert("El usuario no esta correctamente identificado");
            }
            else {
                localStorage.setItem('identity', JSON.stringify(identity));
                _this._userService.signup(_this.user, true).subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    if (_this.token.length <= 0) {
                        alert("El token no se ha generado correctamente");
                    }
                    else {
                        localStorage.setItem('token', token);
                        _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '');
                    }
                }, function (error) {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        var body = JSON.parse(error._body);
                        _this.errorMessage = body.message;
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.errorMessage = body.message;
                console.log(error);
            }
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identity = null;
        this.token = null;
    };
    AppComponent.prototype.onSubmitRegister = function () {
        var _this = this;
        console.log(this.user_register);
        this._userService.register(this.user_register).subscribe(function (response) {
            var user = response.user;
            _this.user_register = user;
            // Insertar los grids cada vez que se registra un usuario
            _this._sudokuService.insertGrids().subscribe(function (response) {
            }, function (error) {
                console.log(error);
            });
            if (!user._id) {
                _this.alertRegister = 'Error al registrarse';
                setTimeout(function () { this.alertRegister = false; }.bind(_this), 3000);
            }
            else {
                _this.alertRegister = 'Registro se ha realizado correctamente';
                _this.user_register = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '');
                setTimeout(function () { this.alertRegister = false; }.bind(_this), 3000);
            }
        }, function (error) {
            var alertRegister = error;
            if (alertRegister != null) {
                var body = JSON.parse(error._body);
                _this.alertRegister = body.message;
                console.log(error);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__["a" /* SudokuService */]],
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__["a" /* SudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__["a" /* SudokuService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_edit_component__ = __webpack_require__("../../../../../src/app/components/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sudoku_component__ = __webpack_require__("../../../../../src/app/components/sudoku.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_sudoku_component__["a" /* SudokuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["b" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* appRoutingProviders */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_edit_component__ = __webpack_require__("../../../../../src/app/components/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sudoku_component__ = __webpack_require__("../../../../../src/app/components/sudoku.component.ts");

// import user

// import sudoku

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_sudoku_component__["a" /* SudokuComponent */] },
    { path: 'sudoku', component: __WEBPACK_IMPORTED_MODULE_2__components_sudoku_component__["a" /* SudokuComponent */] },
    { path: 'mis-datos', component: __WEBPACK_IMPORTED_MODULE_1__components_user_edit_component__["a" /* UserEditComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_sudoku_component__["a" /* SudokuComponent */] },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/sudoku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__ = __webpack_require__("../../../../../src/app/services/sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_grid__ = __webpack_require__("../../../../../src/app/models/grid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_game__ = __webpack_require__("../../../../../src/app/models/game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_p5__ = __webpack_require__("../../../../p5/lib/p5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_p5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_p5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_solver_solver__ = __webpack_require__("../../../../../src/app/models/solver/solver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_solver_solver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__models_solver_solver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_solver_generator__ = __webpack_require__("../../../../../src/app/models/solver/generator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_solver_generator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__models_solver_generator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { SudokuSolver } from '../models/solver/solver';
var SudokuComponent = (function () {
    function SudokuComponent(_route, _router, _userService, _sudokuService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._sudokuService = _sudokuService;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.grid = new __WEBPACK_IMPORTED_MODULE_5__models_grid__["a" /* Grid */]();
        this.gridMongo = new __WEBPACK_IMPORTED_MODULE_5__models_grid__["a" /* Grid */]();
        this.game = new __WEBPACK_IMPORTED_MODULE_6__models_game__["a" /* Game */](this.user, this.grid);
        this.game_inserted = new __WEBPACK_IMPORTED_MODULE_6__models_game__["a" /* Game */](this.user, this.grid);
        this.gameMongo = new __WEBPACK_IMPORTED_MODULE_6__models_game__["a" /* Game */](new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]('', '', '', ''), new __WEBPACK_IMPORTED_MODULE_5__models_grid__["a" /* Grid */]());
        this.titulo = 'Jugar Sudoku';
        this.range = Array.from({ length: 9 }, function (_, i) { return i; });
        setInterval(function () {
            _this.date = new Date();
        }, 1);
    }
    SudokuComponent.prototype.beforeUnloadHander = function (event) {
        localStorage.setItem('saved_grid', JSON.stringify(this.grid));
    };
    SudokuComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('sudoku.compose.ts cargando...');
        var s = function (p) {
            var canvas;
            p.setup = function () {
                canvas = p.createCanvas(451, 451);
                canvas.parent('sudokuGrid');
                p.background(240);
            };
            p.draw = function () {
                p.frameRate(15);
                p.drawCells();
                if (_this.game.checkGrid()) {
                    p.fill(50, 255, 50, 128);
                    p.rect(0, 0, 9 * 50, 9 * 50);
                }
            };
            p.drawCells = function () {
                // Dibuja el borde del rectangulo
                p.fill(255, 255, 255, 255);
                p.rect(0, 0, 450, 450);
                // Dibuja las celdas
                _this.range.forEach(function (row) {
                    _this.range.forEach(function (col) {
                        p.fill(255, 255, 255, 128);
                        if (row % 3 === 0 && col % 3 === 0) {
                            p.strokeWeight(3);
                            p.rect(col * 50, row * 50, 150, 150);
                            p.strokeWeight(1);
                        }
                        // Escoje el color de cada celda
                        if (_this.grid.getCell(row, col) === _this.game.selectedCell) {
                            p.fill(p.color('#1E88E5'));
                        }
                        else if (_this.grid.getCell(row, col).error) {
                            p.fill(255, 77, 77, 255);
                        }
                        else if (_this.grid.getCell(row, col).lightError) {
                            p.fill(255, 102, 102, 50);
                        }
                        else {
                            p.fill(255, 255, 255, 128);
                        }
                        // El texto y estilo de cada celda
                        p.rect(col * 50, row * 50, 50, 50);
                        p.fill(0, 0, 0, 255);
                        if (_this.grid.getCell(row, col).visible) {
                            p.textSize(20);
                            if (_this.grid.getCell(row, col).fixed)
                                p.textStyle(p.BOLD);
                            else
                                p.textStyle(p.NORMAL);
                            p.text(_this.grid.getCell(row, col).value, col * 50 + 50 / 4, row * 50 + 50 / 1.5);
                        }
                        // Errores deshabilitados
                        _this.grid.getCell(row, col).error = false;
                        _this.grid.getCell(row, col).lightError = false;
                    });
                });
            };
            p.mousePressed = function () {
                var x = p.mouseX;
                var y = p.mouseY;
                // Con X y Y modifican la celda para que se encuentre seleccionada
                var cell = _this.game.getCellAt(x, y);
                if (cell !== undefined) {
                    if (cell === _this.game.selectedCell) {
                        _this.game.setCellValue(cell, ((_this.game.selectedCell.number + 1) % 10));
                    }
                    else {
                        _this.game.setSelectedCell(cell);
                    }
                }
            };
            p.keyPressed = function () {
                // Controla si ingresa o elimina un valor
                if (p.keyCode === p.UP_ARROW) {
                    _this.game.moveSelection(0);
                }
                else if (p.keyCode === p.RIGHT_ARROW) {
                    _this.game.moveSelection(1);
                }
                else if (p.keyCode === p.DOWN_ARROW) {
                    _this.game.moveSelection(2);
                }
                else if (p.keyCode === p.LEFT_ARROW) {
                    _this.game.moveSelection(3);
                }
                else if (p.keyCode === 96 || p.keyCode === 48 || p.keyCode === p.BACKSPACE || p.keyCode === p.DELETE) {
                    _this.game.setCellValue(_this.game.selectedCell, 0);
                }
                else if (p.keyCode >= 49 && p.keyCode <= 57) {
                    _this.game.setCellValue(_this.game.selectedCell, p.keyCode - 48);
                }
                else if (p.keyCode >= 97 && p.keyCode <= 105) {
                    _this.game.setCellValue(_this.game.selectedCell, p.keyCode - 96);
                }
            };
        };
        var player = new __WEBPACK_IMPORTED_MODULE_7_p5__(s);
        this.getSavedGrid();
    };
    SudokuComponent.prototype.getSavedGrid = function () {
        this.saved_grid = this._sudokuService.getSavedGrid();
        if (this.saved_grid != null) {
            for (var row = 0; row < 9; row++) {
                for (var col = 0; col < 9; col++) {
                    this.grid.setCell(this.saved_grid.data[row][col].value, row, col);
                    this.grid.getCell(row, col).fixed = this.saved_grid.data[row][col].fixed;
                    this.game_inserted.grid = this.saved_grid;
                }
            }
            this.grid.createSpaces();
        }
    };
    SudokuComponent.prototype.buttonPressed = function (number) {
        this.game.setCellValue(this.game.selectedCell, number);
    };
    SudokuComponent.prototype.getGrid = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = "59d83b736c7b283f0f8833c2";
            _this._sudokuService.getGrid(_this.token, id).subscribe(function (response) {
                if (!response.grid) {
                    _this._router.navigate(['/']);
                }
                else {
                    console.log(response.grid);
                    _this.gridMongo = response.grid;
                    for (var row = 0; row < 9; row++) {
                        for (var col = 0; col < 9; col++) {
                            _this.grid.setCell(_this.gridMongo.data[row][col].value, row, col);
                        }
                    }
                    _this.grid.createSpaces();
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    console.log(error);
                }
            });
        });
    };
    SudokuComponent.prototype.insertGame = function () {
        var _this = this;
        this._sudokuService.insertGame(this.game_inserted).subscribe(function (response) {
            var game = response.game;
            _this.game_inserted = game;
            if (!game) {
                _this.alertRegister = 'Error al registrarse';
                setTimeout(function () { this.alertRegister = false; }.bind(_this), 3000);
            }
            else {
                _this.alertRegister = 'Registro se ha realizado correctamente';
                _this.game_inserted = new __WEBPACK_IMPORTED_MODULE_6__models_game__["a" /* Game */](_this.user, _this.grid);
                setTimeout(function () { this.alertRegister = false; }.bind(_this), 3000);
            }
        }, function (error) {
            localStorage.setItem('saved_grid', JSON.stringify(_this.grid));
            var alertRegister = error;
            if (alertRegister != null) {
                var body = JSON.parse(error._body);
                _this.alertRegister = body.message;
                console.log(error);
            }
        });
    };
    SudokuComponent.prototype.getGame = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = _this.user.name;
            _this._sudokuService.getGame(_this.token, id).subscribe(function (response) {
                if (!response.game) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.gridMongo = response.game.grid;
                    for (var row = 0; row < 9; row++) {
                        for (var col = 0; col < 9; col++) {
                            _this.grid.setCell(_this.gridMongo.data[row][col].value, row, col);
                        }
                    }
                    _this.grid.showSpaces();
                }
            }, function (error) {
                _this.getSavedGrid();
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    console.log(error);
                }
            });
        });
    };
    SudokuComponent.prototype.createGridDifficultyClient = function (difficulty) {
        var generator = new __WEBPACK_IMPORTED_MODULE_9__models_solver_generator__["Generator"]();
        generator.newSudoku();
        var sudoku = generator.dispertion(difficulty);
        var grid = this.grid.matrizToGrid(sudoku);
        this.gridMongo = grid;
        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
                this.grid.setCell(this.gridMongo.data[row][col].value, row, col);
                this.game_inserted.grid = this.grid;
            }
        }
        this.grid.createSpaces();
    };
    SudokuComponent.prototype.getGridDifficulty = function (difficulty) {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this._sudokuService.getGridDifficulty(_this.token, difficulty).subscribe(function (response) {
                if (!response.grid) {
                    _this._router.navigate(['/']);
                }
                else {
                    console.log(response.grid);
                    _this.gridMongo = response.grid;
                    for (var row = 0; row < 9; row++) {
                        for (var col = 0; col < 9; col++) {
                            _this.grid.setCell(_this.gridMongo.data[row][col].value, row, col);
                        }
                    }
                    _this.grid.createSpaces();
                    _this.game_inserted.grid = _this.grid;
                }
            }, function (error) {
                _this.createGridDifficultyClient(difficulty);
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    console.log(error);
                }
            });
        });
    };
    SudokuComponent.prototype.rSolveClient = function () {
        var _this = this;
        var cout = 0;
        var emptySpaces = this.game.grid.emptySpaces();
        var sudoku = this.grid.gridToMatriz(this.game_inserted);
        console.log("solving sudoku problem");
        console.log(sudoku);
        var sudokuSolver = new __WEBPACK_IMPORTED_MODULE_8__models_solver_solver__["SudokuSolver"](sudoku);
        var start = performance.now();
        sudokuSolver.solve(); //solo encuentra una solucion
        var resuelto = function () {
            if (sudokuSolver.solutions.length != 0) {
                //sudokuSolver.findSolutions();//encuentra mas de una solucion
                var end = performance.now();
                var duration = end - start;
                console.log("solution");
                console.log(sudokuSolver.solutions[0]);
                console.log("time of resolution:\n\t " + duration + " ms\n\t " + duration / 1000 + " seg\n\t " + (duration / 1000) / 60 + " min");
                var grid_1 = _this.grid.matrizToGrid(sudokuSolver.solutions[0]);
                var _loop_1 = function (p) {
                    setTimeout(function () {
                        var _a = emptySpaces[p], x = _a[0], y = _a[1];
                        _this.game.setSelectedCell(_this.game.grid.getCell(x, y));
                        _this.game.setCellValue(_this.game.selectedCell, grid_1.data[x][y].value);
                    }, 100 * cout++);
                };
                for (var p in emptySpaces) {
                    _loop_1(p);
                }
            }
            else
                setTimeout(function () { resuelto(); }, 1000);
        };
        setTimeout(function () { resuelto(); }, 1000);
    };
    SudokuComponent.prototype.rSolve = function () {
        var _this = this;
        var cout = 0;
        var emptySpaces = this.game.grid.emptySpaces();
        console.log(this.game_inserted);
        this._sudokuService.rSolveGame(this.game_inserted).subscribe(function (response) {
            if (!response.grid) {
                _this._router.navigate(['/']);
            }
            else {
                console.log(response.grid);
                _this.gridMongo = response.grid;
                var _loop_2 = function (p) {
                    setTimeout(function () {
                        var _a = emptySpaces[p], x = _a[0], y = _a[1];
                        _this.game.setSelectedCell(_this.game.grid.getCell(x, y));
                        _this.game.setCellValue(_this.game.selectedCell, _this.gridMongo.data[x][y].value);
                    }, 100 * cout++);
                };
                for (var p in emptySpaces) {
                    _loop_2(p);
                }
            }
        }, function (error) {
            _this.rSolveClient();
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                console.log(error);
            }
        });
    };
    return SudokuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SudokuComponent.prototype, "beforeUnloadHander", null);
SudokuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sudoku',
        template: __webpack_require__("../../../../../src/app/views/sudoku.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__["a" /* SudokuService */]],
        host: { 'window:beforeunload': 'setConfirmUnload' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__["a" /* SudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__["a" /* SudokuService */]) === "function" && _d || Object])
], SudokuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sudoku.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEditComponent = (function () {
    function UserEditComponent(_userService) {
        this._userService = _userService;
        this.titulo = 'Actualizar mis datos';
        // LocalStorage
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        console.log('user-edit.component.ts cargando...');
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.updateUser(this.user)
            .subscribe(function (response) {
            if (!_this.identity._id) {
                _this.alertUpdate = 'El usuario no se ha actualizado';
            }
            else {
                // this.user = response.user;
                localStorage.setItem('identity', JSON.stringify(_this.user));
                document.getElementById("identity_name").innerHTML = _this.user.name;
                _this.alertUpdate = 'Datos actualizados correctamente';
            }
        }, function (error) {
            var alertUpdate = error;
            if (alertUpdate != null) {
                var body = JSON.parse(error._body);
                _this.alertUpdate = body.message;
                console.log(error);
            }
        });
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-edit',
        template: __webpack_require__("../../../../../src/app/views/user-edit.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserEditComponent);

var _a;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/cell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
var Cell = (function () {
    function Cell(value, row, col) {
        this.value = value;
        this.row = row;
        this.col = col;
        this.error = false;
        this.lightError = false;
        this.fixed = false;
    }
    Cell.prototype.setValue = function (value) {
        this.value = value;
        this.visible = value > 0;
    };
    Cell.prototype.getValue = function () {
        return this.value;
    };
    return Cell;
}());

//# sourceMappingURL=cell.js.map

/***/ }),

/***/ "../../../../../src/app/models/game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
var Game = (function () {
    function Game(user, grid) {
        this.user = user;
        this.grid = grid;
        this.range = Array.from({ length: 9 }, function (_, i) { return i; });
        this.error;
    }
    Game.prototype.checkGrid = function () {
        return this.grid.check();
    };
    Game.prototype.isValid = function () {
        var _this = this;
        this.range.forEach(function (i) {
            if (!_this.grid.isValid(_this.grid.rows[i])) {
                _this.error = "Error el numero se repite en la fila";
                return false;
            }
        });
        return true;
    };
    Game.prototype.setCellValue = function (cell, value) {
        if (!cell.fixed && value >= 0 && value <= 10) {
            cell.setValue(value);
            this.setSelectedCell(cell);
        }
    };
    Game.prototype.setSelectedCell = function (cell) {
        var _this = this;
        this.selectedCell = cell;
        this.range.forEach(function (row) {
            _this.range.forEach(function (col) {
                _this.grid.getCell(row, col).highlight = (_this.grid.getCell(row, col).value === cell.value);
            });
        });
    };
    Game.prototype.getCellAt = function (x, y) {
        var row = Math.floor(y / 50);
        var col = Math.floor(x / 50);
        if (row < 0 || row > 8 || col < 0 || col > 8) {
            return undefined;
        }
        else {
            return this.grid.getCell(row, col);
        }
    };
    Game.prototype.moveSelection = function (direction) {
        if (this.selectedCell) {
            var row = this.selectedCell.row;
            var col = this.selectedCell.col;
            switch (direction) {
                case 0:
                    // Si la direccion es UP_ARROW
                    this.setSelectedCell(this.grid.getCell(Math.max(0, row - 1), col));
                    break;
                case 1:
                    // Si la direccion es RIGHT_ARROW
                    this.setSelectedCell(this.grid.getCell(row, Math.min(8, col + 1)));
                    break;
                case 2:
                    // Si la direccion es LEFT_ARROW
                    this.setSelectedCell(this.grid.getCell(Math.min(8, row + 1), col));
                    break;
                case 3:
                    // Si la direccion es BACK_ARROW
                    this.setSelectedCell(this.grid.getCell(row, Math.max(0, col - 1)));
                    break;
            }
        }
    };
    return Game;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ "../../../../../src/app/models/grid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__("../../../../../src/app/models/cell.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__("../../../../../src/app/models/range.ts");


var Grid = (function () {
    function Grid() {
        var _this = this;
        this.data = new Array();
        this.rows = new Array();
        this.cols = new Array();
        this.squares = new Array();
        this.range = Array.from({ length: 9 }, function (_, i) { return i; });
        this.range.forEach(function (i) {
            _this.data[i] = new Array();
            _this.range.forEach(function (j) {
                _this.data[i][j] = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](0, i, j);
            });
        });
        this.checker();
    }
    Grid.prototype.createSpaces = function () {
        var _this = this;
        this.range.forEach(function (row) {
            _this.range.forEach(function (col) {
                _this.getCell(row, col).fixed = _this.getCell(row, col).value != 0;
                _this.getCell(row, col).visible = _this.getCell(row, col).value != 0;
            });
        });
    };
    Grid.prototype.showSpaces = function () {
        var _this = this;
        this.range.forEach(function (row) {
            _this.range.forEach(function (col) {
                _this.getCell(row, col).visible = _this.getCell(row, col).value != 0;
            });
        });
    };
    Grid.prototype.setCell = function (value, row, col) {
        this.data[row][col].value = value;
    };
    Grid.prototype.getCell = function (row, col) {
        return this.data[row][col];
    };
    Grid.prototype.checker = function () {
        var _this = this;
        this.range.forEach(function (idx) {
            _this.rows[idx] = new Array();
            _this.cols[idx] = new Array();
            _this.squares[idx] = new Array();
        });
        var idx = 0;
        this.range.forEach(function (row) {
            _this.range.forEach(function (col) {
                _this.rows[row].push(_this.getCell(row, col));
                _this.cols[col].push(_this.getCell(row, col));
                idx++;
            });
        });
        this.range.forEach(function (row) {
            _this.range.forEach(function (col) {
                var indexSqr = Math.floor(row / 3) + Math.floor(col / 3) + 2 * Math.floor(col / 3);
                _this.squares[indexSqr].push(_this.getCell(row, col));
            });
        });
    };
    Grid.prototype.isValid = function (array) {
        var valid = true;
        var elems = [];
        var cells = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i].visible) {
                if (elems.indexOf(array[i].value) === -1) {
                    elems.push(array[i].value);
                    cells.push(array[i]);
                }
                else {
                    var cell1 = array[i];
                    var cell2 = cells[elems.indexOf(array[i].value)];
                    cell1.error = true;
                    cell2.error = true;
                    valid = false;
                    break;
                }
            }
        }
        return valid;
    };
    Grid.prototype.check = function () {
        var _this = this;
        var error = false;
        this.range.forEach(function (i) {
            //Check squares
            if (!_this.isValid(_this.squares[i])) {
                error = true;
                var x = Math.floor(i / 3) * 3;
                var y = i % 3 * 3;
                for (var j = 0; j < _this.squares[i].length; j++) {
                    _this.squares[i][j].lightError = true;
                }
            }
            //Check rows
            if (!_this.isValid(_this.rows[i])) {
                error = true;
                for (var j = 0; j < _this.rows[i].length; j++) {
                    _this.rows[i][j].lightError = true;
                }
            }
            //Check cols
            if (!_this.isValid(_this.cols[i])) {
                error = true;
                for (var j = 0; j < _this.cols[i].length; j++) {
                    _this.cols[i][j].lightError = true;
                }
            }
        });
        if (!error) {
            var completed = true;
            this.range.forEach(function (row) {
                _this.range.forEach(function (col) {
                    if (_this.getCell(row, col).value < 1)
                        completed = false;
                });
            });
        }
        return completed;
    };
    Grid.prototype.emptySpaces = function () {
        var obj = {};
        var rand = new __WEBPACK_IMPORTED_MODULE_1__range__["a" /* Range */]([]);
        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
                if (this.getCell(row, col).value == 0)
                    for (;;) {
                        var r = rand.nextRandom(0, 100);
                        if (!obj[r]) {
                            obj[r] = [row, col];
                            break;
                        }
                    }
            }
        }
        //console.log("empty Spaces: ");
        //console.log(obj);
        return obj;
    };
    Grid.prototype.gridToMatriz = function (grid) {
        grid = grid.grid;
        var arr = [];
        for (var _i = 0, _a = grid.data; _i < _a.length; _i++) {
            var k = _a[_i];
            k.forEach(function (cell) { arr.push(cell.value); });
        }
        var sudoku = new Array();
        for (var i = 0; i < 9; i++) {
            sudoku.push(new Array());
            for (var j = 0; j < 9; j++) {
                sudoku[i].push(arr.shift());
            }
        }
        return sudoku;
    };
    Grid.prototype.matrizToGrid = function (sudoku) {
        var grid = new Grid();
        grid.data = new Array();
        for (var i = 0; i < 9; i++) {
            grid.data[i] = new Array();
            for (var j = 0; j < 9; j++) {
                var cell = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](sudoku[i][j], i, j);
                cell.error = false;
                cell.lightError = false;
                cell.visible = false;
                cell.fixed = false;
                grid.data[i][j] = cell;
            }
        }
        return grid;
    };
    return Grid;
}());

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "../../../../../src/app/models/range.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Range; });
/*
    author: Adrian Prendas Araya
*/
var Range = (function () {
    function Range(arr) {
        this.index = 0;
        this.existentes = arr;
        this.conjunto = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.posibles = this.conjunto.filter(function (x) { return arr.indexOf(x) == -1; });
    }
    Range.prototype[Symbol.iterator] = function () {
        return this;
    };
    Range.prototype.next = function () {
        if (this.index < this.posibles.length)
            return { done: false, value: this.posibles[this.index++] };
        this.index = 0;
        return { value: undefined, done: true };
    };
    Range.prototype.nextRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Range;
}());

//# sourceMappingURL=range.js.map

/***/ }),

/***/ "../../../../../src/app/models/solver/generator.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  erick?? o interne!???
*/
const {Range} = __webpack_require__("../../../../../src/app/models/solver/range.js");
let {nextRandom} = __webpack_require__("../../../../../src/app/models/solver/test_sudoku.js");

class Generator{
  constructor(){
    this.board = new Board();  
  }
  newSudoku(){
    this.board.start();
  }
  validate(){
    this.board.validate();
  }
  getSudoku(){
    return this.board.sudoku;
  }
   dispertion(difficulty){
    var emptySpaces = 0;
    switch(difficulty){
      case 'easy':emptySpaces = 40; break;
      case 'medium':emptySpaces = 50; break;
      case 'hard':emptySpaces = 60; break;
      default: return this.dispertion('medium');
    }
    return this.board.dispertion(emptySpaces);
  }
}


class Board{
  constructor(){
    this.grid   = new Grid();
    this.sudoku = new Array();  
  }
  start(){
    this.generateSudoku();
  }
  solucion(){
    var i = 0;
    var j = 0;
    for ( i=0; i<9; i++){
      for( j=0; j<9; j++){
        console.log(this.sudoku[i][j]+". ");
      }
    }
  }
  generateSudoku(){
    this.initSudoku();
    this.generateCell(0);
  }
  initSudoku(){
    for (var row = 0; row < this.grid.rows; ++ row)
      this.sudoku[row] = new Array(this.grid.cols);
  }
  generateCell(id){
    if (id == this.grid.rows * this.grid.cols) 
      return(true);
    
    var row  = Math.floor(id / this.grid.rows);
    var col  = id - (row * this.grid.rows)
    var suit = this.shuffle(this.grid.suit);
    
    for (var index in suit) {
      this.sudoku[row][col] = suit[index];

      if ( this.isValidCell(row, col) )
        if ( this.generateCell(id + 1) )
          return(true);
    }

    this.sudoku[row][col] = null;
    return(false);
  }
  isValidCell(row, col){
    return( this.isValidRow(row, col) &&
            this.isValidColumn(row, col) &&
            this.isValidRegion(row, col) );
  }
  isValidRow(row, col){
    var count = new Array();
    for (var c = 0; c <= col; ++ c) {
      if (count[ this.sudoku[row][c] ] != null)
        return(false);
      count[ this.sudoku[row][c] ] = 1;
    }
    return(true);
  }
  isValidColumn(row, col){
    var count = new Array();
    for (var r = 0; r <= row; ++ r) {
      if (count[ this.sudoku[r][col] ] != null)
        return(false);
      count[ this.sudoku[r][col] ] = 1;
    }
    return(true);
  }
  isValidRegion(row, col){
    var count = new Array();
    var rowi  = this.grid.region * Math.floor(row / this.grid.region);
    var coli  = this.grid.region * Math.floor(col / this.grid.region);

    for (var r = rowi; r <= row; ++ r)
      for (var c = coli; c <= col; ++ c) {
        if ( count[ this.sudoku[r][c] ] != null)
          return(false);
        count[ this.sudoku[r][c] ] = 1;
      }

    return(true);
  }
  isValidSudoku(){
    var cells = this.grid.getCellValues();

    var valid = true;
    for (var row in this.sudoku)
      for (var col in this.sudoku[row])
        if (cells[row][col] != this.sudoku[row][col]) {
          valid = false;
          break;
        }
        
    return(valid);
  }
  shuffle(suit){
    for (var i in suit)
      suit = swap(suit, i, Math.floor( Math.random() * suit.length ) );
    return(suit);
  }
  copy(sudoku){
    let s = new Array();
    for(let i = 0; i < sudoku.length; i++){
      s.push(new Array());
      for(let j = 0; j < sudoku[0].length; j++){
        s[i].push(sudoku[i][j]);
      }
    }
    return s;
  }
  dispertion(emptySpaces){
    let sudoku = this.copy(this.sudoku);
    for(;emptySpaces!=0;){
        let x = nextRandom(0,8)
        let y = nextRandom(0,8)
        if(sudoku[x][y]!=0){
          sudoku[x][y]=0;
          emptySpaces--;
        }
    }
    return sudoku;
  }
}


class Grid{
  constructor(){
    this.rows   = 9;
    this.cols   = 9;
    this.region = 3;
    this.spans  = new Array(4, 4, 4, 3, 3, 3, 2, 2, 2);
    this.tips   = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8);
    this.suit   = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  return(array);
}

module.exports ={
  Generator
}

/***/ }),

/***/ "../../../../../src/app/models/solver/range.js":
/***/ (function(module, exports) {

/*
	author: Adrian Prendas Araya
*/
class Range{
	constructor(arr){
		this.index = 0;
		this.existentes = arr;
		this.conjunto = [1,2,3,4,5,6,7,8,9];
		this.posibles = this.conjunto.filter(x => arr.indexOf(x)==-1);
	}
	next(){
		if(this.index<this.posibles.length)
			return {done: false, value: this.posibles[this.index++]}
		this.index = 0;
		return { value: undefined, done: true }
	}
	[Symbol.iterator](){
    	return this;
  	}
}

module.exports = {Range}


/***/ }),

/***/ "../../../../../src/app/models/solver/solver.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	author: Adrian Prendas Araya
	email: a6r2an@gmail.com
*/
let {Range} = __webpack_require__("../../../../../src/app/models/solver/range.js");
let {nextRandom} = __webpack_require__("../../../../../src/app/models/solver/test_sudoku.js");

class SudokuSolver {
	constructor(sudoku){
		this.initialSudoku = sudoku;
		this.solutions = [];
	}
	row(sudoku,x){
		return sudoku[x];
	}
	col(sudoku,y){
		let colum = [];
		sudoku.forEach(x => colum.push(x[y]));
		return colum;
	}
	square3x3(sudoku,x,y){//O(9)
		let arr = [];
		let dx = Math.floor(x/3);
		let dy = Math.floor(y/3);
		let lenI = (dx*3)+3;
		let lenJ = (dy*3)+3;
		for(let i = dx*3; i < lenI ; i++){
			for(let j = dy*3; j <lenJ; j++){
				arr.push(sudoku[i][j]);
			}
		}
		return arr;
	}
	contains(x,y,sudoku){
		let row = this.row(sudoku,x);
		let col = this.col(sudoku,y);
		let square3x3 = this.square3x3(sudoku,x,y);
		let contains = square3x3.concat(row.concat(col));
		contains = contains.filter(x=>x!=0);//quitando 0
		contains = contains.filter((a,b)=>contains.indexOf(a)==b);//quitar repetidos
		return contains;
	}
	countEmptySpaces(sudoku){//solo para cuestiones graficas, en realidad el algoritmo no se usa
		let c = 0;
		for(let i = 0; i < sudoku.length; i++){
			for(let j = 0; j < sudoku[0].length; j++){
				if(sudoku[i][j]<1) c++;
			}
		}
		return c;
	}
	getHash(sudoku){//para comparar sudokus y no repetir en DB
		if(!sudoku)sudoku = this.initialSudoku;
		let str = "";
		this.initialSudoku.forEach((row)=>{
			row.forEach((val)=>{
				str += val;
			})
		})
		return str;
	}
	solvePrint(){
		let count = 0;
		let emptySpaces = this.emptySpaces();
		console.log('length: '+Object.keys(emptySpaces).length);
		console.log(emptySpaces);
		let rsolve = (sudoku,spaces,i)=>{
			if(i==Object.keys(spaces).length)
				return this.solutions.push(sudoku);
			let [x,y] = spaces[Object.keys(spaces)[i]];
			let contains = this.contains(x,y,sudoku);
			let range = new Range(contains);
			console.log(`{contenidos: ${contains}}`);
			console.log(`{posibles: ${[...range]}}`);
			for(let n of range){
				if(this.solutions.length==0){
					setTimeout(()=>{
						sudoku[x][y] = n;
						let c = this.countEmptySpaces(sudoku);
						console.log(`{x:${x}, y:${y}, n:${n}, i:${i}, c:${c}}`);
						let s = this.copy(sudoku);
						console.log(s);
						rsolve(s,spaces,i+1);	
					},1000*count++);
				}
			}
		}
		rsolve(this.initialSudoku,emptySpaces,0);
	}
	findSolutions(){
		let emptySpaces = this.emptySpaces();//n=9, O~(n^2)
		console.log(`espacios en blanco: ${Object.keys(emptySpaces).length}`);
		let rsolve = (sudoku,spaces,i)=>{
			if(i==Object.keys(spaces).length)
				return this.solutions.push(sudoku);
			let [x,y] = spaces[Object.keys(spaces)[i]];
			let contains = this.contains(x,y,sudoku);
			let range = new Range(contains);
			for(let n of range){
				sudoku[x][y] = n;
				let s = this.copy(sudoku);//de O(81) a // O(1)?
				//console.log(s);
				rsolve(s,spaces,i+1);	
			}
		}
		rsolve(this.initialSudoku,emptySpaces,0);
		this.endOfCalculation = true;
	}
	emptySpaces(){		
		let obj = {};
		let k=0;
		this.initialSudoku.forEach((val,i)=>{
			this.initialSudoku[i].forEach((val, j)=>{
				if(this.initialSudoku[i][j]==0){
					obj[k++] = [i,j];
				}
			});
		});
		return obj;
	}
	copy(sudoku){//O(1) y mas DRY
		return JSON.parse(JSON.stringify(sudoku));
	}
	solve(){
		let emptySpaces = this.emptySpaces();//O(81)
		console.log(`empty spaces: ${Object.keys(emptySpaces).length}`);
		let rsolve = (sudoku,spaces,i)=>{
			if(i==Object.keys(spaces).length)
				return this.solutions.push(sudoku);
			let [x,y] = spaces[Object.keys(spaces)[i]];
			let contains = this.contains(x,y,sudoku);
			let range = new Range(contains);
			for(let n of range){
				if(this.solutions.length==0){
					//setTimeout(()=>{
						sudoku[x][y] = n;
						let s = this.copy(sudoku);//de O(81) a //O(1)??
						//console.log(s);
						rsolve(s,spaces,i+1);	
					//},0);
				}
			}
		}
		rsolve(this.initialSudoku,emptySpaces,0);
	}
}

module.exports = { SudokuSolver }

/***/ }),

/***/ "../../../../../src/app/models/solver/sudokus.js":
/***/ (function(module, exports) {

/*
	author: Adrian Prendas Araya
	email: a6r2an@gmail.com
*/
let sudoku0 = [[0,0,0,2,6,0,7,0,1],
			   [6,8,0,0,7,0,0,9,0],
			   [1,9,0,8,3,4,5,6,0],
			   [8,2,0,1,0,0,0,4,0],
			   [0,0,4,6,0,2,9,0,0],
			   [0,5,0,0,0,3,0,2,8],
			   [0,0,9,3,0,0,0,7,4],
			   [0,4,0,0,5,0,0,3,6],
			   [7,0,3,0,1,8,0,0,0]];

let sudoku1 = [[5,3,0,0,7,0,0,0,0],
			   [6,0,0,1,9,5,0,0,0],
			   [0,9,8,0,0,0,0,6,0],
			   [8,0,0,0,6,0,0,0,3],
			   [4,0,0,8,0,3,0,0,1],
			   [7,0,0,0,2,0,0,0,6],
			   [0,6,0,0,0,0,2,8,0],
			   [0,0,0,4,1,9,0,0,5],
			   [0,0,0,0,8,0,0,7,9]];

let sudoku_easy = [[0,0,7,0,0,0,0,3,0],
				   [0,0,0,7,4,6,2,8,0],
				   [5,0,4,0,3,2,0,0,7],
				   [0,2,0,9,0,5,0,0,3],
				   [0,0,0,0,7,0,8,2,0],
				   [0,3,0,0,2,0,7,5,9],
				   [3,0,6,0,0,9,0,0,0],
				   [0,0,2,0,6,7,9,0,0],
                   [0,7,0,0,0,0,0,4,0]]; // Este es el primer sudoku

let sudoku_medium = [[0,0,6,0,2,7,9,0,5],
                     [5,0,0,6,0,0,8,0,0],
   	                 [0,0,0,0,0,5,0,0,2],
   	                 [0,0,5,0,3,0,0,0,4],
   	                 [0,0,0,2,0,8,3,0,0],
   	                 [0,3,7,0,4,6,0,0,0],
   	                 [2,0,0,3,0,0,0,0,6],
   	                 [0,7,4,0,0,9,5,0,8],
                     [0,6,0,0,7,0,0,0,0]]; // Este es el segundo sudoku

let sudoku_hard = [[0,0,0,0,0,0,0,1,0],
                   [0,0,6,0,0,0,0,2,3],
                   [0,2,0,0,3,0,4,0,0],
                   [8,0,0,0,0,5,0,0,0],
                   [0,3,0,0,1,0,0,0,4],
                   [0,0,9,6,0,0,0,0,0],
                   [0,0,0,9,0,0,7,0,0],
                   [0,1,0,0,2,0,0,4,0],
                   [5,0,0,0,0,8,0,0,0]]; // Este es el tercer sudoku



function ArrayOfSudokus(){
	let arr = [];
	arr.push({sudoku0});
	arr.push({sudoku1});
	arr.push({sudoku_easy});
	arr.push({sudoku_medium});
	arr.push({sudoku_hard});
	return arr
}

module.exports ={
	ArrayOfSudokus
}

/***/ }),

/***/ "../../../../../src/app/models/solver/test_sudoku.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*
	author: Adrian Prendas Araya
	email: a6r2an@gmail.com
*/
const {ArrayOfSudokus} = __webpack_require__("../../../../../src/app/models/solver/sudokus.js");
const {SudokuSolver} = __webpack_require__("../../../../../src/app/models/solver/solver.js");
const {Range} = __webpack_require__("../../../../../src/app/models/solver/range.js");

console.reset = function () {
  return process.stdout.write('\033c');
}

function clock(start) {
    if ( !start ) return process.hrtime();
    var end = process.hrtime(start);
    return Math.round((end[0]*1000) + (end[1]/1000000));
}

function nextRandom(min, max){
	return Math.floor(Math.random() * ((max+1) - min)) + min;
}

function test(sudoku_name){//[sudoku0, sudoku1, sudoku2, sudoku_easy, sudoku_medium, sudoku_hard]
	
	if(!sudoku_name){
		console.log(`el sudoku '${sudoku_name}' no existe`);
		console.log(`pruebe los siguientes sudokus:`);
		console.log(`${ArrayOfSudokus().map(x=>console.log(`'${Object.keys(x)[0]}'`))}`);
		console.log(`\nejecute:\ntest('sudoku_name')`);
		return;
	}

	let sudoku = ArrayOfSudokus().find(x=>x[sudoku_name])

	console.log('************Sudoku Inicial************');
	console.log(sudoku);
	console.log('**************************************');
	let board = new SudokuSolver(sudoku[sudoku_name]);
	
	let start = clock();
	board.solve();
	let duration = clock(start);	
	
	
	console.log(`solucion`);
	console.log(board.solutions[0]);	
	console.log(`tiempo de resolucion: 	${duration}ms,	${duration/1000}seg,	${(duration/1000)/60}min`);


	start = clock();
	board.findSolutions();
	duration = clock(start);	
	
	
	console.log(`soluciones`);
	console.log(board.solutions);	
	console.log(`tiempo de resolucion: 	${duration}ms,	${duration/1000}seg,	${(duration/1000)/60}min`);

}

module.exports={
	test,
	clock,
	nextRandom
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, name, username, password) {
        this._id = _id;
        this.name = name;
        this.username = username;
        this.password = password;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: '/api/'
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ "../../../../../src/app/services/sudoku.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SudokuService = (function () {
    function SudokuService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
        this.saved_grid;
    }
    SudokuService.prototype.getGrid = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'sudoku/get-grid/' + id, options)
            .map(function (res) { return res.json(); });
    };
    SudokuService.prototype.getSavedGrid = function () {
        var saved_grid = JSON.parse(localStorage.getItem('saved_grid'));
        if (saved_grid != 'undefined') {
            this.saved_grid = saved_grid;
        }
        else {
            this.saved_grid = null;
        }
        return saved_grid;
    };
    SudokuService.prototype.insertGrids = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'sudoku/insert-grid', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SudokuService.prototype.insertGame = function (game_insert) {
        var params = JSON.stringify(game_insert);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'sudoku/insert-game', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SudokuService.prototype.getGame = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'sudoku/get-game/' + id, options)
            .map(function (res) { return res.json(); });
    };
    SudokuService.prototype.getGridDifficulty = function (token, difficulty) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'sudoku/get-grid-diff/' + difficulty, options)
            .map(function (res) { return res.json(); });
    };
    //a6r1an////////////////////////////////////////////////////////////////////////////
    SudokuService.prototype.rSolveGame = function (game_insert) {
        var params = JSON.stringify(game_insert);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'sudoku/rSolve', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SudokuService;
}());
SudokuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SudokuService);

var _a;
//# sourceMappingURL=sudoku.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UserService.prototype.signup = function (user_to_login, gethash) {
        if (gethash === void 0) { gethash = null; }
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        var params = JSON.stringify(user_to_login);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != 'undefined') {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return identity;
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != 'undefined') {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService.prototype.register = function (user_to_register) {
        var params = JSON.stringify(user_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'register', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (user_to_update) {
        var params = JSON.stringify(user_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/views/sudoku.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"../models/solver/generator.js\" type=\"text/javascript\"></script> \n<script src=\"../models/solver/solver.js\" type=\"text/javascript\"></script> \n<script src=\"../models/solver/range.js\" type=\"text/javascript\"></script> \n<script src=\"../models/solver/test_sudoku.js\" type=\"text/javascript\"></script>\n\n<h3>\n  {{titulo}}</h3>\n  <div class=\"container wrapper\">\n    <div class=\"row\">\n      <div *ngIf=\"alertRegister\" class=\"alert alert-info\">\n        {{alertRegister}}\n      </div>\n      <div class=\"col-12 hora\" align=\"left\"><h4>Hora: {{ date | date:'hh:mm:ss'}}</h4></div>\n      <div class=\"col-12\" align=\"center\">\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n          Nuevo\n        </button>\n\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Elige la dificultad</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"row\">\n                  <div class=\"col-4\">\n                    <p>Esta dificultad permite aprender a los jugadores sin nada de experiencia</p>\n                    <br>\n                    <a href=\"#\" class=\"btn btn-success\"\n                    (click)=\"getGridDifficulty('easy')\" data-dismiss=\"modal\">Facil</a>\n                  </div>\n                  <div class=\"col-4\">\n                    <p>Permite a los jugadores con habilidad aprender a analizar</p>\n                    <br>\n                    <a href=\"#\" class=\"btn btn-warning\" (click)=\"getGridDifficulty('medium')\"\n                    data-dismiss=\"modal\">Medio</a>\n                  </div>\n                  <div class=\"col-4\">\n                    <p>Una modalidad mas dificil para los jugadores mas expertos y habilidosos</p>\n                    <br>\n                    <a href=\"#\" class=\"btn btn-danger\"\n                    (click)=\"getGridDifficulty('hard')\" data-dismiss=\"modal\">Dificil</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"insertGame()\">Guardar</button>\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"getGame()\">Cargar</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"rSolve()\">Resolver</button>\n      </div>\n      <div class=\"col-12\" align=\"center\">\n        <br>\n        <div id=\"sudokuGrid\"></div>\n        <br>\n      </div>\n      <div class=\"col-12\" align=\"center\">\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(1)\">1</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(2)\">2</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(3)\">3</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(4)\">4</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(5)\">5</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(6)\">6</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(7)\">7</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(8)\">8</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"buttonPressed(9)\">9</button>\n      </div>\n      <br>\n      <br>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/views/user-edit.html":
/***/ (function(module, exports) {

module.exports = "\n    <h3>{{titulo}}</h3>\n\n    <div *ngIf=\"alertUpdate\">\n        <div class=\"alert alert-info\">\n            {{alertUpdate}}\n        </div>\n    </div>\n\n    <form #userUpdateForm = \"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-10\">\n    <p><label>Nombre: </label>\n      <input type=\"text\" #name = \"ngModel\" name = \"name\" [(ngModel)]=\"user.name\" \n      class=\"form-control\" required/>\n      <span *ngIf=\"!name.valid && name.touched\">El nombre es obligatorio</span>\n    </p>\n    <p>\n        <label>Usuario: </label>\n        <input type=\"username\" #username=\"ngModel\" name=\"username\" [(ngModel)]=\"user.username\"\n        class=\"form-control\" required />\n        <span *ngIf=\"!username.valid && username.touched\">El usuario es obligatorio</span>\n      </p>\n        <input type=\"submit\" value=\"Actualizar\" class=\"btn btn-primary\">\n        </form> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n\n\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map