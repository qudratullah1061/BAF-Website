import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomepageComponent } from './components/homepage.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedComponent } from './components/featured/featured.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SliderComponent,
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
  ]
})
export class HomepageModule { }
