(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subject-subject-module"],{

/***/ "./src/app/subject/form-subject.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subject/form-subject.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Manage Books\n    </h1>\n  </section>\n  <section class=\"content\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h3 class=\"box-title\">{{title_header}}</h3>\n      </div>\n      <form [formGroup]=\"rForm\" (ngSubmit)=\"addSubject(rForm.value)\" class=\"form-horizontal\">\n        <div class=\"box-body\">\n          <div class=\"form-group\">\n            <label for=\"book_name\" class=\"col-sm-2 control-label\">Book Name\n            </label>\n            <div class=\"col-sm-4\">\n              <input type=\"text\" formControlName=\"book_name\" class=\"form-control\" id=\"book_name\" autocomplete=\"off\" ngModel=\"{{getonesubject.book_name}}\">\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['book_name'].invalid && (rForm.controls['book_name'].dirty || rForm.controls['book_name'].touched)\"\n              class=\"col-sm-4 text-danger\">\n\n              <div *ngIf=\"rForm.controls['book_name'].errors.required\">\n                Enter Book Name\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"book_price\" class=\"col-sm-2 control-label\">Book Price\n            </label>\n            <div class=\"col-sm-4\">\n              <input type=\"text\" formControlName=\"book_price\" class=\"form-control\" id=\"book_price\" autocomplete=\"off\" ngModel=\"{{getonesubject.book_price}}\">\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['book_price'].invalid && (rForm.controls['book_price'].dirty || rForm.controls['book_price'].touched)\"\n              class=\"col-sm-4 text-danger\">\n\n              <div *ngIf=\"rForm.controls['book_price'].errors.required\">\n                Enter Book Price\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"book_quantity\" class=\"col-sm-2 control-label\">Book Quantity\n            </label>\n            <div class=\"col-sm-4\">\n              <input type=\"text\" formControlName=\"book_quantity\" class=\"form-control\" id=\"book_quantity\" autocomplete=\"off\" ngModel=\"{{getonesubject.book_quantity}}\">\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['book_quantity'].invalid && (rForm.controls['book_quantity'].dirty || rForm.controls['book_quantity'].touched)\"\n              class=\"col-sm-4 text-danger\">\n\n              <div *ngIf=\"rForm.controls['book_quantity'].errors.required\">\n                Enter Book Quantity\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"book_points\" class=\"col-sm-2 control-label\">Book Point\n            </label>\n            <div class=\"col-sm-4\">\n              <input type=\"text\" formControlName=\"book_points\" class=\"form-control\" id=\"book_points\" autocomplete=\"off\" ngModel=\"{{getonesubject.book_points}}\">\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['book_points'].invalid && (rForm.controls['book_points'].dirty || rForm.controls['book_points'].touched)\"\n              class=\"col-sm-4 text-danger\">\n\n              <div *ngIf=\"rForm.controls['book_points'].errors.required\">\n                Enter Book Points\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-primary\">{{title_button}}</button>\n              <a style=\"margin-left: 10px;\" class=\"btn btn-danger\" uiSref=\"app.subject\">Cancel</a>\n            </div>\n          </div>\n\n        </div>\n      </form>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/subject/form-subject.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/form-subject.component.ts ***!
  \***************************************************/
/*! exports provided: FormSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubjectComponent", function() { return FormSubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _services_class_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/class/class.service */ "./src/app/services/class/class.service.ts");
/* harmony import */ var _services_subject_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/subject/subject.service */ "./src/app/services/subject/subject.service.ts");








