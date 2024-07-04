import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InternshipsComponent } from './internships/internships.component';
import { ResponsiveDirective } from './directives/responsive.directive';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContactComponent,
    EducationComponent,
    PersonalInformationComponent,
    ProjectsComponent,
    SkillsComponent,
    InternshipsComponent,
    ResponsiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
