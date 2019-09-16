import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav, MatIconRegistry } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import { SidenavService } from './shared/service/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ SidenavService, MatSidenav ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public cookieLawSeen: boolean;

  @ViewChild('cookieLaw', { static: true }) cookieLawEl: any;

  constructor(
    public sidenavService: SidenavService,
    private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('fr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('fr');
    this.translate.onLangChange
      .subscribe(() => document.documentElement.lang = this.translate.currentLang);

    this.iconRegistry();
  }

  ngOnInit() {
    this.cookieLawSeen = this.cookieLawEl.cookieLawSeen;
  }

  private iconRegistry() {
    const icons: string[] = [ `angular`, `angularjs`, `analytics`, `accessibility`, `css`, `english`, `europe`, `facebook`, `france`,
      `html`, `ionic`, `javascript`, `linkedin`, `malte`, `nodejs`, `safe`, `sass`, `scrum`, `typescript`, `viadeo` ];

    icons.forEach(icon => this.matIconRegistry
      .addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/${icon}.svg`)));
  }
}
