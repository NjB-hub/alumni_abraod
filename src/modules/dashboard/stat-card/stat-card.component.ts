import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})

export class StatCardComponent implements OnInit {
  @Input() type: 'traffic' | 'request' | 'report' | 'post';
  title:string = 'Users';
  amount:number = 123;
  icon:string="fas fa-user";
  color:string = 'bg-danger';
  link:string = "/dashboard/statistics"
  constructor() { }

  ngOnInit(): void {
    switch(this.type){
      case 'traffic':
        this.title = "Users";
        this.amount = 350.897;
        this.icon = "fas fa-user"
        this.color = 'bg-primary'
        this.link = "/dashboard/users"
        break;

      case 'request':
        this.title = "Sign up requests";
        this.amount = 350.897;
        this.icon = "fas fa-question-circle"
        this.color = 'bg-success'
        this.link = "/dashboard/signup-requests"
        break;

      case 'report':
        this.title = "Reports";
        this.amount = 350.8;
        this.icon = "fas fa-warning"
        this.color = 'bg-danger'
        this.link = "/dashboard/reports"
        break;

      case 'post':
        this.title = "Posts";
        this.amount = 350897;
        this.icon = "fas fa-newspaper"
        this.color = 'bg-info'
        this.link = "/dashboard/posts"
        break;

    }
  }

}
