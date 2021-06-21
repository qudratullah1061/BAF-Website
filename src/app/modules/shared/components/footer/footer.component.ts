import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dateObj:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
