import { Component, OnInit } from '@angular/core';
import Experience from '../../model/Experience';
import { RestService } from '../shared/service/rest.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  private experiences: Experience[];
  expanded: boolean = true;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService
      .getExperiences()
      .subscribe(data => this.experiences = data.map(experience => <Experience>experience));
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }
}
