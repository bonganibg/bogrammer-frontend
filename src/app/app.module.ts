import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ReviewerComponent } from './views/reviewer/reviewer.component';
import { StudentComponent } from './views/student/student.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BacklogTableComponent } from './views/reviewer/components/backlog-table/backlog-table.component';
import { StudentDashboardTableComponent } from './views/student/components/student-dashboard-table/student-dashboard-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewerComponent,
    StudentComponent,
    LandingPageComponent,
    BacklogTableComponent,
    StudentDashboardTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
