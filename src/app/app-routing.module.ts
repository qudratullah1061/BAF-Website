import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from '@collections/components/collections/collections.component';
import { HomepageComponent } from '@homepage/components/homepage.component';
import { StoriesComponent } from './modules/stories/components/stories/stories.component';


const routes: Routes = [
  { 'path': '', component: HomepageComponent },
  { 'path': 'collections', component: CollectionsComponent },
  { 'path': 'stories', component: StoriesComponent },
  { 'path': '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
