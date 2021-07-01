import { Component, OnInit } from '@angular/core';
import { IContact } from '@contact/models/iContact';
import { ContactService } from '@contact/services/contact.service';

@Component({
  selector: 'baf-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactPageData: IContact[];

  constructor(private contactPagesService: ContactService) { }

  ngOnInit(): void {
    this.contactPagesService.getContactPageData().subscribe({
      next: data => {

        this.contactPageData = data.description as IContact[];
        console.log(this.contactPageData);
      }

    })
  }

}
