import { Component, OnInit } from '@angular/core';
import { IHomepage } from '@homepage/models/IHomepage';
import { HomepageService } from '@homepage/services/homepage.service';

@Component({
  selector: 'baf-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  loading: boolean = true;
  homepageData: IHomepage;


  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.homepageService.getHomepageData().subscribe({
      next: data => {
        // setTimeout(() => {
        this.loading = false;
        this.homepageData = data.description as IHomepage; console.log(this.homepageData);
        // }, 3000);
      }
    });

  }

}
