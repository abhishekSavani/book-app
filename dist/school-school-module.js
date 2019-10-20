(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["school-school-module"],{

/***/ "./src/app/school/form-school.component.html":
/*!***************************************************!*\
  !*** ./src/app/school/form-school.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Manage School\n    </h1>\n  </section>\n  <section class=\"content\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h3 class=\"box-title\">{{title_header}}</h3>\n      </div>\n      <form [formGroup]=\"rForm\" (ngSubmit)=\"addSchool(rForm.value)\" class=\"form-horizontal\">\n        <div class=\"box-body\">\n          <div class=\"form-group\">\n            <label for=\"school_name\" class=\"col-sm-2 control-label\">School/Institute\n            </label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" formControlName=\"school_name\" ngModel=\"{{getoneschool.school_name}}\" class=\"form-control\" id=\"school_name\" autocomplete=\"off\">\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['school_name'].invalid && (rForm.controls['school_name'].dirty || rForm.controls['school_name'].touched)\"\n              class=\"col-sm-4 text-danger\" style=\"margin-top: 10px; text-align: center;\">\n\n              <div *ngIf=\"rForm.controls['school_name'].errors.required\">\n                Enter your School/Institute\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"school_mobile_number\" class=\"col-sm-2 control-label\">Mobile Number\n            </label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" formControlName=\"school_mobile_number\" ngModel=\"{{getoneschool.school_mobile_number}}\" class=\"form-control\" id=\"school_mobile_number\" autocomplete=\"off\" maxlength=\"10\">\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['school_mobile_number'].invalid && (rForm.controls['school_mobile_number'].dirty || rForm.controls['school_mobile_number'].touched)\"\n              class=\"col-sm-4 text-danger\" style=\"margin-top: 10px; text-align: center;\">\n\n              <div *ngIf=\"rForm.controls['school_mobile_number'].errors.required\">\n                Enter Mobile Number\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"address\" class=\"col-sm-2 control-label\">Address\n            </label>\n            <div class=\"col-sm-6\">\n              <textarea type=\"text\" formControlName=\"address\" ngModel=\"{{getoneschool.address}}\" class=\"form-control\" id=\"address\" autocomplete=\"off\"></textarea>\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['address'].invalid && (rForm.controls['address'].dirty || rForm.controls['address'].touched)\"\n              class=\"col-sm-4 text-danger\" style=\"margin-top: 10px; text-align: center;\">\n\n              <div *ngIf=\"rForm.controls['address'].errors.required\">\n                Enter your Address\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"pincode\" class=\"col-sm-2 control-label\">Pincode\n            </label>\n            <div class=\"col-sm-6\">\n              <input type=\"pincode\" maxlength=\"6\" formControlName=\"pincode\" ngModel=\"{{getoneschool.pincode}}\" class=\"form-control\" id=\"pincode\" autocomplete=\"off\">\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['pincode'].invalid && (rForm.controls['pincode'].dirty || rForm.controls['pincode'].touched)\"\n              class=\"col-sm-4 text-danger\" style=\"margin-top: 10px; text-align: center;\">\n\n              <div *ngIf=\"rForm.controls['pincode'].errors.required\">\n                Enter your Pincode\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"rewards_type\" class=\"col-sm-2 control-label\">Rewards</label>\n            <div class=\"col-sm-6\">\n              <input type=\"radio\" formControlName=\"rewards_type\" value=\"For School\" ngModel=\"{{getoneschool.rewards_type}}\">\n              For School\n              <input type=\"radio\" formControlName=\"rewards_type\" value=\"For Student\" ngModel=\"{{getoneschool.rewards_type}}\">\n              For Student\n              <br>\n            </div>\n\n            <div\n              *ngIf=\"rForm.controls['rewards_type'].invalid && (rForm.controls['rewards_type'].dirty || rForm.controls['rewards_type'].touched)\"\n              class=\"text-danger\">\n              <div *ngIf=\"rForm.controls['rewards_type'].errors?.required\">\n                Select Rewards\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"router.stateService.params.id\">\n            <label for=\"school_logo\" class=\"col-sm-2 control-label\">School Logo</label>\n            <div class=\"col-sm-4\">\n              <input type=\"file\" class=\"form-control\" id=\"school_logo\" formControlName=\"school_logo\">\n              <!-- <input type=\"hidden\" class=\"form-control\" id=\"profile_image_hidden\" formControlName=\"profile_image\"\n                ngModel={{users.profile_image}}> -->\n              <input type=\"hidden\" class=\"form-control\" id=\"school_logo_old\" formControlName=\"school_logo_old\"\n                ngModel={{getoneschool.school_logo}}>\n            </div>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"!router.stateService.params.id\">\n            <label for=\"school_logo\" class=\"col-sm-2 control-label\">School Logo</label>\n            <div class=\"col-sm-4\">\n              <input type=\"file\" class=\"form-control\" formControlName=\"school_logo\" id=\"school_logo\" />\n            </div>\n          </div>\n          \n          <!-- <div class=\"form-group\">\n            <label for=\"standard_class\" class=\"col-sm-2 control-label\">\n              Class\n            </label>\n            <div class=\"col-sm-6\">\n                  <label class=\"checkbox-inline\" *ngFor=\"let standard_class_new of standard_class\" style=\"margin: 0px 10px 0px 0px;\">\n                    <input type=\"checkbox\" value=\"{{standard_class_new._id}}\" formControlName=\"standard_class\" (change)=\"getSubjects();\" id=\"class_sub\"> {{standard_class_new.class_name}}\n                  </label>\n            </div>\n          </div>\n\n          <div *ngIf=\"getsubtrue\">\n            <div style=\"margin-bottom: 10px;\" *ngFor=\"let getsubjects_new of getsubjects; let i = index\">\n                <label for=\"subjects\" class=\"col-sm-2 control-label\">Class {{getsubjects_new.class_name}} Subjects\n                  </label>\n                  <div class=\"col-sm-4\">\n                    <select class=\"form-control\" formControlName=\"subjects\" multiple (change)=\"setsubjects($event.target.value, getsubjects_new.class_id, i)\" id=\"sub\" ngModel>\n                      <option *ngFor=\"let getsubjects_new_new of getsubjects_new.subjects; let j = index\" value=\"{{getsubjects_new_new.id}}\">{{getsubjects_new_new.subject_name}}</option>\n                    </select>\n                  </div>\n            </div>\n          </div> -->\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-primary\">{{title_button}}</button>\n              <a class=\"btn btn-danger\" uiSref=\"app.school\">Cancel</a>\n            </div>\n          </div>\n\n        </div>\n      </form>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/school/form-school.component.ts":
/*!*************************************************!*\
  !*** ./src/app/school/form-school.component.ts ***!
  \*************************************************/
/*! exports provided: FormSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSchoolComponent", function() { return FormSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/school/school.service */ "./src/app/services/school/school.service.ts");







var FormSchoolComponent = /** @class */ (function () {
    function FormSchoolComponent(router, el, SchoolService, commonServ, toastr, fb) {
        this.router = router;
        this.el = el;
        this.SchoolService = SchoolService;
        this.commonServ = commonServ;
        this.toastr = toastr;
        this.fb = fb;
        this.standard_class = [];
        this.getoneschool = [];
        this.rForm = fb.group({
            'school_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'school_mobile_number': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'pincode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'school_logo': [''],
            'school_logo_old': [''],
            'rewards_type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    FormSchoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
            this.router.stateService.go('app.login');
        }
        this.title_header = 'Add School';
        this.title_button = 'Submit';
        if (this.router.stateService.params.id != undefined) {
            this.title_header = 'Update School';
            this.title_button = 'Update';
            this.SchoolService.getOneSchool(this.router.stateService.params.id).subscribe(function (res) {
                _this.getoneschool = res.data;
            });
        }
    };
    // getlatlong(value){
    //   console.log("val", value);
    //   var condition =  { 'latlong': value };
    //   this.commonServ.getLatlongFromAddress(condition).subscribe((res: any) => {
    //     console.log("resss", res);
    //   })
    // }
    FormSchoolComponent.prototype.addSchool = function (rForm) {
        var _this = this;
        console.log("rForm", rForm);
        if (this.rForm.valid) {
            var inputEl = this.el.nativeElement.querySelector('#school_logo');
            var formData = new FormData();
            formData.append('school_logo', inputEl.files.item(0));
            // formData.append('profile_image', inputEl.files.item(0));
            formData.append('school_logo_old', rForm['school_logo_old']);
            formData.append('school_name', rForm['school_name']);
            formData.append('school_mobile_number', rForm['school_mobile_number']);
            formData.append('address', rForm['address']);
            formData.append('pincode', rForm['pincode']);
            formData.append('rewards_type', rForm['rewards_type']);
            if (this.router.stateService.params.id != undefined) {
                formData.append('id', this.router.stateService.params.id);
            }
            if (this.router.stateService.params.id != undefined) {
                this.SchoolService.updateSchool(formData).subscribe(function (res) {
                    if (res.status === 1) {
                        _this.toastr.success('School Updated successfully');
                        _this.router.stateService.go('app.school');
                    }
                    else {
                        _this.toastr.error('Error while updating your school');
                        _this.router.stateService.go('app.school');
                    }
                });
            }
            else {
                this.SchoolService.addSchool(formData).subscribe(function (res) {
                    if (res.status === 1) {
                        _this.toastr.success('School Added successfully');
                        _this.router.stateService.go('app.school');
                    }
                    else {
                        _this.toastr.error('Error while adding your school');
                        _this.router.stateService.go('app.school');
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
    FormSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-school',
            template: __webpack_require__(/*! ./form-school.component.html */ "./src/app/school/form-school.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_school_school_service__WEBPACK_IMPORTED_MODULE_6__["SchoolService"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FormSchoolComponent);
    return FormSchoolComponent;
}());



/***/ }),

/***/ "./src/app/school/school.component.css":
/*!*********************************************!*\
  !*** ./src/app/school/school.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaG9vbC9zY2hvb2wuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/school/school.component.html":
/*!**********************************************!*\
  !*** ./src/app/school/school.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>\n      Manage School\n    </h1>\n    <!-- <ol class=\"breadcrumb\">\n      <li><a uiSref=\"app.home\"><i class=\"fa fa-dashboard\"></i> Home</a>\n      </li>\n      <li class=\"active\">User</li>\n    </ol> -->\n  </section>\n  <section class=\"content\">\n    <div class=\"box\">\n      <div class=\"box-header\">\n        <h3 class=\"box-title\">School Listing</h3>\n        <a uiSref=\"app.school-add\" style=\"float:right;width:auto;margin:0px 1px;\"\n          class=\"btn btn-block btn-primary btn-flat\">Add\n          School</a>\n      </div>\n      <div class=\"box-body\">\n        <div *ngIf=\"school.length === 0\">{{notfound}}</div>\n        <div *ngIf=\"school.length > 0\">\n            <table class=\"table table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th>School</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let school_new of school | paginate: { itemsPerPage: 10, currentPage: p }\">\n                    <td>{{ school_new.school_name }}</td>\n                    <td>\n                      <a style=\"text-decoration: none; color: blue;\" uiSref=\"app.school-update\" [uiParams]=\"{ id : school_new._id }\" class=\"fa fa-edit\"></a>\n                      <a style=\"margin-left: 10px; cursor: pointer; color: red;\" class=\"fa fa-trash\" (click)=\"deleteSchool(school_new._id)\"></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <br>\n              <pagination-controls style=\"float: right;\" (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/school/school.component.ts":
/*!********************************************!*\
  !*** ./src/app/school/school.component.ts ***!
  \********************************************/
/*! exports provided: SchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolComponent", function() { return SchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_school_school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/school/school.service */ "./src/app/services/school/school.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var SchoolComponent = /** @class */ (function () {
    function SchoolComponent(router, toastr, SchoolService, CommonService) {
        this.router = router;
        this.toastr = toastr;
        this.SchoolService = SchoolService;
        this.CommonService = CommonService;
        this.school = [];
    }
    SchoolComponent.prototype.ngOnInit = function () {
        if (this.CommonService.rootData.currentUser != undefined) {
            this.getSchoolList();
        }
    };
    SchoolComponent.prototype.getSchoolList = function () {
        var _this = this;
        this.SchoolService.getSchool().subscribe(function (res) {
            if (res.data.length > 0) {
                _this.school = res.data;
                // console.log("this", this.users);
            }
            else {
                _this.notfound = "Record Not Found";
            }
        });
    };
    SchoolComponent.prototype.deleteSchool = function (id) {
        var _this = this;
        this.SchoolService.deleteSchool(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.getSchoolList();
                _this.toastr.success('School deleted successfully');
            }
            else {
                // console.log(res.message);
                _this.toastr.error('Error while deleting the school');
            }
        });
    };
    SchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school',
            template: __webpack_require__(/*! ./school.component.html */ "./src/app/school/school.component.html"),
            styles: [__webpack_require__(/*! ./school.component.css */ "./src/app/school/school.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["UIRouter"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _services_school_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], SchoolComponent);
    return SchoolComponent;
}());



/***/ }),

/***/ "./src/app/school/school.module.ts":
/*!*****************************************!*\
  !*** ./src/app/school/school.module.ts ***!
  \*****************************************/
/*! exports provided: SchoolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolModule", function() { return SchoolModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _school_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school.component */ "./src/app/school/school.component.ts");
/* harmony import */ var _form_school_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-school.component */ "./src/app/school/form-school.component.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _empty_empty_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../empty/empty.module */ "./src/app/empty/empty.module.ts");









var APP_SUB_STATES = [
    // A state for the 'app.contact' submodule.
    {
        name: "app.school",
        url: "/admins/school",
        views: {
            "content@": { component: _school_component__WEBPACK_IMPORTED_MODULE_3__["SchoolComponent"] },
        },
    },
    {
        name: "app.school-add",
        url: "/admins/school/add",
        views: {
            "content@": { component: _form_school_component__WEBPACK_IMPORTED_MODULE_4__["FormSchoolComponent"] },
        },
    },
    {
        name: "app.school-update",
        url: "/admins/school/update/:id",
        views: {
            "content@": { component: _form_school_component__WEBPACK_IMPORTED_MODULE_4__["FormSchoolComponent"] },
        },
    }
];
var SchoolModule = /** @class */ (function () {
    function SchoolModule() {
    }
    SchoolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_school_component__WEBPACK_IMPORTED_MODULE_3__["SchoolComponent"], _form_school_component__WEBPACK_IMPORTED_MODULE_4__["FormSchoolComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _empty_empty_module__WEBPACK_IMPORTED_MODULE_8__["EmptyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forChild({ states: APP_SUB_STATES }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ]
        })
    ], SchoolModule);
    return SchoolModule;
}());



/***/ })

}]);
//# sourceMappingURL=school-school-module.js.map