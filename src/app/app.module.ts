import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReviewerComponent } from './views/reviewer/reviewer.component';
import { StudentComponent } from './views/student/student.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BacklogTableComponent } from './views/reviewer/components/backlog-table/backlog-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewerComponent,
    StudentComponent,
    LandingPageComponent,
    BacklogTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
