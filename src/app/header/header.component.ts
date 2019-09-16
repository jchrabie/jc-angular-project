import { Component} from '@angular/core';
import { SidenavService } from '../shared/service/sidenav.service';
import { MatSidenav } from '@angular/material';
import { ThemeService } from '../shared/service/theme.service';
import { AnalyticsService } from '../shared/service/analytics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public sidenavService: SidenavService,
    public analyticsService: AnalyticsService,
    private themeService: ThemeService
  ) { }

  toggleTheme() {
    this.themeService.isDarkTheme() ? this.themeService.setLightTheme() : this.themeService.setDarkTheme();
    this.analyticsService.emit('click', 'header', 'theme', this.themeService.isDarkTheme() ? 'dark' : 'light');
  }

  homeClick() {
    this.analyticsService.emit('click', 'header', 'homeNavigation', 'Home return');
  }

  hireClick() {
    this.analyticsService.emit('click', 'header', 'contactNavigation', 'Hiring');
  }
}
