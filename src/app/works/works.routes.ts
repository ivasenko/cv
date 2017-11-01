import {Routes} from "@angular/router";
import {WorksDetailComponent} from "./works-detail/works-detail.component";
import {DetailStartComponent} from "./detail-start/detail-start.component";

export const WORKS_ROUTES: Routes = [
  {path: '', component: DetailStartComponent},
  {path: ':id', component: WorksDetailComponent}
];
