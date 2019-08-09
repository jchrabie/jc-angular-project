import { Pipe, PipeTransform } from '@angular/core';
import { SearchService } from '../service/search.service';

@Pipe({
  name: 'filteredSearch',
  pure: false
})
export class FilteredSearchPipe implements PipeTransform {
  constructor(private searchService: SearchService) { }

  transform(values: any, args?: any): any {
    const searches = this.searchService.filteredSearch();
    if (searches.length) {
      values = values.filter(value => {
        return searches.find(therm => {
          return value.chips.includes(therm);
        });
      });
    }

    return values;
  }

}
