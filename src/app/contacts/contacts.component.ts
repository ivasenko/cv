import { Component, OnInit } from '@angular/core';
import {AboutService} from "../about/about.service";

@Component({
  selector: 'cv-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  person = {};


  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getPersonData()
      .subscribe((data) => {
        this.person = data;
        console.log(this.person);
      });
  }

}
