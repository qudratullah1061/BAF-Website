import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CollectionsComponent } from '@collections/components/collections/collections.component';
import { CollectionDetailComponent } from '@collections/components/detail/collection-detail.component';



@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionDetailComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CollectionModule { }
