import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberIteratorPipe } from './pipes/number-iterator.pipe';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    NumberIteratorPipe,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberIteratorPipe,
    RouterModule,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
