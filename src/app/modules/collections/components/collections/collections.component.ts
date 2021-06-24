import { Component, OnInit } from '@angular/core';
import { ICollectionHomepage } from '@collections/models/ICollection-homepage';
import { CollectionpageService } from '@collections/services/collectionpage.service';

@Component({
  selector: 'baf-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collectionData: ICollectionHomepage;
  collapsableSection: boolean = false;

  constructor(private collectionPage: CollectionpageService) {
  }


  ngOnInit(): void {
    this.collectionPage.getCollectionPageData().subscribe({
      next: data => {
        this.collectionData = data.description as ICollectionHomepage;
        console.log(this.collectionData);
      }
    });

  }

  expandCollapseDetail(): void {
    this.collapsableSection = !this.collapsableSection;
  }


}
