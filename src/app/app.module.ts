import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ContactComponent } from './contact/contact.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { SkillBoxComponent } from './skill-box/skill-box.component';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    MyProjectsComponent,
    ContactComponent,
    MySkillsComponent,
    SkillBoxComponent,
    ProjectBoxComponent,
    FooterComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule






  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
