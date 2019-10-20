import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class ClassService {

  constructor(private http: HttpClient) { }

  addClass(rForm) {
    return this.http.post('/adminapi/class/add', rForm);
  }

  getClass(){
    return this.http.get('/adminapi/class/getclasses');
  }
  
  getOneClass(id){
    return this.http.get('/adminapi/class/getoneclass/' + id);
  }

  updateClass(rForm){
    return this.http.put(`/adminapi/class/update/${rForm.id}`, rForm);
  }

  deleteClass(id) {
    return this.http.delete('/adminapi/class/delete/' + id);
  }
}
