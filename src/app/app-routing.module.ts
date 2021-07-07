import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from '@collections/components/collections/collections.component';
import { HomepageComponent } from '@homepage/components/homepage.component';
import { StoriesComponent } from './modules/stories/components/stories/stories.component';
import { AboutComponent } from './modules/about/components/about/about.component';
import { ContactComponent } from './modules/contact/components/contact/contact.component';
// import { CollectionDetailComponent } from '@collections/components/detail/collection-detail.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { RegisterComponent } from '@auth/components/register/register.component';
import { UserLoginComponent } from '@auth/components/user-login/user-login.component';


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
  {
    'path': 'auth',
    loadChildren: () => import('@auth/auth.module').then(m => m.AuthModule)
  },
  { 'path': '404', component: PageNotFoundComponent },
  { 'path': 'api/*', component: PageNotFoundComponent },
  { 'path': '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
