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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarNavComponent } from './toolbar-nav/toolbar-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, 
  MatIconModule, MatListModule, MatTabsModule, MatMenuModule,
  MatSnackBarModule } from '@angular/material';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { SmoothieCreateComponent } from './smoothie-create/smoothie-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothiesComponent,
    SmoothieDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SmoothieSearchComponent,
    ToolbarNavComponent,
    TabLayoutComponent,
    SmoothieCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
