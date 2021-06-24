import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from '@collections/components/collections/collections.component';
import { HomepageComponent } from '@homepage/components/homepage.component';


const routes: Routes = [
  {'path': '', component:HomepageComponent},
  {'path': 'collections', component:CollectionsComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
