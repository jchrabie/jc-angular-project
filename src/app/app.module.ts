import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { CookieLawModule } from 'angular2-cookie-law';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience-list/experience/experience.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';

import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';

const route = [
  { path: 'skills', component: SkillsComponent },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact-routing.module').then(m => m.ContactRoutingModule)
  },
  { path: 'experiences', component: ExperienceListComponent },
  { path: '', component: HomeComponent },
  { path: 'pdf', redirectTo: 'assets/CV.pdf'},
  {
    path: 'blog/:template',
    loadChildren: () => import('./blog/blog-routing.module').then(m => m.BlogRoutingModule)
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    ExperienceListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'jc-angular-project' }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ShareButtonsModule,
    BlogModule,
    ContactModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FontAwesomeModule,
    CookieLawModule,
    SharedModule,
    RouterModule.forRoot(route, { useHash: false, scrollPositionRestoration: 'top' }),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
