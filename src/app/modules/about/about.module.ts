import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '@about/components/about/about.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { aboutRoutes } from '@about/about-routes';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(aboutRoutes)
  ]
})
export class AboutModule { }
