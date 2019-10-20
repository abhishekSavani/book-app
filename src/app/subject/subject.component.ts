import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject/subject.service';
import { CommonService } from '../common.service';
import { UIRouter } from "@uirouter/angular";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: any = [];
  notfound: any;

  constructor(private router: UIRouter, private toastr: ToastrService, private SubjectService: SubjectService, private CommonService: CommonService) { }

  ngOnInit() {
    if (this.CommonService.rootData.currentUser != undefined) {
      this.getSubjectList();
    }
  }

  getSubjectList(){
    this.SubjectService.getSubject().subscribe((res:any) => {
      if(res.data.length > 0){
        this.subjects = res.data;
        // console.log("this", this.subjects);
      } else {
        this.notfound = "Record Not Found";
      }
    })
  }

  deleteSubject(id){
    this.SubjectService.deleteSubject(id).subscribe((res: any) => {
      if(res.status == 1) {
        this.getSubjectList();
        this.toastr.success('Subject deleted successfully');
      } else {
        // console.log(res.message);
        this.toastr.error('Error while deleting the subject');
      }
    })
  }

}
