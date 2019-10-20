import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SchoolService {

  constructor(private http: HttpClient) { }

  addSchool(rForm) {
    return this.http.post('/adminapi/school/add', rForm);
  }

  getSchool(){
    return this.http.get('/adminapi/school/getschools');
  }
  
  getOneSchool(id){
    return this.http.get('/adminapi/school/getoneschool/' + id);
  }

  updateSchool(rForm){
    return this.http.put(`/adminapi/school/update/${rForm.id}`, rForm);
  }

  deleteSchool(id) {
    return this.http.delete('/adminapi/school/delete/' + id);
  }
}
