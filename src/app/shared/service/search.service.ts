import { Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.service';

@Injectable()
export class SearchService {
  filter: string[] = [];

  constructor(private analyticsService: AnalyticsService) { }

  filteredSearch(): string[] {
    return this.filter;
  }

  setFilter(therm: string): void {
    this.filter.push(therm);
    this.analyticsService.emit('Experiences', 'Chips Search', 'chips', therm);
  }

  deleteFilter(therm: string): void {
    const index = this.filter.indexOf(therm);

    if (index >= 0) {
      this.filter.splice(index, 1);
    }
  }
}
