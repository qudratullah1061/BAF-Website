import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { contactRoutes } from './contact-routes';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(contactRoutes)
  ]
})
export class ContactModule { }
