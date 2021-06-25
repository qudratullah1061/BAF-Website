import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
