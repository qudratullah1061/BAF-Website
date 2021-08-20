import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberIteratorPipe } from './pipes/number-iterator.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalsComponent } from './components/modals/modals.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    NumberIteratorPipe,
    PageNotFoundComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      enableHtml:true,
      progressBar:true,
      progressAnimation:'decreasing',
      onActivateTick:true,
      easeTime:300,
      preventDuplicates:true
    }), // ToastrModule added
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [
    NumberIteratorPipe,
    PageNotFoundComponent,
    BsDropdownModule,
    ModalModule,
    AlertModule
  ],
  providers:[]
})
export class SharedModule { }
