import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AssignSchoolService {

  constructor(private http: HttpClient) { }

  addAssignSchool(rForm) {
    return this.http.post('/adminapi/assignschool/add', rForm);
  }

  getAssignSchool(){
    return this.http.get('/adminapi/assignschool/getassignschools');
  }
  
  getOneAssignSchool(id){
    return this.http.get('/adminapi/assignschool/getoneassignschool/' + id);
  }

  updateAssignSchool(rForm){
    return this.http.put(`/adminapi/assignschool/update/${rForm.id}`, rForm);
  }

  deleteAssignSchool(id) {
    return this.http.delete('/adminapi/assignschool/delete/' + id);
  }
}
