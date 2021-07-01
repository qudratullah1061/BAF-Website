import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberIteratorPipe } from './pipes/number-iterator.pipe';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginFormComponent } from './components/login/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormService } from './services/login-form.service';

@NgModule({
  declarations: [
    NumberIteratorPipe,
    PageNotFoundComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    NumberIteratorPipe,
    RouterModule,
    PageNotFoundComponent,
    LoginFormComponent
  ],
  providers:[LoginFormService]
})
export class SharedModule { }
