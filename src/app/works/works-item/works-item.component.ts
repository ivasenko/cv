import {Component, Input, OnInit} from '@angular/core';
import {Work} from "../work";

@Component({
  selector: 'cv-works-item',
  templateUrl: './works-item.component.html',
  styleUrls: ['./works-item.component.scss']
})
export class WorksItemComponent implements OnInit {
  @Input() work: Work;
  @Input() workId: number;


  constructor() { }

  ngOnInit() {
  }

}
