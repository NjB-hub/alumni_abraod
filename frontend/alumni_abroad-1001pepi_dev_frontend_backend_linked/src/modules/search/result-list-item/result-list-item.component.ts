import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./result-list-item.component.scss']
})
export class ResultListItemComponent implements OnInit {
  @Input() name:string
  @Input() position:string
  constructor() { }

  ngOnInit(): void {
  }

}
