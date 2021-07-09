import { Component, OnInit } from '@angular/core';
import { ICollectionHomepage } from '@collections/models/ICollection-homepage';
import { CollectionpageService } from '@collections/services/collectionpage.service';

@Component({
  selector: 'baf-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collectionsData: ICollectionHomepage;
  collapsableSection: boolean = false;

  constructor(private collectionPagesService: CollectionpageService) {
  }

  ngOnInit(): void {
    this.collectionPagesService.getCollectionPageData().subscribe({
      next: data => {
        this.collectionsData = data.description as ICollectionHomepage;
        console.log(this.collectionsData);
      }
    });

  }

  expandCollapseDetail(): void {
    this.collapsableSection = !this.collapsableSection;
  }


}
