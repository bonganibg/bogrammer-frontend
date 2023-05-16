import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ReviewerComponent } from './views/reviewer/reviewer.component';
import { StudentComponent } from './views/student/student.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'reviewer', component:ReviewerComponent},
  {path: 'student', component:StudentComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
