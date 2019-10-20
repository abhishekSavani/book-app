(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assign-school-assign-school-module"],{

/***/ "./src/app/assign-school/assign-school.component.css":
/*!***********************************************************!*\
  !*** ./src/app/assign-school/assign-school.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbi1zY2hvb2wvYXNzaWduLXNjaG9vbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/assign-school/assign-school.component.html":
/*!************************************************************!*\
  !*** ./src/app/assign-school/assign-school.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <section class=\"content-header\">\n      <h1>\n        Assign School\n      </h1>\n    </section>\n    <section class=\"content\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">Assign School Listing</h3>\n          <a uiSref=\"app.assign-school-add\" style=\"float:right;width:auto;margin:0px 1px;\"\n            class=\"btn btn-block btn-primary btn-flat\">Add\n            Assign School</a>\n        </div>\n        <div class=\"box-body\">\n          <div *ngIf=\"assignschools.length === 0\">{{notfound}}</div>\n          <div *ngIf=\"assignschools.length > 0\">\n              <table class=\"table table-bordered table-striped\">\n                  <thead>\n                    <tr>\n                      <th>School Name</th>\n                      <th>Class Name</th>\n                      <th>Book Name</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let assignschools_new of assignschools | paginate: { itemsPerPage: 10, currentPage: p }\">\n                      <td>{{ assignschools_new.school_id.school_name }}</td>\n                      <td>{{ assignschools_new.class_id.class_name }}</td>\n                      <td>{{ assignschools_new.book_id.book_name }}</td>\n                      <td>\n                        <a style=\"text-decoration: none; color: blue;\" uiSref=\"app.assign-school-update\" [uiParams]=\"{ id : assignschools_new._id }\" class=\"fa fa-edit\"></a>\n                        <a style=\"margin-left: 10px; cursor: pointer; color: red;\" class=\"fa fa-trash\" (click)=\"deleteAssignSchool(assignschools_new._id)\"></a>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <br>\n                <pagination-controls style=\"float: right;\" (pageChange)=\"p = $event\"></pagination-controls>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>"

/***/ }),

/***/ "./src/app/assign-school/assign-school.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/assign-school/assign-school.component.ts ***!
  \**********************************************************/
/*! exports provided: AssignSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSchoolComponent", function() { return AssignSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _services_assign_school_assign_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/assign-school/assign-school.service */ "./src/app/services/assign-school/assign-school.service.ts");






var AssignSchoolComponent = /** @class */ (function () {
    function AssignSchoolComponent(router, toastr, commonServ, AssignSchoolService) {
        this.router = router;
        this.toastr = toastr;
        this.commonServ = commonServ;
        this.AssignSchoolService = AssignSchoolService;
        this.assignschools = [];
    }
    AssignSchoolComponent.prototype.ngOnInit = function () {
        if (this.commonServ.rootData.currentUser != undefined) {
            this.getAssignSchoolList();
        }
    };
    AssignSchoolComponent.prototype.getAssignSchoolList = function () {
        var _this = this;
        this.AssignSchoolService.getAssignSchool().subscribe(function (res) {
            if (res.data.length > 0) {
                _this.assignschools = res.data;
                // console.log("this", this.subjects);
            }
            else {
                _this.notfound = "Record Not Found";
            }
        });
    };
    AssignSchoolComponent.prototype.deleteAssignSchool = function (id) {
        var _this = this;
        this.AssignSchoolService.deleteAssignSchool(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.getAssignSchoolList();
                _this.toastr.success('Subject deleted successfully');
            }
            else {
                // console.log(res.message);
                _this.toastr.error('Error while deleting the subject');
            }
        });
    };
    AssignSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assign-school',
            template: __webpack_require__(/*! ./assign-school.component.html */ "./src/app/assign-school/assign-school.component.html"),
            styles: [__webpack_require__(/*! ./assign-school.component.css */ "./src/app/assign-school/assign-school.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouter"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _services_assign_school_assign_school_service__WEBPACK_IMPORTED_MODULE_5__["AssignSchoolService"]])
    ], AssignSchoolComponent);
    return AssignSchoolComponent;
}());



/***/ }),

/***/ "./src/app/assign-school/assign-school.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/assign-school/assign-school.module.ts ***!
  \*******************************************************/
/*! exports provided: AssignSchoolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSchoolModule", function() { return AssignSchoolModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _assign_school_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assign-school.component */ "./src/app/assign-school/assign-school.component.ts");
/* harmony import */ var _form_assign_school_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-assign-school.component */ "./src/app/assign-school/form-assign-school.component.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _empty_empty_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../empty/empty.module */ "./src/app/empty/empty.module.ts");









