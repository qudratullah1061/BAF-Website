import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomepageComponent } from './components/homepage.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageService } from './services/homepage.service';



@NgModule({
  declarations: [
    HomepageComponent,
    SliderComponent,
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [HomepageService],
})
export class HomepageModule { }
