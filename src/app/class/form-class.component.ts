import { Component, OnInit } from '@angular/core';
import { UIRouter } from "@uirouter/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { ClassService } from '../services/class/class.service';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  // styleUrls: ['./class.component.css']
})
export class FormClassComponent implements OnInit {

  rForm: FormGroup;
  getoneclasses: any = [];
  title_button: any;
  title_header: any;

  constructor(private router: UIRouter, private ClassService: ClassService, private toastr: ToastrService, private fb: FormBuilder, private commonServ: CommonService) {
    this.rForm = fb.group({
      'class_name': ['', Validators.required]
    });
   }

  ngOnInit() {
    if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
      this.router.stateService.go('app.login');
    }

    this.title_header = 'Add Class';
    this.title_button = 'Submit';
    if (this.router.stateService.params.id != undefined) {
      this.title_header = 'Update Class';
      this.title_button = 'Update';
      this.ClassService.getOneClass(this.router.stateService.params.id).subscribe((res: any) => {
        this.getoneclasses = res.data;
      })
    }
  }

  addClass(rForm){
    if(this.rForm.valid){
      if(this.router.stateService.params.id != undefined){
        rForm.id = this.router.stateService.params.id;
        this.ClassService.updateClass(rForm).subscribe((res: any) => {
          if (res.status == 1) {
            this.toastr.success('Class updated successfully');
            this.router.stateService.go('app.class');
          } else {
            this.toastr.error('Error while updating the class');
            this.router.stateService.go('app.class');
          }
        })
      } else {
        this.ClassService.addClass(rForm).subscribe((res: any) => {
          if (res.status == 1) {
            this.toastr.success('Class added successfully');
            this.router.stateService.go('app.class');
          } else {
            this.toastr.error('Error while adding the class');
            this.router.stateService.go('app.class');
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
