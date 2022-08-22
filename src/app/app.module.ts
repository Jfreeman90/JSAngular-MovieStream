import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';    //needed for fetching data
import { FormsModule } from '@angular/forms';               //needed for forms
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from  './material.module';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './components/contact/contact.component';
import { FilmpageComponent } from './components/filmpage/filmpage.component';
import { FilmvideoComponent } from './components/filmvideo/filmvideo.component';
import { FilmdetailsComponent } from './components/filmdetails/filmdetails.component';
import { ChatmessagesComponent } from './components/chatmessages/chatmessages.component';
import { ChatsubmitComponent } from './components/chatsubmit/chatsubmit.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Top10Component } from './components/top10/top10.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { SearchComponent } from './components/search/search.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FilmitemComponent } from './components/filmitem/filmitem.component';
import { SearchitemComponent } from './components/searchitem/searchitem.component';
import { ScheduleitemComponent } from './components/scheduleitem/scheduleitem.component';
import { ForgotpasswordpageComponent } from './components/forgotpasswordpage/forgotpasswordpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ContactComponent,
    FilmpageComponent,
    FilmvideoComponent,
    FilmdetailsComponent,
    ChatmessagesComponent,
    ChatsubmitComponent,
    HomepageComponent,
    Top10Component,
    RecommendedComponent,
    SearchComponent,
    ScheduleComponent,
    FilmitemComponent,
    SearchitemComponent,
    ScheduleitemComponent,
    ForgotpasswordpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MyMaterialModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'contactus', component: ContactComponent},
      {path: 'register', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'login/reset', component: ForgotpasswordpageComponent},
      {path: 'film', component: FilmpageComponent},
      {path: 'home', component: HomepageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
