(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <div class=\"row\">\n      <!-- <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-yellow\"><i class=\"fa fa-users\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Massager</span>\n            <span class=\"info-box-number\">{{massager}}</span>\n          </div>\n        </div>\n      </div> -->\n\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-green\"><i class=\"fa fa-user-circle\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">User</span>\n            <span class=\"info-box-number\">{{user}}</span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n\n      <!-- <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-red\"><i class=\"fa fa-list\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">User</span>\n            <span class=\"info-box-number\">{{massager}}</span>\n          </div>\n        </div>\n      </div> -->\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, commonServ) {
        this.router = router;
        this.commonServ = commonServ;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // console.log("this==>", this.commonServ.rootData);
        if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
            this.router.stateService.go('app.login');
        }
        // this.massagertype = 3;
        // this.getMassagerList(this.massagertype);
        // this.usertype = 2;
        // this.getUsersList(this.usertype);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouter"], _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _empty_empty_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../empty/empty.module */ "./src/app/empty/empty.module.ts");







var APP_SUB_STATES = [
    // A state for the 'app.contact' submodule.
    {
        name: "app.home",
        url: "/admins/home",
        views: {
            "content@": { component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
        },
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _empty_empty_module__WEBPACK_IMPORTED_MODULE_6__["EmptyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forChild({ states: APP_SUB_STATES })
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map