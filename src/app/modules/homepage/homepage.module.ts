import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomepageComponent } from './components/homepage.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HomepageService } from './services/homepage.service';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent,
    SliderComponent,
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    SharedModule
  ],
  providers: [HomepageService],
})
export class HomepageModule { }
