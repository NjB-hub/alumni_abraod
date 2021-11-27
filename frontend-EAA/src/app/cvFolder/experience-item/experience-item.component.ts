import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {
  position:string = "Project manager";
  company:string = "Orange Cameroon";
  location:string = "Yaounde";
  duration:string = "2018-2021";
  constructor() { }

  ngOnInit(): void {
  }

}
