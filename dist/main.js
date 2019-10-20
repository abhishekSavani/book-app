(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assign-school/assign-school.module": [
		"./src/app/assign-school/assign-school.module.ts",
		"common",
		"assign-school-assign-school-module"
	],
	"./class/class.module": [
		"./src/app/class/class.module.ts",
		"common",
		"class-class-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"common",
		"home-home-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"common",
		"login-login-module"
	],
	"./school/school.module": [
		"./src/app/school/school.module.ts",
		"common",
		"school-school-module"
	],
	"./subject/subject.module": [
		"./src/app/subject/subject.module.ts",
		"common",
		"subject-subject-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n\t<div style=\"width: 100%;height: 56px;text-align: center;clear: both;\">\n\t\t<ui-view name=\"header\"></ui-view>\n\t</div>\n\t<div style=\"width: 100%;clear: both;margin-left: 250px;\">\n\t\t<div>\n\t\t\t  <ui-view name=\"content\"></ui-view>\n\t\t</div>\n\t</div>\n\t<div style=\"width: 100%;height: 100px;text-align: center;clear: both;padding-top: 10px;\">\n\t\t<ui-view name=\"footer\"></ui-view>\n\t</div>\n</div> -->\n<div class=\"wrapper\">\n\t<ui-view name=\"header\"></ui-view>\n\t<ui-view name=\"content\"></ui-view>\n\t<ui-view name=\"footer\"></ui-view>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, commonServ) {
        this.router = router;
        this.commonServ = commonServ;
        this.title = 'app';
        this.commonServ.setCurrentUser();
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.headerTitle = "Admin header portion";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouter"], _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _app_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.states */ "./src/app/app.states.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_class_class_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/class/class.service */ "./src/app/services/class/class.service.ts");
/* harmony import */ var _services_subject_subject_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/subject/subject.service */ "./src/app/services/subject/subject.service.ts");
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/school/school.service */ "./src/app/services/school/school.service.ts");
/* harmony import */ var _services_assign_school_assign_school_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/assign-school/assign-school.service */ "./src/app/services/assign-school/assign-school.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _http_interceptors_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./http-interceptors/index */ "./src/app/http-interceptors/index.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forRoot({ states: _app_states__WEBPACK_IMPORTED_MODULE_6__["APP_STATES"], useHash: false, otherwise: { state: 'app.login' } }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot({ timeOut: 1000, positionClass: 'toast-bottom-right' }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"]
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModuleFactoryLoader"], useClass: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SystemJsNgModuleLoader"] },
                _common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
                _http_interceptors_index__WEBPACK_IMPORTED_MODULE_19__["httpInterceptorProviders"],
                _services_class_class_service__WEBPACK_IMPORTED_MODULE_12__["ClassService"],
                _services_subject_subject_service__WEBPACK_IMPORTED_MODULE_13__["SubjectService"],
                _services_school_school_service__WEBPACK_IMPORTED_MODULE_14__["SchoolService"],
                _services_assign_school_assign_school_service__WEBPACK_IMPORTED_MODULE_15__["AssignSchoolService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.states.ts":
/*!*******************************!*\
  !*** ./src/app/app.states.ts ***!
  \*******************************/
/*! exports provided: APP_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STATES", function() { return APP_STATES; });
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");


var APP_STATES = [
    {
        name: 'app',
        //abstract: true,
        views: {
            "header": { component: _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"] },
            "footer": { component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"] },
        }
    },
    {
        name: 'app.login.**',
        url: '/admins/login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        name: 'app.home.**',
        url: '/admins/home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        name: 'app.school.**',
        url: '/admins/school',
        loadChildren: './school/school.module#SchoolModule'
    },
    {
        name: 'app.class.**',
        url: '/admins/class',
        loadChildren: './class/class.module#ClassModule'
    },
    {
        name: 'app.subject.**',
        url: '/admins/subject',
        loadChildren: './subject/subject.module#SubjectModule'
    },
    {
        name: 'app.assign-school.**',
        url: '/admins/assign-school',
        loadChildren: './assign-school/assign-school.module#AssignSchoolModule'
    },
];


/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var CommonService = /** @class */ (function () {
    function CommonService(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
        this.rootData = {};
        this.setCurrentUser = function () {
            var token = this.cookieValue = this.cookieService.get('myapp-token-admin');
            // console.log("token : ",token);
            if (!!token) {
                var payload = token.split(".")[1];
                payload = window.atob(payload);
                payload = JSON.parse(payload);
                this.rootData.currentUser = payload;
            }
            console.log("this.rootData.currentUser : ", this.rootData.currentUser);
        };
        //this.rootData.myTestName = "laxman";
    }
    CommonService.prototype.getCountry = function () {
        return this.http.get('/api/country/countryList');
    };
    CommonService.prototype.getState = function (country_id) {
        return this.http.get('/api/state', { params: { country_id: country_id } });
    };
    CommonService.prototype.getCity = function (state_id) {
        return this.http.get('/api/city', { params: { state_id: state_id } });
    };
    CommonService.prototype.getLatlongFromAddress = function (value) {
        return this.http.post('/adminapi/user/getLatlongFromAddress', value);
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p style=\"background-color: yellow\">\n  Admin footer portion\n</p> -->\n<footer class=\"main-footer\">\n    <!-- <div class=\"pull-right hidden-xs\">\n\n    </div> -->\n    <strong>All rights reserved.</strong>\n</footer>\n<!-- Scroll to Top Button-->\n<!-- <a class=\"scroll-to-top rounded\" href=\"#page-top\">\n  <i class=\"fa fa-angle-up\"></i>\n</a> -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"background-color: yellow\">\n  {{headerTitle}}\n  <div style=\"float: right;\">\n    <a (click)=\"logOut()\">Log out</a>\n  </div>\n</div> -->\n<header class=\"main-header\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\n    <a class=\"navbar-brand\" style=\"color: white;\">Book Store Admin</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n      data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n          <a class=\"nav-link\" uiSref=\"app.home\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>\n            <span class=\"nav-link-text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Manage Class\">\n            <a class=\"nav-link\" uiSref=\"app.class\">\n              <i class=\"fa fa-fw fa-contao\"></i>\n              <span class=\"nav-link-text\">Manage Class</span>\n            </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Manage Books\">\n            <a class=\"nav-link\" uiSref=\"app.subject\">\n              <i class=\"fa fa-fw fa-book\"></i>\n              <span class=\"nav-link-text\">Manage Books</span>\n            </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Registered School\">\n          <a class=\"nav-link\" uiSref=\"app.school\">\n            <i class=\"fa fa-fw fa-university\"></i>\n            <span class=\"nav-link-text\">Registered School</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Assign School\">\n          <a class=\"nav-link\" uiSref=\"app.assign-school\">\n            <i class=\"fa fa-fw fa-university\"></i>\n            <span class=\"nav-link-text\">Assign School</span>\n          </a>\n        </li>\n        <!-- <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Manage Massager\">\n          <a class=\"nav-link\" uiSref=\"app.massager\">\n            <i class=\"fa fa-fw fa-user\"></i>\n            <span class=\"nav-link-text\">Manage Massager</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Manage Testimonial\">\n          <a class=\"nav-link\" uiSref=\"app.testimonial\">\n            <i class=\"fa fa-fw fa-commenting-o\"></i>\n            <span class=\"nav-link-text\">Manage Testimonial</span>\n          </a>\n        </li> -->\n        <!-- <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tables\">\n        <a class=\"nav-link\" routerLink=\"/charts\">\n          <i class=\"fa fa-fw fa-area-chart\"></i>\n          <span class=\"nav-link-text\">Tables</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Users\">\n        <a class=\"nav-link\" routerLink=\"/users\">\n          <i class=\"fa fa-fw fa-user\"></i>\n          <span class=\"nav-link-text\">Users</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Components\">\n        <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseComponents\"\n          data-parent=\"#exampleAccordion\">\n          <i class=\"fa fa-fw fa-image\"></i>\n          <span class=\"nav-link-text\">Galleries</span>\n        </a>\n        <ul class=\"sidenav-second-level collapse\" id=\"collapseComponents\">\n          <li>\n            <a routerLink=\"/galleries\">\n              <i class=\"fa fa-fw fa-circle-o\"></i>\n              <span class=\"nav-link-text\">Category</span>\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"/gallery\">\n              <i class=\"fa fa-fw fa-circle-o\"></i>\n              <span class=\"nav-link-text\">Gallery</span>\n            </a>\n          </li>\n        </ul>\n      </li> -->\n      </ul>\n      <ul class=\"navbar-nav sidenav-toggler\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link text-center\" id=\"sidenavToggler\">\n            <i class=\"fa fa-fw fa-angle-left\"></i>\n          </a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"alertsDropdown\" href=\"#\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-fw fa-bell\"></i>\n            <span class=\"d-lg-none\">Alerts\n              <span class=\"badge badge-pill badge-warning\">6 New</span>\n            </span>\n            <span class=\"indicator text-warning d-none d-lg-block\">\n              <i class=\"fa fa-fw fa-circle\"></i>\n            </span>\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"alertsDropdown\">\n            <h6 class=\"dropdown-header\">New Alerts:</h6>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">\n              <span class=\"text-success\">\n                <strong>\n                  <i class=\"fa fa-long-arrow-up fa-fw\"></i>Status Update</strong>\n              </span>\n              <span class=\"small float-right text-muted\">11:21 AM</span>\n              <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.\n              </div>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">\n              <span class=\"text-danger\">\n                <strong>\n                  <i class=\"fa fa-long-arrow-down fa-fw\"></i>Status Update</strong>\n              </span>\n              <span class=\"small float-right text-muted\">11:21 AM</span>\n              <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.\n              </div>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">\n              <span class=\"text-success\">\n                <strong>\n                  <i class=\"fa fa-long-arrow-up fa-fw\"></i>Status Update</strong>\n              </span>\n              <span class=\"small float-right text-muted\">11:21 AM</span>\n              <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.\n              </div>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item small\" href=\"#\">View all alerts</a>\n          </div>\n        </li> -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logOut()\" style=\"color: white;\">\n            <i class=\"fa fa-fw fa-sign-out\"></i>Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http, router, commonServ) {
        this.http = http;
        this.router = router;
        this.commonServ = commonServ;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.headerTitle = "Admin header portion";
        $('#sidenavToggler').click(function () {
            $("body").toggleClass("sidenav-toggled");
            $("body").toggleClass("sidebar-collapse");
            //$('nav').toggleClass('fixed-top static-top');
        });
    };
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.http.post('/adminapi/user/logout', {})
            .subscribe(function (res) {
            console.log("Logout");
            _this.router.stateService.go('app.login');
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["UIRouter"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/http-interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/http-interceptors/index.ts ***!
  \********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop-interceptor */ "./src/app/http-interceptors/noop-interceptor.ts");
/* "Barrel" of Http Interceptors */


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__["NoopInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/http-interceptors/noop-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/noop-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



/** Pass untouched request through to the next request handler. */
var NoopInterceptor = /** @class */ (function () {
    // intercept(req: HttpRequest<any>, next: HttpHandler):
    //   Observable<HttpEvent<any>> {
    //   return next.handle(req);
    // }
    //constructor(private http: HttpClient){}
    function NoopInterceptor(cookieService) {
        this.cookieService = cookieService;
    }
    //Syntax - get( name: string ): string;
    NoopInterceptor.prototype.getCookie = function (key) {
        return this.cookieService.get(key);
    };
    //check Cookie
    //Syntax - check( name: string ): boolean;
    NoopInterceptor.prototype.checkCookie = function (key) {
        return this.cookieService.check(key);
    };
    NoopInterceptor.prototype.intercept = function (req, next) {
        // console.log(`AddTokenInterceptor - ${req.url}`);
        if (this.checkCookie("myapp-token-admin")) {
            var jsonReq = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.getCookie("myapp-token-admin")
                }
            });
            return next.handle(jsonReq);
        }
        else {
            return next.handle(req);
        }
    };
    NoopInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], NoopInterceptor);
    return NoopInterceptor;
}());



/***/ }),

