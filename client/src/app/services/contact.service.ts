import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class ContactService {
    
  constructor(private http: HttpClient) {}
   
  private apiurl = environment.apiurl;
  
  listContacts(){
    return this.http.get(this.apiurl + '/api/contacts');
  }

  getContact(id){
    return this.http.get(this.apiurl + '/api/contacts/' + id);
  }
  
  createContact(contactObj) { 
    return this.http.post(this.apiurl + '/api/contacts/create', contactObj);
  }

  deleteContact(id) {
    return this.http.delete(this.apiurl + '/api/contacts/delete/' + id);
  }

  updateContact(contactObj) {
    return this.http.put(this.apiurl + '/api/contacts/update', contactObj);
  }

}