import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class/class.service';
import { CommonService } from '../common.service';
import { UIRouter } from "@uirouter/angular";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  class: any = [];
  notfound: any;

  constructor(private router: UIRouter, private toastr: ToastrService, private ClassService: ClassService, private CommonService: CommonService) { }

  ngOnInit() {
    if (this.CommonService.rootData.currentUser != undefined) {
      this.getClassList();
    }
  }

  getClassList(){
    this.ClassService.getClass().subscribe((res:any) => {
      if(res.data.length > 0){
        this.class = res.data;
      // console.log("this", this.users);
      } else {
        this.notfound = "Record Not Found";
      }
    })
  }

  deleteUser(id){
    this.ClassService.deleteClass(id).subscribe((res: any) => {
      if(res.status == 1) {
        this.getClassList();
        this.toastr.success('Class deleted successfully');
      } else {
        // console.log(res.message);
        this.toastr.error('Error while deleting the class');
      }
    })
  }

}
