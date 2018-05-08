import { Component, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss'],
})

export class AddContactFormComponent {

  constructor(private contactService: ContactService) { }

  @Output() addContactEvent = new EventEmitter();

  message = '';
  isShowMessage = false;

  contact: FormGroup;
  ngOnInit() {
    this.contact = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }
  
  onSubmit() {   
    const contactObj = this.contact.value;
    
    this.contactService.createContact(contactObj).subscribe(data => {
      this.addContactEvent.emit();
      console.log('create new contact success!');
      this.contact.reset();
    });
    this.message = 'Contact created.'
    this.isShowMessage = true;
    console.log('contact: '+JSON.stringify(contactObj))
  }

  formClick(){
    this.message = '';
    this.isShowMessage = false;
  }

}
