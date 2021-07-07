
import { Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionDetailComponent } from './components/detail/collection-detail.component';

export const collectionRoutes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  },
  {
    path: ':code',
    component: CollectionDetailComponent
  }
];