/***/ "./src/app/services/assign-school/assign-school.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/assign-school/assign-school.service.ts ***!
  \*****************************************************************/
/*! exports provided: AssignSchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSchoolService", function() { return AssignSchoolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");




var AssignSchoolService = /** @class */ (function () {
    function AssignSchoolService(http) {
        this.http = http;
    }
    AssignSchoolService.prototype.addAssignSchool = function (rForm) {
        return this.http.post('/adminapi/assignschool/add', rForm);
    };
    AssignSchoolService.prototype.getAssignSchool = function () {
        return this.http.get('/adminapi/assignschool/getassignschools');
    };
    AssignSchoolService.prototype.getOneAssignSchool = function (id) {
        return this.http.get('/adminapi/assignschool/getoneassignschool/' + id);
    };
    AssignSchoolService.prototype.updateAssignSchool = function (rForm) {
        return this.http.put("/adminapi/assignschool/update/" + rForm.id, rForm);
    };
    AssignSchoolService.prototype.deleteAssignSchool = function (id) {
        return this.http.delete('/adminapi/assignschool/delete/' + id);
    };
    AssignSchoolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AssignSchoolService);
    return AssignSchoolService;
}());



/***/ }),

/***/ "./src/app/services/class/class.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/class/class.service.ts ***!
  \*************************************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");




