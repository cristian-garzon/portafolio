import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FullPageComponent } from './components/full-page/full-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutMeComponent,
    WhoAmIComponent,
    ProjectsComponent,
    CurriculumComponent,
    NavbarComponent,
    FullPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AngularFullpageModule,
    FontAwesomeModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
