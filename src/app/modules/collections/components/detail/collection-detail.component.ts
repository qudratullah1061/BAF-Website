import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICollectionDetail } from '@collections/models/detail/ICollection-detail';
import { CollectionpageService } from '@collections/services/collectionpage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'baf-collection-details',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {

  collectionDetailData: ICollectionDetail;
  code: any;
  is404: boolean = false;

  constructor(private collectionPagesService: CollectionpageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get("code");
    this.collectionPagesService.getCollectionDetailPageData(this.code).subscribe({
      next: data => {
        if (data.description.length > 0) {
          this.collectionDetailData = data.description[0] as ICollectionDetail
        } else {
          this.is404 = true;
        }
      }
    })
  }

}
