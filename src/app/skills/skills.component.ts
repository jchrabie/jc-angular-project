import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  chartdata: boolean = false;

  // Chart
  view: number[] = [500, 300];
  countryData = [
    {
      'name': 'France',
      'value': 8940000
    },
    {
      'name': 'Lebanon',
      'value': 8940000
    },
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    }
  ];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {

  }

  ngOnInit() {}

  onSelect(event) {
    console.log(event);
  }
}
