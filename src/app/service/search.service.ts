import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  filter: string[] = [];

  constructor() { }

  filteredSearch(): string[] {
    return this.filter;
  }

  setFilter(therm: string): void {
    this.filter.push(therm);
  }

  deleteFilter(therm: string): void {
    const index = this.filter.indexOf(therm);

    if (index >= 0) {
      this.filter.splice(index, 1);
    }
  }
}
