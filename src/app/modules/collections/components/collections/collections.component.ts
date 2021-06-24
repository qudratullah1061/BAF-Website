import { Component, OnInit } from '@angular/core';
import { CollectionpageService } from '@collections/services/collectionpage.service';

@Component({
  selector: 'baf-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collectionData;

  constructor(private collectionPage:CollectionpageService) { }

  ngOnInit(): void {

    this.collectionPage.getCollectionPageData().subscribe({
      next:data => {this.collectionData = data;
        console.log(this.collectionData)
      
      }
    })

  }


}
