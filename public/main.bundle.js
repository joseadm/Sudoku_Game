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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<!-- Si identity es true muestra los divs -->\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\" *ngIf=\"identity\">\n  <a class=\"navbar-brand\" href=\"#\">Sudoku</a>\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse left\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Bienvenido {{identity.name}} <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n      </div>\n</nav>\n\n<div class=\"container-fluid\" *ngIf=\"identity\">\n  <div class=\"row\">\n    <nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar\">\n      <ul class=\"nav nav-pills flex-column\">\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/sudoku']\" class=\"nav-link\" href=\"#\">\n                <i class=\"fa fa-gamepad\" aria-hidden=\"true\"></i> Jugar Sudoku <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/mis-datos']\" class=\"nav-link\" href=\"#\">\n              <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Usuario</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\" href=\"#\">\n              <i class=\"fa fa-power-off\" aria-hidden=\"true\"></i> Salir</a>\n        </li>\n      </ul>\n    </nav>\n\n    <main class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\" role=\"main\" *ngIf=\"identity\">\n            <div [class.hidden]=\"!identity\">\n                <router-outlet></router-outlet>\n            </div>\n    </main>\n  </div>\n</div>\n\n<div class=\"container\">\n<div class=\"row\">\n  <!-- Inicio -->\n  <div class=\"col-sm-6 inicio_sesion\" *ngIf=\"!identity\">\n      <h1>Iniciar Sesion</h1>\n      <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n        <strong>Error</strong> {{errorMessage}}\n      </div>\n\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-10\">\n      <p>\n        <label>Usuario: </label>\n        <input type=\"username\" #username=\"ngModel\" name=\"username\" [(ngModel)]=\"user.username\"\n        class=\"form-control\" required />\n        <span *ngIf=\"!username.valid && username.touched\">El usuario es obligatorio</span>\n      </p>\n        <p><label>Contraseña: </label>\n          <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"user.password\"\n          class=\"form-control\" required/></p>\n          <input type=\"submit\" value=\"Entrar\" class=\"btn btn-primary\">\n        </form>\n    </div>\n    <div class=\"col-lg-6 registrar\" *ngIf=\"!identity\">\n        <h1>Registrate</h1>\n        <div *ngIf=\"alertRegister\" class=\"alert alert-warning\">\n            <strong>Error</strong> {{alertRegister}}\n          </div>\n        <form #registerForm = \"ngForm\" (ngSubmit)=\"onSubmitRegister()\" class=\"col-md-10\">\n        <p><label>Nombre: </label>\n          <input type=\"text\" #name = \"ngModel\" name = \"name\" [(ngModel)]=\"user_register.name\" \n          class=\"form-control\" required/>\n          <span *ngIf=\"!name.valid && name.touched\">El nombre es obligatorio</span>\n        </p>\n        <p>\n            <label>Usuario: </label>\n            <input type=\"username\" #username=\"ngModel\" name=\"username\" [(ngModel)]=\"user_register.username\"\n            class=\"form-control\" required />\n            <span *ngIf=\"!username.valid && username.touched\">El usuario es obligatorio</span>\n          </p>\n            <p><label>Contraseña: </label>\n              <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"user_register.password\"\n              class=\"form-control\" required/>\n              <span *ngIf=\"!password.valid && password.touched\">La contrasena es obligatorio</span>\n            </p>\n            <input type=\"submit\" value=\"Registrarse\" class=\"btn btn-primary\">\n            </form><br>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
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
    function AppComponent(_userService) {
        this._userService = _userService;
        this.title = 'Sudoku';
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '');
        this.user_register = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '');
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
                        _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '');
                    }
                }, function (error) {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        var body = JSON.parse(error._body);
                        _this.errorMessage = body.message;
                        console.log(error);
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
            if (!user._id) {
                _this.alertRegister = 'Error al registrarse';
            }
            else {
                _this.alertRegister = 'Registro se ha realizado correctamente';
                _this.user_register = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '');
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
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]],
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SudokuComponent = (function () {
    function SudokuComponent(_route, _router, _userService, _sudokuService) {
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
    }
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
                            p.fill(51, 133, 255, 255);
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
    };
    SudokuComponent.prototype.getGrid = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = "59bb188b831ba28a64fd9d4d";
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
            }
            else {
                _this.alertRegister = 'Registro se ha realizado correctamente';
                _this.game_inserted = new __WEBPACK_IMPORTED_MODULE_6__models_game__["a" /* Game */](_this.user, _this.grid);
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
    SudokuComponent.prototype.getGame = function () {
        var _this = this;
        // 59befdd23d513cc0d5b6f544
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
                            if (_this.grid.getCell(row, col).value == 0)
                                _this.grid.setCell(_this.gridMongo.data[row][col].value, row, col);
                        }
                    }
                    _this.grid.showSpaces();
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
    SudokuComponent.prototype.getGameDifficulty = function (difficulty) {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = '59bb188b831ba28a64fd9d4d';
            switch (difficulty) {
                case 'easy':
                    id = '59bb188b831ba28a64fd9d4d';
                    break;
                case 'medium':
                    id = '59bf0729a0be6dc70f0f8dfa';
                    break;
                case 'hard':
                    id = '59bf0752f8ebcdc737d021bb';
                    break;
            }
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
    return SudokuComponent;
}());
SudokuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sudoku',
        template: __webpack_require__("../../../../../src/app/views/sudoku.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__["a" /* SudokuService */]]
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
    }
    Game.prototype.checkGrid = function () {
        return this.grid.check();
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
    return Grid;
}());

