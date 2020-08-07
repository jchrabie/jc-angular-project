import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';

import { CookieLawModule } from 'angular2-cookie-law';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { SkillsModule } from './skills/skills.module';
import { ExperienceListModule } from './experience-list/experience-list.module';
import { HomeModule } from './home/home.module';

const route = [
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills-routing.module').then((m) => m.SkillsRoutingModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact-routing.module').then((m) => m.ContactRoutingModule),
  },
  {
    path: 'experiences',
    loadChildren: () =>
      import('./experience-list/experience-list-routing.module').then((m) => m.ExperienceListRoutingModule),
  },
  { path: '', loadChildren: () => import('./home/home-routing.module').then((m) => m.HomeRoutingModule) },
  { path: 'pdf', redirectTo: 'assets/CV.pdf' },
  {
    path: 'blog/:template',
    loadChildren: () => import('./blog/blog-routing.module').then((m) => m.BlogRoutingModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'jc-angular-project' }),
    BlogModule,
    MaterialModule,
    ContactModule,
    SkillsModule,
    ExperienceListModule,
    HomeModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FontAwesomeModule,
    CookieLawModule,
    SharedModule,
    RouterModule.forRoot(route, { useHash: false, scrollPositionRestoration: 'top' }),
  ],
  exports: [RouterModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
