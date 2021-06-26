import { Component, OnInit } from '@angular/core';
import { IStories } from '@stories/models/IStories';
import { StoryService } from '@stories/services/story.service';

@Component({
  selector: 'baf-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  storiesData: IStories[];

  constructor(private storyPagesService: StoryService) { }

  ngOnInit(): void {

    this.storyPagesService.getStoriesPageData().subscribe({
      next: data => {
        this.storiesData = data.description as IStories[];
        console.log(this.storiesData);
      }



    })
  }

}
