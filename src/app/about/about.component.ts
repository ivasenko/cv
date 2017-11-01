import { Component, OnInit } from '@angular/core';
import {AboutService} from "./about.service";

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  person = {};

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getPersonData()
      .subscribe((data) => {
        this.person = data;
        console.log(this.person);
      });
  };
}
