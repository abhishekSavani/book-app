import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { UIRouter } from "@uirouter/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: UIRouter, private commonServ: CommonService) {
    this.commonServ.setCurrentUser();
   }

  ngOnInit() {
    // this.headerTitle = "Admin header portion";
    
  }
}
