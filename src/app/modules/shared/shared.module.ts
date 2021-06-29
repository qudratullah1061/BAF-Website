import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NumberIteratorPipe } from './pipes/number-iterator.pipe';
@NgModule({
  declarations: [


    NumberIteratorPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RouterModule,
    NumberIteratorPipe
  ]
})
export class SharedModule { }
