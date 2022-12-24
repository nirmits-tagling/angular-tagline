import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import { ServiceComponent } from './service/service.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { MainSectionComponent } from './main-section/main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadernavbarComponent,
    ServiceComponent,
    ExperienceInfoComponent,
    ExperienceSectionComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
