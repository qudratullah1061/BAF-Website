import { Component, OnInit } from '@angular/core';
import { Icontact } from '../../models/icontact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'baf-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactPageData: Icontact[]

  constructor(private contactPagesService: ContactService) { }

  ngOnInit(): void {
    this.contactPagesService.getContactPageData().subscribe({
      next: data => {
        this.contactPageData = data.description as Icontact[];
        console.log(this.contactPageData);
      }

    })
  }

}
