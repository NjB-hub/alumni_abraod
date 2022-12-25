import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit {
  educations: any[] = [{etablishment:'Lycee bilingue',location:'Cameroon', from:'2018', to:'2022', diploma:'baccalaureat C'}]
  constructor() { }

  ngOnInit(): void {
  }

}
