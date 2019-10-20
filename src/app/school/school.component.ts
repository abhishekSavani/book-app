import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school/school.service';
import { CommonService } from '../common.service';
import { UIRouter } from "@uirouter/angular";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  school: any = [];
  notfound: any;

  constructor(private router: UIRouter, private toastr: ToastrService, private SchoolService: SchoolService, private CommonService: CommonService) { }

  ngOnInit() {
    if (this.CommonService.rootData.currentUser != undefined) {
      this.getSchoolList();
    }
  }

  getSchoolList(){
    this.SchoolService.getSchool().subscribe((res:any) => {
      if(res.data.length > 0){
        this.school = res.data;
      // console.log("this", this.users);
      } else {
        this.notfound = "Record Not Found";
      }
    })
  }

  deleteSchool(id){
    this.SchoolService.deleteSchool(id).subscribe((res: any) => {
      if(res.status == 1) {
        this.getSchoolList();
        this.toastr.success('School deleted successfully');
      } else {
        // console.log(res.message);
        this.toastr.error('Error while deleting the school');
      }
    })
  }

}
