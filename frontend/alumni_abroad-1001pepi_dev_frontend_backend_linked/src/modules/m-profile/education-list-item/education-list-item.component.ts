import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-list-item',
  templateUrl: './education-list-item.component.html',
  styleUrls: ['./education-list-item.component.scss']
})
export class EducationListItemComponent implements OnInit {

  @Input() etablishment : string = '';
  @Input() location : string = 'France';
  @Input() from : string = '2021';
  @Input() to : string = '2022';
  @Input() diploma : string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
