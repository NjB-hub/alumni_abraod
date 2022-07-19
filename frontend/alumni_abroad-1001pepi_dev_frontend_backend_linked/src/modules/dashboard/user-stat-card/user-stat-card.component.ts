import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stat-card',
  templateUrl: './user-stat-card.component.html',
  styleUrls: ['./user-stat-card.component.scss']
})
export class UserStatCardComponent implements OnInit {
  @Input() amount:number = 12;
  @Input() description:string = "Users";
  constructor() { }

  ngOnInit(): void {
  }

}
