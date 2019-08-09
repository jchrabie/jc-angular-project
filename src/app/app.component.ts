import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav, MatIconRegistry } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import 'hammerjs';
import { AnalyticsService } from './shared/service/analytics.service';
import { SidenavService } from './shared/service/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ SidenavService, MatSidenav ]
})
export class AppComponent implements AfterViewInit {
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
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

    this.router.events.subscribe(event => {
      analyticsService.setInitialInformations(event);
    });

    this.matIconRegistry
    .addSvgIcon(
      `angular`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/angular.svg`)
    )
    .addSvgIcon(
      `angularjs`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/angularjs.svg`)
    )
    .addSvgIcon(
      `analytics`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/analytics.svg`)
    )
    .addSvgIcon(
      `accessibility`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/accessibility.svg`)
    )
    .addSvgIcon(
      `css`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/css.svg`)
    )
    .addSvgIcon(
      `europe`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/europe.svg`)
    )
    .addSvgIcon(
      `html`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/html.svg`)
    )
    .addSvgIcon(
      `ionic`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/ionic.svg`)
    )
    .addSvgIcon(
      `javascript`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/javascript.svg`)
    )
    .addSvgIcon(
      `nodejs`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/nodejs.svg`)
    )
    .addSvgIcon(
      `safe`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/safe.svg`)
    )
    .addSvgIcon(
      `sass`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/sass.svg`)
    )
    .addSvgIcon(
      `scrum`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/scrum.svg`)
    )
    .addSvgIcon(
      `typescript`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/typescript.svg`)
    );
  }

  ngAfterViewInit() {
    setTimeout(() => Array.from(document.getElementsByClassName('badge'))
      .forEach((el: any) => el.onclick = () => window.open(`https://twitter.com/hashtag/${el.textContent}`, '_blank')));
  }
}
