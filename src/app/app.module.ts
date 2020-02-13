import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'



// Components
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsCertificationsComponent } from './awards-certifications/awards-certifications.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Services Modules
import { ApplicantsService } from './_services/applicants.service';


//Angular Material Modules
import { 
  MatCardModule,
  MatProgressSpinnerModule 
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsCertificationsComponent,
    PortfolioComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [ApplicantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
