import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  experiences: any[] = [{position:'Developer', company:'Orange', location:'Cameroon', from:'2018', to:'2022', description:'this is a good job'}]
  constructor() { }

  ngOnInit(): void {
  }

}
