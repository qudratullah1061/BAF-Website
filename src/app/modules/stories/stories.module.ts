import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { StoriesComponent } from '@stories/components/stories/stories.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { StoryService } from './services/story.service';
import { RouterModule } from '@angular/router';
import { storiesRoutes } from './stories-routes';



@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(storiesRoutes)
  ],
  providers:[
    StoryService
  ]
})
export class StoriesModule { }
