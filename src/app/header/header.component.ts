import { Component, ViewChild, ElementRef} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'firebase';

import { SidenavService } from '../shared/service/sidenav.service';
import { ThemeService } from '../shared/service/theme.service';
import { AnalyticsService } from '../shared/service/analytics.service';
import { LoginComponent } from '../shared/components/login/login.component';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user: User;
  public isMobile: boolean;
  @ViewChild('menu', {static: true}) public menu: ElementRef;

  constructor(
    public sidenavService: SidenavService,
    public analyticsService: AnalyticsService,
    private themeService: ThemeService,
    public authService: AuthService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe('(max-width: 600px)')
      .subscribe(breakpoint => this.isMobile = breakpoint.matches);
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe();
  }

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
