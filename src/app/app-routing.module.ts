import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from '@collections/components/collections/collections.component';
import { HomepageComponent } from '@homepage/components/homepage.component';
import { StoriesComponent } from './modules/stories/components/stories/stories.component';
import { AboutComponent } from './modules/about/components/about/about.component';
import { ContactComponent } from './modules/contact/components/contact/contact.component';
import { CollectionDetailComponent } from '@collections/components/detail/collection-detail.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { RegisterComponent } from '@auth/components/register/register.component';
import { UserLoginComponent } from '@auth/components/user-login/user-login.component';


const routes: Routes = [
  { 'path': '', component: HomepageComponent },
  { 'path': 'collections', component: CollectionsComponent },
  { 'path': 'collection/:code', component: CollectionDetailComponent },
  { 'path': 'stories', component: StoriesComponent },
  { 'path': 'about', component: AboutComponent },
  { 'path': 'contact', component: ContactComponent },
  { 'path': 'register', component: RegisterComponent },
  { 'path': 'login', component: UserLoginComponent },
  { 'path': '404', component: PageNotFoundComponent },
  { 'path': 'api/*', component: PageNotFoundComponent },
  { 'path': '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
