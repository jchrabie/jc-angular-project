import { Component} from '@angular/core';
import { SidenavService } from '../shared/service/sidenav.service';
import { MatSidenav } from '@angular/material';
import { ThemeService } from '../shared/service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public sidenavService: SidenavService,
    private themeService: ThemeService
  ) { }

  toggleTheme() {
    this.themeService.isDarkTheme() ? this.themeService.setLightTheme() : this.themeService.setDarkTheme();
  }
}
