import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  exports: [
    NumberIteratorPipe,
    PageNotFoundComponent
  ],
  providers:[]
})
export class SharedModule { }
