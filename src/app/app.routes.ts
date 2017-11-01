import {Routes} from "@angular/router";
import {WorksComponent} from "./works/works.component";
import {WORKS_ROUTES} from "./works/works.routes";
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutComponent} from "./about/about.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'works', component: WorksComponent, children: WORKS_ROUTES},
  {path: 'contacts', component: ContactsComponent}

];
