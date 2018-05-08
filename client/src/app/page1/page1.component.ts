import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  
  contacts = null;
  constructor(private contactService: ContactService) { }
  
  ngOnInit() {
    this.updateContactList();
  }

  updateContactList() {
    this.contactService.listContacts().subscribe(contacts => {
      this.contacts = contacts;
    });  
  }
}
