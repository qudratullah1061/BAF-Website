import { Component, OnInit } from '@angular/core';
import { ICollectionDetailsFocalItems } from '@collections/models/details/icollection-details-focal-items';
import { ICollectionDetailPage } from '@collections/models/details/iCollection-detailsPage';
import { CollectionpageService } from '@collections/services/collectionpage.service';

@Component({
  selector: 'baf-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss']
})
export class CollectionDetailsComponent implements OnInit {

  collectionDetailData: ICollectionDetailPage

  constructor(private getCollectionDetailPageService: CollectionpageService) { }

  ngOnInit(): void {

    alert('dsfaf');


    this.getCollectionDetailPageService.getCollectionDetailPageData().subscribe({
      next: data => {
        this.collectionDetailData = data.description as ICollectionDetailPage

        console.log(" Collection Detail Data Here", this.collectionDetailData);
      }

    })
  }

}
