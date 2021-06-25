import { Component, OnInit } from '@angular/core';
import { IAbout } from '@about/models/IAbout';
import { AboutService } from '@about/services/about.service';

@Component({
  selector: 'baf-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutData:IAbout[];

  constructor(private aboutPageService:AboutService) { }

  ngOnInit(): void {

    this.aboutPageService.getAboutPageData().subscribe({
      next:data => {this.aboutData = data.description as IAbout[]
      console.log(this.aboutData)
      }
    })
  }

}
