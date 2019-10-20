(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["class-class-module"],{

/***/ "./src/app/class/class.component.css":
/*!*******************************************!*\
  !*** ./src/app/class/class.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzL2NsYXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/class/class.component.html":
/*!********************************************!*\
  !*** ./src/app/class/class.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <section class=\"content-header\">\n      <h1>\n        Manage Class\n      </h1>\n    </section>\n    <section class=\"content\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">Class Listing</h3>\n          <a uiSref=\"app.class-add\" style=\"float:right;width:auto;margin:0px 1px;\"\n            class=\"btn btn-block btn-primary btn-flat\">Add\n            Class</a>\n        </div>\n        <div class=\"box-body\">\n            <div *ngIf=\"class.length === 0\">{{notfound}}</div>\n            <div *ngIf=\"class.length > 0\">\n                <table class=\"table table-bordered table-striped\">\n                    <thead>\n                      <tr>\n                        <th>Class Name</th>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let class_new of class | paginate: { itemsPerPage: 10, currentPage: p }\">\n                        <td>{{ class_new.class_name }}</td>\n                        <td>\n                          <a style=\"text-decoration: none; color: blue;\" uiSref=\"app.class-update\" [uiParams]=\"{ id : class_new._id }\" class=\"fa fa-edit\"></a>\n                          <a style=\"margin-left: 10px; cursor: pointer; color: red;\" class=\"fa fa-trash\" (click)=\"deleteUser(class_new._id)\"></a>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <br>\n                  <pagination-controls style=\"float: right;\" (pageChange)=\"p = $event\"></pagination-controls>\n            </div>\n        </div>\n      </div>\n    </section>\n  </div>"

/***/ }),

/***/ "./src/app/class/class.component.ts":
/*!******************************************!*\
  !*** ./src/app/class/class.component.ts ***!
  \******************************************/
/*! exports provided: ClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function() { return ClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_class_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/class/class.service */ "./src/app/services/class/class.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var ClassComponent = /** @class */ (function () {
    function ClassComponent(router, toastr, ClassService, CommonService) {
        this.router = router;
        this.toastr = toastr;
        this.ClassService = ClassService;
        this.CommonService = CommonService;
        this.class = [];
    }
    ClassComponent.prototype.ngOnInit = function () {
        if (this.CommonService.rootData.currentUser != undefined) {
            this.getClassList();
        }
    };
    ClassComponent.prototype.getClassList = function () {
        var _this = this;
        this.ClassService.getClass().subscribe(function (res) {
            if (res.data.length > 0) {
                _this.class = res.data;
                // console.log("this", this.users);
            }
            else {
                _this.notfound = "Record Not Found";
            }
        });
    };
    ClassComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.ClassService.deleteClass(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.getClassList();
                _this.toastr.success('Class deleted successfully');
            }
            else {
                // console.log(res.message);
                _this.toastr.error('Error while deleting the class');
            }
        });
    };
    ClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class',
            template: __webpack_require__(/*! ./class.component.html */ "./src/app/class/class.component.html"),
            styles: [__webpack_require__(/*! ./class.component.css */ "./src/app/class/class.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["UIRouter"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _services_class_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassService"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], ClassComponent);
    return ClassComponent;
}());



/***/ }),

/***/ "./src/app/class/class.module.ts":
/*!***************************************!*\
  !*** ./src/app/class/class.module.ts ***!
  \***************************************/
/*! exports provided: ClassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassModule", function() { return ClassModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class.component */ "./src/app/class/class.component.ts");
/* harmony import */ var _form_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-class.component */ "./src/app/class/form-class.component.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _empty_empty_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../empty/empty.module */ "./src/app/empty/empty.module.ts");









var APP_SUB_STATES = [
    // A state for the 'app.contact' submodule.
    {
        name: "app.class",
        url: "/admins/class",
        views: {
            "content@": { component: _class_component__WEBPACK_IMPORTED_MODULE_3__["ClassComponent"] },
        },
    },
    {
        name: "app.class-add",
        url: "/admins/class/add",
        views: {
            "content@": { component: _form_class_component__WEBPACK_IMPORTED_MODULE_4__["FormClassComponent"] },
        },
    },
    {
        name: "app.class-update",
        url: "/admins/class/update/:id",
        views: {
            "content@": { component: _form_class_component__WEBPACK_IMPORTED_MODULE_4__["FormClassComponent"] },
        },
    }
];
var ClassModule = /** @class */ (function () {
    function ClassModule() {
    }
    ClassModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_class_component__WEBPACK_IMPORTED_MODULE_3__["ClassComponent"], _form_class_component__WEBPACK_IMPORTED_MODULE_4__["FormClassComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _empty_empty_module__WEBPACK_IMPORTED_MODULE_8__["EmptyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forChild({ states: APP_SUB_STATES }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ]
        })
    ], ClassModule);
    return ClassModule;
}());