//# sourceMappingURL=grid.js.map

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
    url: 'api/',
    ip: '127.0.0.1'
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

module.exports = "\n    <h3>{{titulo}}</h3>\n    <div class=\"container\">\n            <div class=\"row\">\n                        <div *ngIf=\"alertRegister\" class=\"alert alert-info\">\n                                         {{alertRegister}}\n                                      </div>\n                <div class=\"col-12\" align=\"center\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n                        Nuevo\n                      </button>\n                      \n                      <!-- Modal -->\n                      <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Elige la dificultad</h5>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n                            </div>\n                            <div class=\"modal-body\">\n                                  <div class=\"row\">\n                                    <div class=\"col-4\"><p>Esta dificultad permite aprender a los jugadores sin nada de experiencia</p><a href=\"#\" class=\"btn btn-success\" (click) = \"getGrid()\" data-dismiss=\"modal\">Facil</a></div>\n                                    <div class=\"col-4\"><p>Permite a los jugadores con habilidad aprender a analizar</p><a href=\"#\" class=\"btn btn-warning\">Medio</a></div>\n                                    <div class=\"col-4\"><p>Una modalidad mas dificil para los jugadores mas expertos y habilidosos</p><a href=\"#\" class=\"btn btn-danger\">Dificil</a></div>                                    \n                                  </div>\n                                  </div>\n                                  <div class=\"modal-footer\">\n                                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                    </div>\n                            </div>\n                          </div>\n                        </div>\n\n                        <button type=\"button\" class=\"btn btn-success\" (click) = \"insertGame()\">Guardar</button>\n                        <button type=\"button\" class=\"btn btn-warning\" (click) = \"getGame()\">Cargar</button>     \n                        <button type=\"button\" class=\"btn btn-danger\">Resolver</button>\n                </div>\n                    <div class=\"col-12\" align=\"center\">\n                            <br>\n                            <div id=\"sudokuGrid\"></div>\n\n</div>\n</div>\n\n\n    "

/***/ }),

/***/ "../../../../../src/app/views/user-edit.html":
/***/ (function(module, exports) {

module.exports = "\n    <h3>{{titulo}}</h3>\n\n    <div *ngIf=\"alertUpdate\">\n        <div class=\"alert alert-info\">\n            {{alertUpdate}}\n        </div>\n    </div>\n\n    <form #userUpdateForm = \"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-10\">\n    <p><label>Nombre: </label>\n      <input type=\"text\" #name = \"ngModel\" name = \"name\" [(ngModel)]=\"user.name\" \n      class=\"form-control\" required/>\n      <span *ngIf=\"!name.valid && name.touched\">El nombre es obligatorio</span>\n    </p>\n    <p>\n        <label>Usuario: </label>\n        <input type=\"username\" #username=\"ngModel\" name=\"username\" [(ngModel)]=\"user.username\"\n        class=\"form-control\" required />\n        <span *ngIf=\"!username.valid && username.touched\">El usuario es obligatorio</span>\n      </p>\n        <input type=\"submit\" value=\"Actualizar\" class=\"btn btn-primary\">\n        </form>\n\n\n"

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