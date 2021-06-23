import { Component, Input, OnInit } from '@angular/core';
import { IHomepageFeaturedItems } from '@homepage/models/IHomepage-featured-items';

@Component({
  selector: 'baf-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  @Input() homePageFeaturedItems: IHomepageFeaturedItems[];

  constructor() { }

  ngOnInit(): void {
  }

}
