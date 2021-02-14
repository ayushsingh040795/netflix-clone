import { RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PagesComponent,
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ]
})
export class PagesModule { }
