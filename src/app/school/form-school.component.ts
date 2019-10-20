import { Component, OnInit, ElementRef } from '@angular/core';
import { UIRouter } from "@uirouter/angular";
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { SchoolService } from '../services/school/school.service';
declare const $ : any;

@Component({
  selector: 'app-form-school',
  templateUrl: './form-school.component.html',
  // styleUrls: ['./school.component.css']
})
export class FormSchoolComponent implements OnInit {

  rForm: FormGroup;
  standard_class: any = [];
  subjects: any;
  getsubjects: any;
  getsubtrue: any;
  getoneschool: any = [];
  title_button: any;
  title_header: any;

  constructor(private router: UIRouter, private el: ElementRef, private SchoolService: SchoolService, private commonServ: CommonService, private toastr: ToastrService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'school_name': ['', Validators.required],
      'school_mobile_number': ['', Validators.required],
      'address': ['', Validators.required],
      'pincode': ['', Validators.required],
      'school_logo': [''],
      'school_logo_old': [''],
      'rewards_type': ['', Validators.required]
    });
   }

  ngOnInit() {
    if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
      this.router.stateService.go('app.login');
    }

    this.title_header = 'Add School';
    this.title_button = 'Submit';
    if (this.router.stateService.params.id != undefined) {
      this.title_header = 'Update School';
      this.title_button = 'Update';
      this.SchoolService.getOneSchool(this.router.stateService.params.id).subscribe((res: any) => {
        this.getoneschool = res.data;
      })
    }
  }

  // getlatlong(value){
  //   console.log("val", value);
  //   var condition =  { 'latlong': value };
  //   this.commonServ.getLatlongFromAddress(condition).subscribe((res: any) => {
  //     console.log("resss", res);
  //   })
  // }

  addSchool(rForm){
    console.log("rForm", rForm);
    if(this.rForm.valid){
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#school_logo');
    const formData = new FormData();

    formData.append('school_logo', inputEl.files.item(0));

    // formData.append('profile_image', inputEl.files.item(0));
    formData.append('school_logo_old', rForm['school_logo_old']);
    formData.append('school_name', rForm['school_name']);
    formData.append('school_mobile_number', rForm['school_mobile_number']);
    formData.append('address', rForm['address']);
    formData.append('pincode', rForm['pincode']);
    formData.append('rewards_type', rForm['rewards_type']);

    if(this.router.stateService.params.id != undefined){
      formData.append('id', this.router.stateService.params.id);
    }

    if(this.router.stateService.params.id != undefined){
      this.SchoolService.updateSchool(formData).subscribe((res: any) => {
        if (res.status === 1) {
          this.toastr.success('School Updated successfully');
          this.router.stateService.go('app.school');
        } else {
          this.toastr.error('Error while updating your school');
          this.router.stateService.go('app.school');
        }
      })
    } else {
      this.SchoolService.addSchool(formData).subscribe((res: any) => {
        if (res.status === 1) {
          this.toastr.success('School Added successfully');
          this.router.stateService.go('app.school');
        } else {
          this.toastr.error('Error while adding your school');
          this.router.stateService.go('app.school');
        }
      })
    }

    } else {
      Object.keys(this.rForm.controls).forEach(field => {
        const control = this.rForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
