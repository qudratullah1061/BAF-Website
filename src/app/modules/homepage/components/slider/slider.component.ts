import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISliderImages } from '../../models/ISlider-images';
@Component({
  selector: 'baf-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() sliderImages:ISliderImages[];

  constructor() { }

  ngOnInit(): void {
  }

}
