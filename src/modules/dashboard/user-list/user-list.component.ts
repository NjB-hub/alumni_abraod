import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  title:string = "All";
  typeList: 'all'|'admin' = 'all';
  constructor() { }

  ngOnInit(): void {
  }

  onSortAll():void{
    this.title = "All";
    this.typeList = "all";
  }

  onSortAdmin():void{
    this.title = "Admins";
    this.typeList="admin";
  }
}
