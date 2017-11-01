import { Component, OnInit } from '@angular/core';
import {Work} from "../work";
import {WorksService} from "../works.service";

@Component({
  selector: 'cv-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit {
  works: Work[] = [];

  constructor(private worksService: WorksService) { }

  ngOnInit() {
    this.works = this.worksService.getWorks();
  }

}
