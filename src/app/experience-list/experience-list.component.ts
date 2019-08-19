import { Component } from '@angular/core';

import { experiences, Experience } from '../shared/constants/experiences.constants';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent {
  expanded: boolean = true;

  get experiences(): Experience[] {
    return experiences;
  }
}