var FormSubjectComponent = /** @class */ (function () {
    function FormSubjectComponent(router, ClassService, SubjectService, toastr, fb, commonServ) {
        this.router = router;
        this.ClassService = ClassService;
        this.SubjectService = SubjectService;
        this.toastr = toastr;
        this.fb = fb;
        this.commonServ = commonServ;
        this.getonesubject = [];
        this.classes = [];
        this.rForm = fb.group({
            'book_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'book_price': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'book_quantity': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'book_points': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    FormSubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
            this.router.stateService.go('app.login');
        }
        this.getClasses();
        this.title_header = 'Add Book';
        this.title_button = 'Submit';
        if (this.router.stateService.params.id != undefined) {
            this.title_header = 'Update Book';
            this.title_button = 'Update';
            this.SubjectService.getOneSubject(this.router.stateService.params.id).subscribe(function (res) {
                _this.getonesubject = res.data;
            });
        }
    };
    FormSubjectComponent.prototype.getClasses = function () {
        var _this = this;
        this.ClassService.getClass().subscribe(function (res) {
            _this.classes = res.data;
        });
    };
    FormSubjectComponent.prototype.addSubject = function (rForm) {
        var _this = this;
        if (this.rForm.valid) {
            if (this.router.stateService.params.id != undefined) {
                rForm.id = this.router.stateService.params.id;
                this.SubjectService.updateSubject(rForm).subscribe(function (res) {
                    if (res.status == 1) {
                        _this.toastr.success('Subject updated successfully');
                        _this.router.stateService.go('app.subject');
                    }
                    else {
                        _this.toastr.error('Error while updating the subject');
                        _this.router.stateService.go('app.subject');
                    }
                });
            }
            else {
                this.SubjectService.addSubject(rForm).subscribe(function (res) {
                    if (res.status == 1) {
                        _this.toastr.success('Subject added successfully');
                        _this.router.stateService.go('app.subject');
                    }
                    else {
                        _this.toastr.error('Error while adding the subject');
                        _this.router.stateService.go('app.subject');
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
    FormSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-subject',
            template: __webpack_require__(/*! ./form-subject.component.html */ "./src/app/subject/form-subject.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouter"], _services_class_class_service__WEBPACK_IMPORTED_MODULE_6__["ClassService"], _services_subject_subject_service__WEBPACK_IMPORTED_MODULE_7__["SubjectService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], FormSubjectComponent);
    return FormSubjectComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>\n      Manage Book\n    </h1>\n  </section>\n  <section class=\"content\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h3 class=\"box-title\">Book Listing</h3>\n        <a uiSref=\"app.subject-add\" style=\"float:right;width:auto;margin:0px 1px;\"\n          class=\"btn btn-block btn-primary btn-flat\">Add\n          Book</a>\n      </div>\n      <div class=\"box-body\">\n        <div *ngIf=\"subjects.length === 0\">{{notfound}}</div>\n        <div *ngIf=\"subjects.length > 0\">\n            <table class=\"table table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th>Book Name</th>\n                    <th>Book Price</th>\n                    <th>Book Quantity</th>\n                    <th>Book Point</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let subjects_new of subjects | paginate: { itemsPerPage: 10, currentPage: p }\">\n                    <td>{{ subjects_new.book_name }}</td>\n                    <td>{{ subjects_new.book_price }}</td>\n                    <td>{{ subjects_new.book_quantity }}</td>\n                    <td>{{ subjects_new.book_points }}</td>\n                    <td>\n                      <a style=\"text-decoration: none; color: blue;\" uiSref=\"app.subject-update\" [uiParams]=\"{ id : subjects_new._id }\" class=\"fa fa-edit\"></a>\n                      <a style=\"margin-left: 10px; cursor: pointer; color: red;\" class=\"fa fa-trash\" (click)=\"deleteSubject(subjects_new._id)\"></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <br>\n              <pagination-controls style=\"float: right;\" (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_subject_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subject/subject.service */ "./src/app/services/subject/subject.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(router, toastr, SubjectService, CommonService) {
        this.router = router;
        this.toastr = toastr;
        this.SubjectService = SubjectService;
        this.CommonService = CommonService;
        this.subjects = [];
    }
    SubjectComponent.prototype.ngOnInit = function () {
        if (this.CommonService.rootData.currentUser != undefined) {
            this.getSubjectList();
        }
    };
    SubjectComponent.prototype.getSubjectList = function () {
        var _this = this;
        this.SubjectService.getSubject().subscribe(function (res) {
            if (res.data.length > 0) {
                _this.subjects = res.data;
                // console.log("this", this.subjects);
            }
            else {
                _this.notfound = "Record Not Found";
            }
        });
    };
    SubjectComponent.prototype.deleteSubject = function (id) {
        var _this = this;
        this.SubjectService.deleteSubject(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.getSubjectList();
                _this.toastr.success('Subject deleted successfully');
            }
            else {
                // console.log(res.message);
                _this.toastr.error('Error while deleting the subject');
            }
        });
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["UIRouter"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _services_subject_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject.module.ts":
/*!*******************************************!*\
  !*** ./src/app/subject/subject.module.ts ***!
  \*******************************************/
/*! exports provided: SubjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectModule", function() { return SubjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _subject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _form_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-subject.component */ "./src/app/subject/form-subject.component.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _empty_empty_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../empty/empty.module */ "./src/app/empty/empty.module.ts");









var APP_SUB_STATES = [
    // A state for the 'app.contact' submodule.
    {
        name: "app.subject",
        url: "/admins/subject",
        views: {
            "content@": { component: _subject_component__WEBPACK_IMPORTED_MODULE_3__["SubjectComponent"] },
        },
    },
    {
        name: "app.subject-add",
        url: "/admins/subject/add",
        views: {
            "content@": { component: _form_subject_component__WEBPACK_IMPORTED_MODULE_4__["FormSubjectComponent"] },
        },
    },
    {
        name: "app.subject-update",
        url: "/admins/subject/update/:id",
        views: {
            "content@": { component: _form_subject_component__WEBPACK_IMPORTED_MODULE_4__["FormSubjectComponent"] },
        },
    }
];
var SubjectModule = /** @class */ (function () {
    function SubjectModule() {
    }
    SubjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_subject_component__WEBPACK_IMPORTED_MODULE_3__["SubjectComponent"], _form_subject_component__WEBPACK_IMPORTED_MODULE_4__["FormSubjectComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _empty_empty_module__WEBPACK_IMPORTED_MODULE_8__["EmptyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forChild({ states: APP_SUB_STATES }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ]
        })
    ], SubjectModule);
    return SubjectModule;
}());



/***/ })

}]);
//# sourceMappingURL=subject-subject-module.js.map