import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  // intercept(req: HttpRequest<any>, next: HttpHandler):
  //   Observable<HttpEvent<any>> {
  //   return next.handle(req);
  // }

  //constructor(private http: HttpClient){}

  constructor( private cookieService: CookieService ) { }

  //Syntax - get( name: string ): string;
  getCookie(key: string){
    return this.cookieService.get(key);
  }

  //check Cookie
  //Syntax - check( name: string ): boolean;
  checkCookie(key: string){
    return this.cookieService.check(key);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(`AddTokenInterceptor - ${req.url}`);
     if(this.checkCookie("myapp-token-admin")){
      let jsonReq: HttpRequest<any> = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this.getCookie("myapp-token-admin")}`
        }
      });
      return next.handle(jsonReq);
    }else{
      return next.handle(req);
    }
  }
  

}