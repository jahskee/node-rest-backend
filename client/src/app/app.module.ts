import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { Page1Component } from './page1/page1.component';
import { AddContactFormComponent } from './page1/add-contact-form/add-contact-form.component';
import { ContactListComponent } from './page1/contact-list/contact-list.component';
import { Page2Component } from './page2/page2.component';

import { ContactService } from './services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2/:contactId', component: Page2Component },
  { path: '', component: Page1Component },
  { path: '**', component: Page1Component },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddContactFormComponent,
    ContactListComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }