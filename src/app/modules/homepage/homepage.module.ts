import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomepageComponent } from '@homepage/components/homepage.component';
import { SliderComponent } from '@homepage/components/slider/slider.component';
import { FeaturedComponent } from '@homepage/components/featured/featured.component';
import { HomepageService } from '@homepage/services/homepage.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { homepageRoutes } from '@homepage/homepage-routes';
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
    ReactiveFormsModule,
    RouterModule.forChild(homepageRoutes),
    SharedModule
  ],
  providers: [HomepageService],
})
export class HomepageModule { }
