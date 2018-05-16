import { Component, OnInit, Input } from '@angular/core';
import Experience from '../../model/Experience';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() public experience: Experience;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  getExperience(): Experience {
    return this.experience;
  }

  isSearched(chips: string): boolean {
    return this.searchService.filteredSearch().includes(chips);
  }

  selectChips(chips: string): void {
    if (this.searchService.filteredSearch().includes(chips)) {
      this.searchService.deleteFilter(chips);
      return;
    }

    this.searchService.setFilter(chips);
  }
}
