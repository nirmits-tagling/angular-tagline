import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import { ServiceComponent } from './service/service.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BackendTechnologiesComponent } from './backend-technologies/backend-technologies.component';
import { FrontendTechnologiesComponent } from './frontend-technologies/frontend-technologies.component';
import { ClienteleComponent } from './clientele/clientele.component';
import { ReviewBoxesComponent } from './review-boxes/review-boxes.component';
import { AwardComponent } from './award/award.component';
import { BlogComponent } from './blog/blog.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadernavbarComponent,
    ServiceComponent,
    ExperienceInfoComponent,
    ExperienceSectionComponent,
    MainSectionComponent,
    TechnologiesComponent,
    BackendTechnologiesComponent,
    FrontendTechnologiesComponent,
    ClienteleComponent,
    ReviewBoxesComponent,
    AwardComponent,
    BlogComponent,
    GlobalPresenceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
