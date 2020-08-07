import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

import { SearchService } from '../../shared/service/search.service';
import { AnalyticsService } from '../../shared/service/analytics.service';
import { Experience } from '../../shared/constants/experiences.constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() public experience: Experience;
  @Input() public step: number;
  @ViewChild('panel', { static: true }) panel: MatExpansionPanel;

  constructor(
    private searchService: SearchService,
    private analyticsService: AnalyticsService,
  ) { }

  ngOnInit() {
  }

  isSearched(chips: string): boolean {
    return this.searchService.filteredSearch().includes(chips);
  }

  togglePanel(): void {
    this.analyticsService.emit('click', 'experiences', this.experience.name, this.panel.expanded ? 'Panel Expanded' : 'Panel Closed');
  }

  selectChips(chips: string): void {
    if (this.searchService.filteredSearch().includes(chips)) {
      this.searchService.deleteFilter(chips);
      return;
    }

    this.searchService.setFilter(chips);
  }

  showMore(expName: string) {
    this.analyticsService.emit('click', 'experiences', 'showMore', expName);
  }
}
