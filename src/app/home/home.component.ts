import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { UIRouter } from "@uirouter/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  massager: any;
  massagertype: any;
  user: any;
  usertype: any;

  constructor(private router: UIRouter, private commonServ: CommonService) { }

  ngOnInit() {
    // console.log("this==>", this.commonServ.rootData);
    if (this.commonServ.rootData === undefined || this.commonServ.rootData.currentUser === undefined) {
      this.router.stateService.go('app.login');
    }

    // this.massagertype = 3;
    // this.getMassagerList(this.massagertype);
    // this.usertype = 2;
    // this.getUsersList(this.usertype);
  }

}
