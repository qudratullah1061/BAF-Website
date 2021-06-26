import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { StoriesComponent } from '@stories/components/stories/stories.component';



@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StoriesModule { }
