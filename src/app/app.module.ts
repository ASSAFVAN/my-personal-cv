import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactMeModule } from './pages/contact-me/contact-me.module';
import { FormalEducationModule } from './pages/formal-education/formal-education.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { PracticalExperienceModule } from './pages/practical-experience/practical-experience.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
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
