import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAPIBase } from '@shared/models/IApi-base';

@Component({
  selector: 'baf-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  authError: string = "";
  authSuccess: string = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  verificationStatus: IAPIBase;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
        next: data => {
          var verificationStatus = data.verificationStatus;
          this.authError = "";
          this.authSuccess = "";
          if (!verificationStatus.error) {
            this.authSuccess = verificationStatus.description;
          } else {
            this.authError = verificationStatus.description;
          }
        }
      });
  }
}
