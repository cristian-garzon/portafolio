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



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutMeComponent,
    WhoAmIComponent,
    ProjectsComponent,
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
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
