import { Component, OnInit } from '@angular/core';
import { UIRouter } from "@uirouter/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { SchoolService } from '../services/school/school.service';
import { ClassService } from '../services/class/class.service';
import { SubjectService } from '../services/subject/subject.service';
import { AssignSchoolService } from '../services/assign-school/assign-school.service';

@Component({
  selector: 'app-form-assign-school',
  templateUrl: './form-assign-school.component.html',
  // styleUrls: ['./assign-school.component.css']
})
export class FormAssignSchoolComponent implements OnInit {

  rForm: FormGroup;
  school: any = [];
  class: any = [];
  books: any = [];
  title_button: any;
  title_header: any;
  getoneassignschool: any = [];

  constructor(private router: UIRouter, private AssignSchoolService: AssignSchoolService, private ClassService: ClassService, private SubjectService: SubjectService, private SchoolService: SchoolService, private commonServ: CommonService, private toastr: ToastrService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'school_id': ['', Validators.required],
      'class_id': ['', Validators.required],
      'book_id': ['', Validators.required]
    });
   }

  ngOnInit() {
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
      this.AssignSchoolService.getOneAssignSchool(this.router.stateService.params.id).subscribe((res: any) => {
        this.getoneassignschool = res.data;
      })
    }
  }

  getSchool(){
    this.SchoolService.getSchool().subscribe((res: any) => {
      this.school = res.data;
    })
  }

  getClass(){
    this.ClassService.getClass().subscribe((res: any) => {
      this.class = res.data;
    })
  }

  getBook(){
    this.SubjectService.getSubject().subscribe((res: any) => {
      this.books = res.data;
    })
  }

  addAssignSchool(rForm){
    if(this.rForm.valid){
      if(this.router.stateService.params.id != undefined){
        rForm.id = this.router.stateService.params.id;
        this.AssignSchoolService.updateAssignSchool(rForm).subscribe((res: any) => {
          if (res.status == 1) {
            this.toastr.success('Assign School updated successfully');
            this.router.stateService.go('app.assign-school');
          } else {
            this.toastr.error('Error while updating the assign school');
            this.router.stateService.go('app.assign-school');
          }
        })
      } else {
        this.AssignSchoolService.addAssignSchool(rForm).subscribe((res: any) => {
          if (res.status == 1) {
            this.toastr.success('Assign School added successfully');
            this.router.stateService.go('app.assign-school');
          } else {
            this.toastr.error('Error while adding the assign school');
            this.router.stateService.go('app.assign-school');
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
