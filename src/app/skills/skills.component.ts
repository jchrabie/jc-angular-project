import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  chartdata: boolean = false;

  // Chart
  view: number[] = [300, 500];
  countryData = [
    {
      'name': 'Javascript',
      'value': 60
    },
    {
      'name': 'TypeScript',
      'value': 40
    }
  ];
  colorScheme = {
    domain: ['#00bcd4']
  };

  constructor() {

  }

  ngOnInit() {}

  onSelect(event) {
    console.log(event);
  }
}
