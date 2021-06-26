import { Component, OnInit } from '@angular/core';
import { IStories } from '@stories/models/IStories';
import { StoryService } from '@stories/services/story.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'baf-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  storiesData: IStories[];
  filteredStoriesData:IStories[];
  recordsPerPage:number = 8;
  constructor(private storyPagesService: StoryService) { }

  ngOnInit(): void {
    this.storyPagesService.getStoriesPageData().subscribe({
      next: data => {
        this.storiesData = data.description as IStories[];
        this.filteredStoriesData = this.storiesData.slice(0, this.recordsPerPage);
        console.log(this.filteredStoriesData);
      }
    });
  }

  pageChanged(event: PageChangedEvent): void {
    console.log(event);
    const startItem = (event.page - 1) * this.recordsPerPage;
    const endItem = event.page * this.recordsPerPage;
    this.filteredStoriesData = this.storiesData.slice(startItem, endItem);
  }

}
