import {Component, OnDestroy, OnInit} from '@angular/core';
import {Work} from '../work';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {WorksService} from '../works.service';

@Component({
  selector: 'cv-works-detail',
  templateUrl: './works-detail.component.html',
  styleUrls: ['./works-detail.component.scss']
})
export class WorksDetailComponent implements OnInit, OnDestroy {
  selectedWork: Work;
  private workIndex = 1;
  private subscription: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private worksService: WorksService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.workIndex = params['id'];
        this.selectedWork = this.worksService.getWork(this.workIndex);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
