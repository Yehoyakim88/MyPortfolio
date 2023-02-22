import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent {
  public iconNames : string[] = 
  [
    'Angular', 
    'TypeScript', 
    'JavaScript', 
    'HTML', 
    'Firebase', 
    'GIT', 
    'CSS', 
    'Rest-Api', 
    'Scrum', 
    'Material design'
  ];

}
