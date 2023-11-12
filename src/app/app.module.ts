import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactMeModule } from './contact-me/contact-me.module';
import { FormalEducationModule } from './formal-education/formal-education.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { PracticalExperienceModule } from './practical-experience/practical-experience.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    FormalEducationModule,
    PracticalExperienceModule,
    ContactMeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
