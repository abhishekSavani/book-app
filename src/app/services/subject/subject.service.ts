import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectService {

  constructor(private http: HttpClient) { }

  addSubject(rForm) {
    return this.http.post('/adminapi/subject/add', rForm);
  }

  getSubject(){
    return this.http.get('/adminapi/subject/getsubjects');
  }
  
  getOneSubject(id){
    return this.http.get('/adminapi/subject/getonesubject/' + id);
  }

  updateSubject(rForm){
    return this.http.put(`/adminapi/subject/update/${rForm.id}`, rForm);
  }

  deleteSubject(id) {
    return this.http.delete('/adminapi/subject/delete/' + id);
  }

  getSubjectList(data) {
    return this.http.post('/adminapi/subject/getsubjectlist', data);
  }
}
