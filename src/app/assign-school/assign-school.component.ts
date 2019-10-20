import { Component, OnInit } from '@angular/core';
import { UIRouter } from "@uirouter/angular";
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { AssignSchoolService } from '../services/assign-school/assign-school.service'

@Component({
  selector: 'app-assign-school',
  templateUrl: './assign-school.component.html',
  styleUrls: ['./assign-school.component.css']
})
export class AssignSchoolComponent implements OnInit {

  assignschools: any = [];
  notfound: any;

  constructor(private router: UIRouter, private toastr: ToastrService, private commonServ: CommonService, private AssignSchoolService: AssignSchoolService) { }

  ngOnInit() {
    if (this.commonServ.rootData.currentUser != undefined) {
      this.getAssignSchoolList();
    }
  }

  getAssignSchoolList(){
    this.AssignSchoolService.getAssignSchool().subscribe((res:any) => {
      if(res.data.length > 0){
        this.assignschools = res.data;
        // console.log("this", this.subjects);
      } else {
        this.notfound = "Record Not Found";
      }
    })
  }

  deleteAssignSchool(id){
    this.AssignSchoolService.deleteAssignSchool(id).subscribe((res: any) => {
      if(res.status == 1) {
        this.getAssignSchoolList();
        this.toastr.success('Subject deleted successfully');
      } else {
        // console.log(res.message);
        this.toastr.error('Error while deleting the subject');
      }
    })
  }

}
