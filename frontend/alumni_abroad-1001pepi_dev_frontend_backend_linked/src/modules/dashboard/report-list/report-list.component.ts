import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  title: string = "All"
  typeList: "post"|"comment"|"profile"|"all" = "all"
  constructor() { }

  ngOnInit(): void {
  }

  onSortAll():void{
    this.title = "All";
    this.typeList = "all";
  }

  onSortProfile():void{
    this.title = "Profile";
    this.typeList = "profile";
  }

  onSortPost():void{
    this.title = "Post";
    this.typeList = "post";
  }

  onSortComment():void{
    this.title = "Comment";
    this.typeList = "comment";
  }
}
