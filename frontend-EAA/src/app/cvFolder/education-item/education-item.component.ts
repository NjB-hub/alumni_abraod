import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit {
  diploma: string="Bachelor degree";
  speciality: string="Engineering Sciences";
  institution: string="University of Yaounde";
  activeYears: string="2011-2018";
  constructor() { }

  ngOnInit(): void {
  }

}
