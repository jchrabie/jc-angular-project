import { Component } from '@angular/core';

import { skills, Skill } from '../shared/constants/skills.constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  get skills(): Skill[] {
    return skills;
  }
}
