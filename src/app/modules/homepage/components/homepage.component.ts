import { Component, OnInit } from '@angular/core';
import { IHomepage } from '../models/IHomepage';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'baf-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  homepageData: IHomepage;


  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.homepageService.getHomepageData().subscribe({
      next: data => {
        this.homepageData = data.description as IHomepage; console.log(this.homepageData);
      }
    });

  }

}
