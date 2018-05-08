import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],  
})

export class Page2Component implements OnInit {
  isEditMode = false;
  isShowMessage = false;
  isShowButtons = true;
  message = '';

  contact:any = {};
  contactForm:FormGroup;

  constructor(
    private contactService: ContactService, 
    private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe( params => {
      
      const contactId = params['contactId'];   
      this.contactService.getContact(contactId).subscribe( contact => 
        {
          this.contact = contact;         
          this.contactForm = new FormGroup({          
            firstname: new FormControl(this.contact.firstname, Validators.required),
            lastname: new FormControl(this.contact.lastname, Validators.required),
            phone: new FormControl(this.contact.phone, Validators.required),
          });             
        }       
      );
    });
  }
 
  onSubmitSave() {
    this.isEditMode = false;
  
    const contactObj = {_id: this.contact._id, ...this.contactForm.value};
    this.contactService.updateContact(contactObj).subscribe(data => {
      this.contact = contactObj;
      console.log('Contact updated!');      
    });

    this.isShowMessage = true;
    this.isShowButtons = true;
    this.message = 'Contact successfully updated.';
  }

  deleteContact(contactId) {
    const yes = confirm('Are you sure you want to delete this contact?');
    if (yes) {
      this.contactService.deleteContact(contactId).subscribe( () => 
        console.log('deleted contact._id = ' + contactId)
      );
      this.isShowMessage = true;
      this.isShowButtons = false;
      this.message = 'Contact successfully deleted.';
    } 
  }

  clickEdit() {
    this.isEditMode = true;
  }

  clickCancel() {
    this.isEditMode = false;

    //shallow clone
    const contactObj = {...this.contact}; 
    delete contactObj._id;
    delete contactObj.__v;
    this.contactForm.setValue(contactObj);
  }

}
