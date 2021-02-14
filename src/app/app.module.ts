import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module' ;
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './layouts/pages/pages.component';
import { ProfilesComponent } from './layouts/pages/profiles/profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
