import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { SmoothieDetailComponent } from './smoothie-detail/smoothie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SmoothieSearchComponent } from './smoothie-search/smoothie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothiesComponent,
    SmoothieDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SmoothieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
