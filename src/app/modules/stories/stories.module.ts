import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { StoriesComponent } from '@stories/components/stories/stories.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { StoryService } from './services/story.service';



@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
  ],
  providers:[
    StoryService
  ]
})
export class StoriesModule { }
