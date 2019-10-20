import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UIRouter } from "@uirouter/angular";
import { HttpClient } from '@angular/common/http'

import { CommonService } from './../common.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user = {};
  errDbMsg: any = '';

  constructor(private http: HttpClient, private router: UIRouter, private commonServ: CommonService) { }

  ngOnInit() {
  }

  doLogin() {
    //console.log("fffffffffffff",this.commonServ.rootData);
    this.http.post('/adminapi/user/login', this.user)
      .subscribe((res:any) => {
        // console.log(res);
        if (res.status == 1) {
          console.log("11111");
          this.commonServ.setCurrentUser();
          this.router.stateService.go('app.home');
          // let id = res['upid'];
          // this.router.stateService.go('app.book-details',{id : id});
          // this.router.stateService.go('books');
        } else {
          console.log("00000");
          this.errDbMsg = res.message.message;
          // this.rForm.reset();
          $(function () {
            $("#flash").css({ "color": "red", "font-size": "14px" });
            $('#flash').delay(10).fadeIn('normal', function () {
              $(this).delay(2500).fadeOut();
            });
          });
        }
      }, (err) => {
        console.log(err);
      }
      );
  }
}
