import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NumberIteratorPipe } from './pipes/number-iterator.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [


    NumberIteratorPipe,
        PageNotFoundComponent
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
