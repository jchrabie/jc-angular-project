import { Component, ViewChild, ElementRef, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';

import { SidenavService } from '../../service/sidenav.service';
import { ThemeService } from '../../service/theme.service';
import { AnalyticsService } from '../../service/analytics.service';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit, AfterViewInit {
  public isMobile: boolean;
  public isScrolled: boolean = true;
  public isDarkTheme: boolean;
  private destroy$: Subject<void> = new Subject();

  @ViewChild('menu', { static: true }) public menu: ElementRef;

  constructor(
    public sidenavService: SidenavService,
    public analyticsService: AnalyticsService,
    private themeService: ThemeService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe('(max-width: 600px)')
      .subscribe((breakpoint) => (this.isMobile = breakpoint.matches));

    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe((e: Event) => console.log(this.getYPosition(e)));
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

  ngAfterViewInit() {
    const content = document.querySelector('.mat-sidenav-content');
    fromEvent(content, 'scroll')
      .pipe(
        takeUntil(this.destroy$),
        throttleTime(10),
        map(() => content.scrollTop)
      )
      .subscribe((n) => {
        this.isScrolled = !n || n < 50;

        [
          ...Array.from(document.getElementsByClassName('before')),
          ...Array.from(document.getElementsByClassName('after')),
        ].forEach((e) => {
          if (this.isScrolled) {
            e.classList.remove('hide');

            return;
          }

          e.classList.add('hide');
        });
      });
  }

  toggleTheme() {
    this.themeService.isDarkTheme() ? this.themeService.setLightTheme() : this.themeService.setDarkTheme();
    this.isDarkTheme = this.themeService.isDarkTheme();
    this.analyticsService.emit('click', 'header', 'theme', this.themeService.isDarkTheme() ? 'dark' : 'light');
  }

  homeClick() {
    this.analyticsService.emit('click', 'header', 'homeNavigation', 'Home return');
  }

  hireClick() {
    this.analyticsService.emit('click', 'header', 'contactNavigation', 'Hiring');
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
