import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InViewPortServiceComponent } from './in-view-port-service/in-view-port-service.component';
import { InViewPort } from './in-view-port.service/in-view-port.service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    MyProjectsComponent,
    InViewPortServiceComponent,
    InViewPort.ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
