import { Component } from '@angular/core';
import Card from '../../model/Card';
import { RestService } from '../shared/service/rest.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public skills: Card[] = [];
  constructor(
    private restService: RestService
  ) {
    this.restService.getSkills()
      .subscribe(skills => this.skills = skills);
  }
}
