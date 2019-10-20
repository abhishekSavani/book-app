import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CommonService {

  rootData: any = {};

  constructor(private cookieService: CookieService, private http: HttpClient) {
    //this.rootData.myTestName = "laxman";
  }


  setCurrentUser = function () {
    let token = this.cookieValue = this.cookieService.get('myapp-token-admin');
    // console.log("token : ",token);
    if (!!token) {
      let payload = token.split(".")[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      this.rootData.currentUser = payload;
    }
    console.log("this.rootData.currentUser : ",this.rootData.currentUser);
  };


  getCountry() {
    return this.http.get('/api/country/countryList');
  }

  getState(country_id) {
    return this.http.get('/api/state', { params: { country_id: country_id } });
  }

  getCity(state_id) {
    return this.http.get('/api/city', { params: { state_id: state_id } });
  }

  getLatlongFromAddress(value){
    return this.http.post('/adminapi/user/getLatlongFromAddress', value);
  }
}
