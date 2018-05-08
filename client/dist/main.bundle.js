webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\" class='container-fluid'>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>  \n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Contacts App';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_page1_page1_component__ = __webpack_require__("./src/app/pages/contact/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_page1_add_contact_form_add_contact_form_component__ = __webpack_require__("./src/app/pages/contact/page1/add-contact-form/add-contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_page1_contact_list_contact_list_component__ = __webpack_require__("./src/app/pages/contact/page1/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_page2_page2_component__ = __webpack_require__("./src/app/pages/contact/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_contact_contact_service__ = __webpack_require__("./src/app/services/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_page1_page1_component__["a" /* Page1Component */] },
    { path: 'page2/:contactId', component: __WEBPACK_IMPORTED_MODULE_10__pages_contact_page2_page2_component__["a" /* Page2Component */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_page1_page1_component__["a" /* Page1Component */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_page1_page1_component__["a" /* Page1Component */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_page1_add_contact_form_add_contact_form_component__["a" /* AddContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_page1_contact_list_contact_list_component__["a" /* ContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_page1_page1_component__["a" /* Page1Component */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_page2_page2_component__["a" /* Page2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_contact_contact_service__["a" /* ContactService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer {  \n  position:absolute;\n  bottom:0;\n  width:100%;\n  height:50px;   /* Height of the footer */\n  background:rgb(145, 199, 226);\n}\n\np {\n  margin-top: 10px;\n  margin-bottom: 0;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <p>\n        <div>\n            Project #7\n        </div>      \n        <div>\n            CSCI E-31: Web Development with Node.JS\n        </div>\n   \n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "#header {\n  position:absolute;\n  top:0;\n  width:100%;\n  height:60px;   /* Height of the footer */\n  background:rgb(145, 199, 226);\n  padding-top: 10px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='header'>\n    <h1>\n       Contacts Application\n      </h1>\n</div>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/page1/add-contact-form/add-contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"add-contact-form\" class='card' (click)='formClick()'>\n  <div class='card-header'><h4>New Contact</h4></div>\n  <div class='card-body'>\n      <form (ngSubmit)='onSubmit(contact)' [formGroup]='contact' >\n   \n          <div>\n              <div class='form-group'>\n                  <input type='text' placeholder=\"Firstname\" formControlName='firstname' class='form-control'/>  \n                  <small class=\"form-text text-danger\" *ngIf=\"contact.get('firstname').hasError('required') && contact.get('firstname').touched\">\n                      Firstname is required!\n                  </small>      \n              </div>           \n            \n           \n              <div class='form-group'>\n                  <input type='text' placeholder=\"Lastname\" formControlName='lastname'  class='form-control'/>\n                  <small class=\"form-text text-danger\" *ngIf=\"contact.get('lastname').hasError('required') && contact.get('lastname').touched\">\n                     Lastname is required!\n                  </small> \n              </div>          \n           \n              <div class='form-group'>\n                  <input type='text' placeholder=\"Phone\" formControlName='phone'  class='form-control'/>\n                  <small class=\"form-text text-danger\" *ngIf=\"contact.get('phone').hasError('required') && contact.get('phone').touched\">\n                      Phone is required!\n                  </small> \n              </div>             \n          </div>\n          <div class='alert alert-success' style='margin: 0;margin-bottom: 5px;' *ngIf=\"isShowMessage\">\n              {{message}}         \n          </div>          \n          <button type='submit' [disabled]=\"contact.invalid\" class=\"btn btn-secondary\"> Add Contact </button>    \n        </form>\n       \n  </div>\n \n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact/page1/add-contact-form/add-contact-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/page1/add-contact-form/add-contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_contact_service__ = __webpack_require__("./src/app/services/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddContactFormComponent = /** @class */ (function () {
    function AddContactFormComponent(contactService) {
        this.contactService = contactService;
        this.addContactEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.message = '';
        this.isShowMessage = false;
    }
    AddContactFormComponent.prototype.ngOnInit = function () {
        this.contact = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            firstname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required),
        });
    };
    AddContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var contactObj = this.contact.value;
        this.contactService.createContact(contactObj).subscribe(function (data) {
            _this.addContactEvent.emit();
            console.log('create new contact success!');
            _this.contact.reset();
        });
        this.message = 'Contact created.';
        this.isShowMessage = true;
        console.log('contact: ' + JSON.stringify(contactObj));
    };
    AddContactFormComponent.prototype.formClick = function () {
        this.message = '';
        this.isShowMessage = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddContactFormComponent.prototype, "addContactEvent", void 0);
    AddContactFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-contact-form',
            template: __webpack_require__("./src/app/pages/contact/page1/add-contact-form/add-contact-form.component.html"),
            styles: [__webpack_require__("./src/app/pages/contact/page1/add-contact-form/add-contact-form.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_contact_contact_service__["a" /* ContactService */]])
    ], AddContactFormComponent);
    return AddContactFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/page1/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact-list\">\n    <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">First</th>\n            <th scope=\"col\">Last</th>\n            <th scope=\"col\">Phone</th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody (addAccountEvent)='addContactEventHandler()'>\n          <tr *ngFor='let contact of contacts' >\n              <th scope=\"row\">{{contact._id}}</th>\n              <td>{{contact.firstname}}</td>\n              <td>{{contact.lastname}}</td>\n              <td>{{contact.phone}}</td>\n              <td><a routerLink='/page2/{{contact._id}}' routerLinkActive='active'>Edit/Del</a></td>\n          </tr>\n        </tbody>\n      </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/contact/page1/contact-list/contact-list.component.scss":
/***/ (function(module, exports) {

module.exports = "#contact-list {\n  border: 1px solid lightgray;\n  margin-left: 10px;\n  height: 500px;\n  width: 600px; }\n  #contact-list table td {\n    text-align: left; }\n"

/***/ }),

/***/ "./src/app/pages/contact/page1/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-list',
            template: __webpack_require__("./src/app/pages/contact/page1/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/pages/contact/page1/contact-list/contact-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/page1/page1.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page1\">\n    <app-add-contact-form (addContactEvent)=\"updateContactList()\"></app-add-contact-form>\n    <app-contact-list [contacts]=\"contacts\" > </app-contact-list>\n</div>"

/***/ }),

/***/ "./src/app/pages/contact/page1/page1.component.scss":
/***/ (function(module, exports) {

module.exports = "#page1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 100px; }\n"

/***/ }),

/***/ "./src/app/pages/contact/page1/page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_contact_service__ = __webpack_require__("./src/app/services/contact/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page1Component = /** @class */ (function () {
    function Page1Component(contactService) {
        this.contactService = contactService;
        this.contacts = null;
    }
    Page1Component.prototype.ngOnInit = function () {
        this.updateContactList();
    };
    Page1Component.prototype.updateContactList = function () {
        var _this = this;
        this.contactService.listContacts().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    Page1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page1',
            template: __webpack_require__("./src/app/pages/contact/page1/page1.component.html"),
            styles: [__webpack_require__("./src/app/pages/contact/page1/page1.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_contact_contact_service__["a" /* ContactService */]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "./src/app/pages/contact/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='page2'>\n  \n  <div id='contact-view'  class=\"card\">\n      <div class='card-header'>\n          <h4>View Contact</h4>\n      </div>\n      <div class='card-body'>\n          <div id='row2'>\n              <div id='photo'>\n                <img src='/assets/page2/images/blank-face.jpeg'>\n              </div>\n              <div id='info' *ngIf='isEditMode'>\n                <form (ngSubmit)='onSubmitSave(contact.id)' [formGroup]='contactForm' >\n                  <table>\n                    <tr>\n                      <td id='label'>ID</td>               \n                      \n                      <td id='input'>\n                        <span>{{contact._id}}</span>                 \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Firstname</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='firstname' placeholder=\"Firstname\" class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('firstname').hasError('required') && contactForm.get('firstname').touched\">\n                            Firstname is required!\n                        </small>      \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Lastname</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='lastname' placeholder=\"Lastname\"  class='form-control'  />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('lastname').hasError('required') && contactForm.get('lastname').touched\">\n                            Lastname is required!\n                        </small> \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Phone</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='phone' placeholder=\"Phone\"  class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('phone').hasError('required') && contactForm.get('phone').touched\">\n                            Phone is required!\n                        </small> \n                      </td>\n                    </tr>\n                  </table>\n                  <div id='buttons'>\n                      <button class=\"btn btn-secondary\" [disabled]=\"contactForm.invalid\" >Save</button>\n                      <button class=\"btn btn-secondary\" (click)='clickCancel()' >Cancel</button>\n                    \n                  </div>\n                </form>\n            </div>\n      \n            <div id='info' *ngIf='!isEditMode' >             \n                    <table>\n                        <tr>\n                          <td id='label'>ID</td>\n                          <td id='input'>{{contact._id}}</td>\n                        </tr>\n                        <tr>\n                          <td>Firstname</td>\n                          <td>{{contact.firstname}}</td>\n                        </tr>\n                        <tr>\n                          <td>Lastname</td>\n                          <td>{{contact.lastname}}</td>\n                        </tr>\n                        <tr>\n                          <td>Phone</td>\n                          <td>{{contact.phone}}</td>\n                        </tr>\n                      </table>\n                      <div class='alert alert-success' style='margin: 0;margin-top: 5px;' *ngIf=\"isShowMessage\">\n                          {{message}}         \n                      </div>\n\n                      <div id='buttons' *ngIf=\"isShowButtons\">\n                          <button class=\"btn btn-secondary\" (click)='clickEdit()'>Edit</button>  \n                          <button class=\"btn btn-secondary\" (click)='deleteContact(contact._id)'>Delete</button>                           \n                      </div>\n                     \n            \n        </div>\n      </div>\n  </div> \n \n</div>\n<a style='width: 100px; text-align: center; margin-top: 10px' routerLink='/page1' routerLinkActive='active' class='btn btn-secondary'>Back</a>"

/***/ }),

/***/ "./src/app/pages/contact/page2/page2.component.scss":
/***/ (function(module, exports) {

module.exports = "#page2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 100px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  #page2 .nav {\n    padding: 10px 0; }\n  #page2 #contactId {\n    padding-left: 10px; }\n  #contact-view #info {\n  padding: 20px; }\n  #contact-view #photo img {\n  width: 200px; }\n  #contact-view table {\n  text-align: left;\n  margin: 10px; }\n  #contact-view table #label {\n    width: 100px; }\n  #contact-view table #input {\n    width: 200px; }\n  #contact-view table input {\n    width: 300px;\n    margin-bottom: 5px; }\n  #contact-view #buttons {\n  margin-top: 20px; }\n  #contact-view #row2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  #contact-view #btn-update {\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/contact/page2/page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_contact_service__ = __webpack_require__("./src/app/services/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Page2Component = /** @class */ (function () {
    function Page2Component(contactService, route) {
        this.contactService = contactService;
        this.route = route;
        this.isEditMode = false;
        this.isShowMessage = false;
        this.isShowButtons = true;
        this.message = '';
        this.contact = {};
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var contactId = params['contactId'];
            _this.contactService.getContact(contactId).subscribe(function (contact) {
                _this.contact = contact;
                _this.contactForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
                    firstname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](_this.contact.firstname, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required),
                    lastname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](_this.contact.lastname, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required),
                    phone: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](_this.contact.phone, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required),
                });
            });
        });
    };
    Page2Component.prototype.onSubmitSave = function () {
        var _this = this;
        this.isEditMode = false;
        var contactObj = __assign({ _id: this.contact._id }, this.contactForm.value);
        this.contactService.updateContact(contactObj).subscribe(function (data) {
            _this.contact = contactObj;
            console.log('Contact updated!');
        });
        this.isShowMessage = true;
        this.isShowButtons = true;
        this.message = 'Contact successfully updated.';
    };
    Page2Component.prototype.deleteContact = function (contactId) {
        var yes = confirm('Are you sure you want to delete this contact?');
        if (yes) {
            this.contactService.deleteContact(contactId).subscribe(function () {
                return console.log('deleted contact._id = ' + contactId);
            });
            this.isShowMessage = true;
            this.isShowButtons = false;
            this.message = 'Contact successfully deleted.';
        }
    };
    Page2Component.prototype.clickEdit = function () {
        this.isEditMode = true;
    };
    Page2Component.prototype.clickCancel = function () {
        this.isEditMode = false;
        //shallow clone
        var contactObj = __assign({}, this.contact);
        delete contactObj._id;
        delete contactObj.__v;
        this.contactForm.setValue(contactObj);
    };
    Page2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page2',
            template: __webpack_require__("./src/app/pages/contact/page2/page2.component.html"),
            styles: [__webpack_require__("./src/app/pages/contact/page2/page2.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_contact_contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./src/app/services/contact/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.apiurl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl;
    }
    ContactService.prototype.listContacts = function () {
        return this.http.get(this.apiurl + '/api/contacts');
    };
    ContactService.prototype.getContact = function (id) {
        return this.http.get(this.apiurl + '/api/contacts/' + id);
    };
    ContactService.prototype.createContact = function (contactObj) {
        return this.http.post(this.apiurl + '/api/contacts/create', contactObj);
    };
    ContactService.prototype.deleteContact = function (id) {
        return this.http.delete(this.apiurl + '/api/contacts/delete/' + id);
    };
    ContactService.prototype.updateContact = function (contactObj) {
        return this.http.put(this.apiurl + '/api/contacts/update', contactObj);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiurl: 'https://localhost'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map