/***/ }),

/***/ "./src/app/class/form-class.component.html":
/*!*************************************************!*\
  !*** ./src/app/class/form-class.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n      <h1>\n        Manage Class\n      </h1>\n    </section>\n    <section class=\"content\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">{{title_header}}</h3>\n        </div>\n        <form [formGroup]=\"rForm\" (ngSubmit)=\"addClass(rForm.value)\" class=\"form-horizontal\">\n          <div class=\"box-body\">\n            <div class=\"form-group\">\n              <label for=\"class_name\" class=\"col-sm-2 control-label\">Class Name\n              </label>\n              <div class=\"col-sm-4\">\n                <input type=\"text\" formControlName=\"class_name\" class=\"form-control\" ngModel=\"{{getoneclasses.class_name}}\" id=\"class_name\" autocomplete=\"off\">\n              </div>\n  \n              <div\n                *ngIf=\"rForm.controls['class_name'].invalid && (rForm.controls['class_name'].dirty || rForm.controls['class_name'].touched)\"\n                class=\"col-sm-4 text-danger\">\n  \n                <div *ngIf=\"rForm.controls['class_name'].errors.required\">\n                  Enter your Class\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-2 col-sm-9\">\n                <button type=\"submit\" class=\"btn btn-primary\">{{title_button}}</button>\n                <a style=\"margin-left: 10px;\" class=\"btn btn-danger\" uiSref=\"app.class\">Cancel</a>\n              </div>\n            </div>\n  \n          </div>\n        </form>\n      </div>\n    </section>\n  </div>"

/***/ }),

/***/ "./src/app/class/form-class.component.ts":
/*!***********************************************!*\
  !*** ./src/app/class/form-class.component.ts ***!
  \***********************************************/
/*! exports provided: FormClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClassComponent", function() { return FormClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _services_class_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/class/class.service */ "./src/app/services/class/class.service.ts");







var FormClassComponent = /** @class */ (function () {
    function FormClassComponent(router, ClassService, toastr, fb, commonServ) {
        this.router = router;
        this.ClassService = ClassService;
        this.toastr = toastr;
        this.fb = fb;
        this.commonServ = commonServ;
        this.getoneclasses = [];
        this.rForm = fb.group({
            'class_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    FormClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
            this.router.stateService.go('app.login');
        }
        this.title_header = 'Add Class';
        this.title_button = 'Submit';
        if (this.router.stateService.params.id != undefined) {
            this.title_header = 'Update Class';
            this.title_button = 'Update';
            this.ClassService.getOneClass(this.router.stateService.params.id).subscribe(function (res) {
                _this.getoneclasses = res.data;
            });
        }
    };
    FormClassComponent.prototype.addClass = function (rForm) {
        var _this = this;
        if (this.rForm.valid) {
            if (this.router.stateService.params.id != undefined) {
                rForm.id = this.router.stateService.params.id;
                this.ClassService.updateClass(rForm).subscribe(function (res) {
                    if (res.status == 1) {
                        _this.toastr.success('Class updated successfully');
                        _this.router.stateService.go('app.class');
                    }
                    else {
                        _this.toastr.error('Error while updating the class');
                        _this.router.stateService.go('app.class');
                    }
                });
            }
            else {
                this.ClassService.addClass(rForm).subscribe(function (res) {
                    if (res.status == 1) {
                        _this.toastr.success('Class added successfully');
                        _this.router.stateService.go('app.class');
                    }
                    else {
                        _this.toastr.error('Error while adding the class');
                        _this.router.stateService.go('app.class');
                    }
                });
            }
        }
        else {
            Object.keys(this.rForm.controls).forEach(function (field) {
                var control = _this.rForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    FormClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-class',
            template: __webpack_require__(/*! ./form-class.component.html */ "./src/app/class/form-class.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouter"], _services_class_class_service__WEBPACK_IMPORTED_MODULE_6__["ClassService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], FormClassComponent);
    return FormClassComponent;
}());



/***/ })

}]);
//# sourceMappingURL=class-class-module.js.map