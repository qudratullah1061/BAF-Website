import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    'path': '',
    loadChildren: () => import('@homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    'path': 'collections',
    loadChildren: () => import('@collections/collection.module').then(m => m.CollectionModule)
  },
  {
    'path': 'collection',
    loadChildren: () => import('@collections/collection.module').then(m => m.CollectionModule)
  },
  {
    'path': 'about',
    loadChildren: () => import('@about/about.module').then(m => m.AboutModule)
  },
  {
    'path': 'contact',
    loadChildren: () => import('@contact/contact.module').then(m => m.ContactModule)
  },
  {
    'path': 'stories',
    loadChildren: () => import('@stories/stories.module').then(m => m.StoriesModule)
  },
  {
    'path': 'auth',
    loadChildren: () => import('@auth/auth.module').then(m => m.AuthModule)
  },
  { 'path': '404', component: PageNotFoundComponent },
  // { 'path': 'api/*' },
  { 'path': '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
