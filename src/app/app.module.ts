import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { CardContentComponent } from './card-content/card-content.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormControl } from '@angular/forms';
import { ExperienceListComponent } from './experience-list/experience-list.component';

import { AnalyticsService } from './service/analytics.service';
import { SidenavService } from './service/sidenav.service';
import { RestService } from './service/rest.service';
import { SearchService } from './service/search.service';

import { FilteredSearchPipe } from './filtered-search.pipe';

const route = [
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experiences', component: ExperienceListComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    CardComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    CardContentComponent,
    SearchbarComponent,
    ExperienceListComponent,
    FilteredSearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgxChartsModule,
    RouterModule.forRoot(route),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [ HttpClient ]
        }
    })
  ],
  exports: [RouterModule],
  providers: [
    AnalyticsService,
    SidenavService,
    RestService,
    SearchService,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
