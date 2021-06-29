import { Component, OnInit } from '@angular/core';
import { ICollectionDetail } from '@collections/models/detail/ICollection-detail';
import { CollectionpageService } from '@collections/services/collectionpage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'baf-collection-details',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {

  collectionDetailData: ICollectionDetail;
  code:string;
  constructor(private collectionPagesService: CollectionpageService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get("code");
    this.collectionPagesService.getCollectionDetailPageData(this.code).subscribe({
      next: data => {
        this.collectionDetailData = data.description[0] as ICollectionDetail

        console.log(" Collection Detail Data Here", this.collectionDetailData);
      }

    })
  }

}
