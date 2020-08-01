import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenav, MatIconRegistry } from '@angular/material';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';

import { SidenavService } from './shared/service/sidenav.service';
import { getHeaderByType, Header } from './shared/constants/header.constants';
import { getArticleByTemplate } from './shared/constants/blog.constants';

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
    private domSanitizer: DomSanitizer,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
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

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router)
      )
      .subscribe(() => {
        let header: Header;
        const urlArray = this.router.url.split('/');
        const finalUrl = urlArray[urlArray.length - 1].replace(/\?.*/gi, '');
        if (urlArray.length > 2) {
          const article = getArticleByTemplate(finalUrl);
          header = {
            title: article.title,
            imagePath: `https://www.joelchrabie.com/${article.imagePath}`,
            description: article.content,
            canonical: `https://www.joelchrabie.com/blog/${article.template}`
          };
        } else {
          header = getHeaderByType(finalUrl);
        }

        this.titleService.setTitle(`Joël CHRABIE | ${header.title}`);
        this.meta.updateTag({ name: 'title', content: `Joël CHRABIE | ${header.title}` });
        this.meta.updateTag({ name: 'image', content: header.imagePath });
        this.meta.updateTag({ name: 'description', content: header.description });

        document.getElementsByClassName('mat-drawer-content')[0].scrollTo(0, 0);
      });
  }


  private iconRegistry() {
    const icons: string[] = [ `angular`, `angularjs`, `analytics`, `accessibility`, `css`, `english`, `europe`, `facebook`, `france`,
      `html`, `ionic`, `javascript`, `linkedin`, `malte`, `nodejs`, `safe`, `sass`, `scrum`, `typescript`, `viadeo` ];

    icons.forEach(icon => this.matIconRegistry
      .addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/${icon}.svg`)));
  }
}
