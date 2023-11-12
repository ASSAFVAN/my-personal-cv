import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FormalEducationComponent } from './formal-education/formal-education.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PracticalExperienceComponent } from './practical-experience/practical-experience.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'formal-education', component: FormalEducationComponent },
  { path: 'parctical-experience', component: PracticalExperienceComponent },
  { path: 'contact-me', component: ContactMeComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