var ClassService = /** @class */ (function () {
    function ClassService(http) {
        this.http = http;
    }
    ClassService.prototype.addClass = function (rForm) {
        return this.http.post('/adminapi/class/add', rForm);
    };
    ClassService.prototype.getClass = function () {
        return this.http.get('/adminapi/class/getclasses');
    };
    ClassService.prototype.getOneClass = function (id) {
        return this.http.get('/adminapi/class/getoneclass/' + id);
    };
    ClassService.prototype.updateClass = function (rForm) {
        return this.http.put("/adminapi/class/update/" + rForm.id, rForm);
    };
    ClassService.prototype.deleteClass = function (id) {
        return this.http.delete('/adminapi/class/delete/' + id);
    };
    ClassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClassService);
    return ClassService;
}());



/***/ }),

/***/ "./src/app/services/school/school.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/school/school.service.ts ***!
  \***************************************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");




var SchoolService = /** @class */ (function () {
    function SchoolService(http) {
        this.http = http;
    }
    SchoolService.prototype.addSchool = function (rForm) {
        return this.http.post('/adminapi/school/add', rForm);
    };
    SchoolService.prototype.getSchool = function () {
        return this.http.get('/adminapi/school/getschools');
    };
    SchoolService.prototype.getOneSchool = function (id) {
        return this.http.get('/adminapi/school/getoneschool/' + id);
    };
    SchoolService.prototype.updateSchool = function (rForm) {
        return this.http.put("/adminapi/school/update/" + rForm.id, rForm);
    };
    SchoolService.prototype.deleteSchool = function (id) {
        return this.http.delete('/adminapi/school/delete/' + id);
    };
    SchoolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchoolService);
    return SchoolService;
}());



/***/ }),

/***/ "./src/app/services/subject/subject.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/subject/subject.service.ts ***!
  \*****************************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");




var SubjectService = /** @class */ (function () {
    function SubjectService(http) {
        this.http = http;
    }
    SubjectService.prototype.addSubject = function (rForm) {
        return this.http.post('/adminapi/subject/add', rForm);
    };
    SubjectService.prototype.getSubject = function () {
        return this.http.get('/adminapi/subject/getsubjects');
    };
    SubjectService.prototype.getOneSubject = function (id) {
        return this.http.get('/adminapi/subject/getonesubject/' + id);
    };
    SubjectService.prototype.updateSubject = function (rForm) {
        return this.http.put("/adminapi/subject/update/" + rForm.id, rForm);
    };
    SubjectService.prototype.deleteSubject = function (id) {
        return this.http.delete('/adminapi/subject/delete/' + id);
    };
    SubjectService.prototype.getSubjectList = function (data) {
        return this.http.post('/adminapi/subject/getsubjectlist', data);
    };
    SubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\angular\book-store-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map