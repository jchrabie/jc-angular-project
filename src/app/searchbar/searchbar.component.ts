import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../service/rest.service';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;
  separatorKeysCodes = [ENTER, COMMA];
  searchCtrl = new FormControl();
  filteredSearches: Observable<any[]>;
  chipsList = [];
  allChips = [];

  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(public restService: RestService, private searchService: SearchService) {
    this.restService.getChips().subscribe(chips => {
      this.chipsList = chips;
      this.allChips = this.chipsList;

      this.filteredSearches = this.searchCtrl.valueChanges.pipe(
        startWith(null),
        map(search => search ? this.filter(search) : this.chipsList.slice())
      );
    });
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our search
    if ((value || '').trim()) {
      const existingChips = this.chipsList.find(chips => chips.match(new RegExp(value, 'i')));

      if (!existingChips) {
        return;
      }

      this.filter(existingChips);
      this.searchService.setFilter(existingChips);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(search: string): void {
    const index = this.searchService.filteredSearch().indexOf(search);

    if (index >= 0) {
      this.chipsList.push(search);
      this.searchService.deleteFilter(search);
    }
  }

  filter(name: string = '') {
    this.chipsList = this.chipsList.filter(search => !search.match(new RegExp(`^${name}$`)));
    return this.chipsList.filter(search => search.match(new RegExp(name, 'i')));
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.searchService.setFilter(event.option.viewValue);

    this.searchInput.nativeElement.value = '';
  }
}