var APP_SUB_STATES = [
    // A state for the 'app.contact' submodule.
    {
        name: "app.assign-school",
        url: "/admins/assign-school",
        views: {
            "content@": { component: _assign_school_component__WEBPACK_IMPORTED_MODULE_3__["AssignSchoolComponent"] },
        },
    },
    {
        name: "app.assign-school-add",
        url: "/admins/assign-school/add",
        views: {
            "content@": { component: _form_assign_school_component__WEBPACK_IMPORTED_MODULE_4__["FormAssignSchoolComponent"] },
        },
    },
    {
        name: "app.assign-school-update",
        url: "/admins/assign-school/update/:id",
        views: {
            "content@": { component: _form_assign_school_component__WEBPACK_IMPORTED_MODULE_4__["FormAssignSchoolComponent"] },
        },
    }
];
var AssignSchoolModule = /** @class */ (function () {
    function AssignSchoolModule() {
    }
    AssignSchoolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_assign_school_component__WEBPACK_IMPORTED_MODULE_3__["AssignSchoolComponent"], _form_assign_school_component__WEBPACK_IMPORTED_MODULE_4__["FormAssignSchoolComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _empty_empty_module__WEBPACK_IMPORTED_MODULE_8__["EmptyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forChild({ states: APP_SUB_STATES }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ]
        })
    ], AssignSchoolModule);
    return AssignSchoolModule;
}());



/***/ }),

/***/ "./src/app/assign-school/form-assign-school.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/assign-school/form-assign-school.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Assign School\n    </h1>\n  </section>\n  <section class=\"content\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h3 class=\"box-title\">{{title_header}}</h3>\n      </div>\n      <form [formGroup]=\"rForm\" (ngSubmit)=\"addAssignSchool(rForm.value)\" class=\"form-horizontal\">\n        <div class=\"box-body\">\n            <div class=\"form-group\">\n                <label for=\"school_id\" class=\"col-sm-2 control-label\">School\n                </label>\n                <div class=\"col-sm-4\">\n                  <select class=\"form-control\" formControlName=\"school_id\" ngModel=\"{{getoneassignschool.school_id}}\">\n                    <option value=\"\">Select School</option>\n                    <option *ngFor=\"let school_new of school\" value=\"{{school_new._id}}\">{{school_new.school_name}}</option>\n                  </select>\n                </div>\n              \n                <div\n                  *ngIf=\"rForm.controls['school_id'].invalid && (rForm.controls['school_id'].dirty || rForm.controls['school_id'].touched)\"\n                  class=\"col-sm-4 text-danger\">\n                  <div *ngIf=\"rForm.controls['school_id'].errors?.required\">\n                    Select School\n                  </div>\n                </div>\n              </div>\n\n            <div class=\"form-group\">\n                <label for=\"class_id\" class=\"col-sm-2 control-label\">Class\n                </label>\n                <div class=\"col-sm-4\">\n                  <select class=\"form-control\" formControlName=\"class_id\" ngModel=\"{{getoneassignschool.class_id}}\">\n                    <option value=\"\">Select Class</option>\n                    <option *ngFor=\"let classes_new of class\" value=\"{{classes_new._id}}\">{{classes_new.class_name}}</option>\n                  </select>\n                </div>\n              \n                <div\n                  *ngIf=\"rForm.controls['class_id'].invalid && (rForm.controls['class_id'].dirty || rForm.controls['class_id'].touched)\"\n                  class=\"col-sm-4 text-danger\">\n                  <div *ngIf=\"rForm.controls['class_id'].errors?.required\">\n                    Select Class\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"book_id\" class=\"col-sm-2 control-label\">Book\n                  </label>\n                  <div class=\"col-sm-4\">\n                    <select class=\"form-control\" formControlName=\"book_id\" ngModel=\"{{getoneassignschool.book_id}}\">\n                      <option value=\"\">Select Book</option>\n                      <option *ngFor=\"let books_new of books\" value=\"{{books_new._id}}\">{{books_new.book_name}}</option>\n                    </select>\n                  </div>\n                \n                  <div\n                    *ngIf=\"rForm.controls['book_id'].invalid && (rForm.controls['book_id'].dirty || rForm.controls['book_id'].touched)\"\n                    class=\"col-sm-4 text-danger\">\n                    <div *ngIf=\"rForm.controls['book_id'].errors?.required\">\n                      Select Book\n                    </div>\n                  </div>\n                </div>\n\n              <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-9\">\n                    <button type=\"submit\" class=\"btn btn-primary\">{{title_button}}</button>\n                    <a style=\"margin-left: 10px;\" class=\"btn btn-danger\" uiSref=\"app.assign-school\">Cancel</a>\n                </div>\n              </div>\n\n        </div>\n          </form>\n        </div>\n          </section>\n</div>"

