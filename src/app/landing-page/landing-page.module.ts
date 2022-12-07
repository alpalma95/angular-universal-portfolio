import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LandingPageComponent,
    WelcomeSectionComponent,
    ProjectsComponent,
    ContactFormComponent,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
  ],
})
export class LandingPageModule {}
