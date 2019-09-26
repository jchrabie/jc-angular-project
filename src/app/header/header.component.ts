import { Component} from '@angular/core';
import { SidenavService } from '../shared/service/sidenav.service';
import { ThemeService } from '../shared/service/theme.service';
import { AnalyticsService } from '../shared/service/analytics.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../shared/components/login/login.component';
import { AuthService } from '../shared/service/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user: User;

  constructor(
    public sidenavService: SidenavService,
    public analyticsService: AnalyticsService,
    private themeService: ThemeService,
    public authService: AuthService,
    public dialog: MatDialog
  ) {}

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
