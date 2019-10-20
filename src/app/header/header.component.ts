import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './../common.service';
import { UIRouter } from "@uirouter/angular";
declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle: any;
  constructor(private http: HttpClient, private router: UIRouter, private commonServ: CommonService) { }

  ngOnInit() {
    this.headerTitle = "Admin header portion";
    $('#sidenavToggler').click(function () {
      $("body").toggleClass("sidenav-toggled");
      $("body").toggleClass("sidebar-collapse");
      //$('nav').toggleClass('fixed-top static-top');
    });
  }

  logOut() {
    this.http.post('/adminapi/user/logout', {})
      .subscribe(res => {
        console.log("Logout");
        this.router.stateService.go('app.login');
      }, (err) => {
        console.log(err);
      }
      );
  }

}
