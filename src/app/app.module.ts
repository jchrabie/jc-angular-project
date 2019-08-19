import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';

import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';

const route = [
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experiences', component: ExperienceListComponent },
  { path: '', component: HomeComponent },
  { path: 'pdf', redirectTo: 'assets/CV.pdf'},
  {
      path: 'blog',
      loadChildren: './blog/blog-routing.module#BlogRoutingModule'
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    SearchbarComponent,
    ExperienceListComponent,
    SpeedDialFabComponent
  ],
  imports: [
    BlogModule,
    NgxChartsModule,
    RouterModule.forRoot(route),
    SharedModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
