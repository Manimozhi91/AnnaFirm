import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { MeetingComponent } from './meeting/meeting.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { ViewmeetingsComponent } from './viewmeetings/viewmeetings.component';
import { AddmeetingComponent } from './addmeeting/addmeeting.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    DashboardComponent,
    RegisterclientComponent,
    MeetingComponent,
    ViewmeetingsComponent,
    AddmeetingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
       MatFormFieldModule,
       MatDatepickerModule,
       MatNativeDateModule,
       MatInputModule,
       NgxMaterialTimepickerModule,
     ]

  ,
  exports: [
    MatButtonModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,

  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
