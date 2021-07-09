import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CollectionsComponent } from '@collections/components/collections/collections.component';
import { CollectionDetailComponent } from '@collections/components/detail/collection-detail.component';
import { collectionRoutes } from '@collections/collection-routes';
import { RouterModule } from '@angular/router';
import { ProfileRouteActivatorService } from '@auth/guards/profile-route-activator.service';

@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionDetailComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(collectionRoutes)
  ],
  providers:[
    ProfileRouteActivatorService
  ]
})
export class CollectionModule { }
