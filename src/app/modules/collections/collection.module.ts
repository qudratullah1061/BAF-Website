import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CollectionsComponent } from '@collections/components/collections/collections.component';
import { CollectionDetailComponent } from '@collections/components/detail/collection-detail.component';
import { collectionRoutes } from '@collections/collection-routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionDetailComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(collectionRoutes)
  ]
})
export class CollectionModule { }
