import { Component, OnInit } from '@angular/core';
import { UIRouter } from "@uirouter/angular";
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { ClassService } from '../services/class/class.service';
import { SubjectService } from '../services/subject/subject.service';

@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
  // styleUrls: ['./subject.component.css']
})
export class FormSubjectComponent implements OnInit {

  rForm: FormGroup;
  getonesubject: any = [];
  title_button: any;
  title_header: any;
  classes: any = [];

  constructor(private router: UIRouter, private ClassService: ClassService, private SubjectService: SubjectService, private toastr: ToastrService, private fb: FormBuilder, private commonServ: CommonService) {
    this.rForm = fb.group({
      'book_name': ['', Validators.required],
      'book_price': ['', Validators.required],
      'book_quantity': ['', Validators.required],
      'book_points': ['', Validators.required]
    });
   }

  ngOnInit() {
    if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
      this.router.stateService.go('app.login');
    }

    this.getClasses();

    this.title_header = 'Add Book';
    this.title_button = 'Submit';
    if (this.router.stateService.params.id != undefined) {
      this.title_header = 'Update Book';
      this.title_button = 'Update';
      this.SubjectService.getOneSubject(this.router.stateService.params.id).subscribe((res: any) => {
        this.getonesubject = res.data;
      })
    }
  }

  getClasses(){
    this.ClassService.getClass().subscribe((res: any) => {
      this.classes = res.data;
    })
  }

  addSubject(rForm){
    if(this.rForm.valid){
      if(this.router.stateService.params.id != undefined){
        rForm.id = this.router.stateService.params.id;
        this.SubjectService.updateSubject(rForm).subscribe((res: any) => {
          if (res.status == 1) {
            this.toastr.success('Subject updated successfully');
            this.router.stateService.go('app.subject');
          } else {
            this.toastr.error('Error while updating the subject');
            this.router.stateService.go('app.subject');
          }
        })
      } else {
        this.SubjectService.addSubject(rForm).subscribe((res: any) => {
          if (res.status == 1) {
            this.toastr.success('Subject added successfully');
            this.router.stateService.go('app.subject');
          } else {
            this.toastr.error('Error while adding the subject');
            this.router.stateService.go('app.subject');
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
