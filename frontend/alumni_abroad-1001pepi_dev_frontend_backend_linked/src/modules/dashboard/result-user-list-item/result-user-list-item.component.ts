import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-user-list-item',
  templateUrl: './result-user-list-item.component.html',
  styleUrls: ['./result-user-list-item.component.scss']
})
export class ResultUserListItemComponent implements OnInit {
  nomUser:string = "John DOE";
  profession:string = "Student"
  constructor() { }

  ngOnInit(): void {
  }

}
