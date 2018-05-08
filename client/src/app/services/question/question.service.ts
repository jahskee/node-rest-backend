import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class QuestionService {
    
  constructor(private http: HttpClient) {}
   
  private apiurl = environment.apiurl;
  
  listQuestion(){
    return this.http.get(this.apiurl + '/api/questions');
  }

  getQuestion(id){
    return this.http.get(this.apiurl + '/api/questions/' + id);
  }
  
  createQuestion(obj) { 
    return this.http.post(this.apiurl + '/api/questions/create', obj);
  }

  deleteQuestion(id) {
    return this.http.delete(this.apiurl + '/api/questions/delete/' + id);
  }

  updateQuestion(obj) {
    return this.http.put(this.apiurl + '/api/questions/update', obj);
  }

}