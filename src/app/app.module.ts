import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorksComponent } from './works/works.component';
import { WorksListComponent } from './works/works-list/works-list.component';
import { WorksItemComponent } from './works/works-item/works-item.component';
import { WorksDetailComponent } from './works/works-detail/works-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailStartComponent } from './works/detail-start/detail-start.component';
import { AboutService } from './about/about.service';
import { WorksService } from './works/works.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksComponent,
    WorksListComponent,
    WorksItemComponent,
    WorksDetailComponent,
    AboutComponent,
    ContactsComponent,
    DetailStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WorksService, AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
