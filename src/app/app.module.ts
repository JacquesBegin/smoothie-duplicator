import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmoothiesComponent } from './components/smoothies/smoothies.component';
import { SmoothieDetailComponent } from './components/smoothie-detail/smoothie-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SmoothieSearchComponent } from './components/smoothie-search/smoothie-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarNavComponent } from './components/toolbar-nav/toolbar-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, 
  MatIconModule, MatListModule, MatTabsModule, MatMenuModule,
  MatSnackBarModule, MatCardModule, MatChipsModule, MatDialogModule } from '@angular/material';
import { TabLayoutComponent } from './components/tab-layout/tab-layout.component';
import { SmoothieCreateComponent } from './components/smoothie-create/smoothie-create.component';
import { SmoothieCardComponent } from './components/smoothie-card/smoothie-card.component';
import { SmoothieCreateDialogComponent } from './components/smoothie-create-dialog/smoothie-create-dialog.component';

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
    SmoothieCreateComponent,
    SmoothieCardComponent,
    SmoothieCreateDialogComponent
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
    MatSnackBarModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule
  ],
  entryComponents: [
    SmoothieCreateDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
