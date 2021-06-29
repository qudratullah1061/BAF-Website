import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from '@collections/components/collections/collections.component';
import { HomepageComponent } from '@homepage/components/homepage.component';
import { StoriesComponent } from './modules/stories/components/stories/stories.component';
import { AboutComponent } from './modules/about/components/about/about.component';
import { ContactComponent } from './modules/contact/components/contact/contact.component';
import { CollectionDetailsComponent } from '@collections/components/details/collection-details.component';


const routes: Routes = [
  { 'path': '', component: HomepageComponent },
  {'path': 'collections', component: CollectionsComponent},

  { path: 'details', component: CollectionDetailsComponent },
 
  

  { 'path': 'stories', component: StoriesComponent },

  { 'path': 'about', component: AboutComponent },
  { 'path': 'contact', component: ContactComponent },
  { 'path': '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
