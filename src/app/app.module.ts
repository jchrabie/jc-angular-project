import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AnalyticsService } from './service/analytics.service';
import { SidenavService } from './service/sidenav.service';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';

const route = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    SidenavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule],
  providers: [
    AnalyticsService,
    SidenavService,
    { provide: LOCALE_ID, useValue: 'fr' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
