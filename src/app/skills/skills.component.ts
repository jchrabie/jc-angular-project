import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private charts = [
    {
      title: 'Technologie',
      countryData: [
        {
          'name': 'Javascript',
          'value': 60
        },
        {
          'name': 'TypeScript',
          'value': 40
        }
      ],
      colorScheme: {
        domain: ['#00838F', '#00BCD4']
      },
      label: 'toto'
    },
    {
      title: 'Framework',
      countryData: [
        {
          'name': 'AngularJS',
          'value': 40
        },
        {
          'name': 'Angular',
          'value': 40
        },
        {
          'name': 'Ionic',
          'value': 20
        }
      ],
      colorScheme: {
        domain: ['#00838F', '#00BCD4', '#80DEEA']
      }
    },
    {
      countryData: [
        {
          'name': 'Javascript',
          'value': 60
        },
        {
          'name': 'TypeScript',
          'value': 40
        }
      ],
      colorScheme: {
        domain: ['#00bcd4']
      }
    },
    {
      countryData: [
        {
          'name': 'Javascript',
          'value': 60
        },
        {
          'name': 'TypeScript',
          'value': 40
        }
      ],
      colorScheme: {
        domain: ['#00bcd4']
      }
    }
  ];

  constructor() {

  }

  ngOnInit() {}

  onSelect(event) {
    console.log(event);
  }
}