/***/ }),

/***/ "./src/app/assign-school/form-assign-school.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/assign-school/form-assign-school.component.ts ***!
  \***************************************************************/
/*! exports provided: FormAssignSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAssignSchoolComponent", function() { return FormAssignSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/school/school.service */ "./src/app/services/school/school.service.ts");
/* harmony import */ var _services_class_class_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/class/class.service */ "./src/app/services/class/class.service.ts");
/* harmony import */ var _services_subject_subject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/subject/subject.service */ "./src/app/services/subject/subject.service.ts");
/* harmony import */ var _services_assign_school_assign_school_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/assign-school/assign-school.service */ "./src/app/services/assign-school/assign-school.service.ts");










var FormAssignSchoolComponent = /** @class */ (function () {
    function FormAssignSchoolComponent(router, AssignSchoolService, ClassService, SubjectService, SchoolService, commonServ, toastr, fb) {
        this.router = router;
        this.AssignSchoolService = AssignSchoolService;
        this.ClassService = ClassService;
        this.SubjectService = SubjectService;
        this.SchoolService = SchoolService;
        this.commonServ = commonServ;
        this.toastr = toastr;
        this.fb = fb;
        this.school = [];
        this.class = [];
        this.books = [];
        this.getoneassignschool = [];
        this.rForm = fb.group({
            'school_id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'class_id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'book_id': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    FormAssignSchoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
            this.router.stateService.go('app.login');
        }
        this.title_header = 'Add Assign School';
        this.title_button = 'Submit';
        this.getSchool();
        this.getClass();
        this.getBook();
        if (this.router.stateService.params.id != undefined) {
            this.title_header = 'Update Assign School';
            this.title_button = 'Update';
            this.AssignSchoolService.getOneAssignSchool(this.router.stateService.params.id).subscribe(function (res) {
                _this.getoneassignschool = res.data;
            });
        }
    };
    FormAssignSchoolComponent.prototype.getSchool = function () {
        var _this = this;
        this.SchoolService.getSchool().subscribe(function (res) {
            _this.school = res.data;
        });
    };
    FormAssignSchoolComponent.prototype.getClass = function () {
        var _this = this;
        this.ClassService.getClass().subscribe(function (res) {
            _this.class = res.data;
        });
    };
    FormAssignSchoolComponent.prototype.getBook = function () {
        var _this = this;
        this.SubjectService.getSubject().subscribe(function (res) {
            _this.books = res.data;
        });
    };
    FormAssignSchoolComponent.prototype.addAssignSchool = function (rForm) {
        var _this = this;
        if (this.rForm.valid) {
            if (this.router.stateService.params.id != undefined) {
                rForm.id = this.router.stateService.params.id;
                this.AssignSchoolService.updateAssignSchool(rForm).subscribe(function (res) {
                    if (res.status == 1) {
                        _this.toastr.success('Assign School updated successfully');
                        _this.router.stateService.go('app.assign-school');
                    }
                    else {
                        _this.toastr.error('Error while updating the assign school');
                        _this.router.stateService.go('app.assign-school');
                    }
                });
            }
            else {
                this.AssignSchoolService.addAssignSchool(rForm).subscribe(function (res) {
                    if (res.status == 1) {
                        _this.toastr.success('Assign School added successfully');
                        _this.router.stateService.go('app.assign-school');
                    }
                    else {
                        _this.toastr.error('Error while adding the assign school');
                        _this.router.stateService.go('app.assign-school');
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
    FormAssignSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-assign-school',
            template: __webpack_require__(/*! ./form-assign-school.component.html */ "./src/app/assign-school/form-assign-school.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouter"], _services_assign_school_assign_school_service__WEBPACK_IMPORTED_MODULE_9__["AssignSchoolService"], _services_class_class_service__WEBPACK_IMPORTED_MODULE_7__["ClassService"], _services_subject_subject_service__WEBPACK_IMPORTED_MODULE_8__["SubjectService"], _services_school_school_service__WEBPACK_IMPORTED_MODULE_6__["SchoolService"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FormAssignSchoolComponent);
    return FormAssignSchoolComponent;
}());



/***/ })

}]);
//# sourceMappingURL=assign-school-assign-school-module.js.map