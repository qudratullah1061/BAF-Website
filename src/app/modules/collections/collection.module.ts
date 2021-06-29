import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionDetailsComponent } from './components/details/collection-details.component';



@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CollectionModule { }
