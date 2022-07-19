import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-user-list',
  templateUrl: './result-user-list.component.html',
  styleUrls: ['./result-user-list.component.scss']
})
export class ResultUserListComponent implements OnInit {
  @Input() type : 'all'|'admin';
  constructor() { }

  ngOnInit(): void {
  }

}
