import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-list-item',
  templateUrl: './experience-list-item.component.html',
  styleUrls: ['./experience-list-item.component.scss']
})
export class ExperienceListItemComponent implements OnInit {

  @Input() position : string = 'Developer';
  @Input() company : string = 'EAA';
  @Input() location : string = 'France';
  @Input() from : string = '2021';
  @Input() to : string = '2022';
  @Input() description : string = 'dsajj;knvk jfjd dafldkL D';
  constructor() { }

  ngOnInit(): void {
  }

}
