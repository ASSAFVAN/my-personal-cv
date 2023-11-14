import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { FormalEducationComponent } from './pages/formal-education/formal-education.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PracticalExperienceComponent } from './pages/practical-experience/practical-experience.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'formal-education', component: FormalEducationComponent },
  { path: 'practical-experience', component: PracticalExperienceComponent },
  { path: 'contact-me', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
