import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-list-item',
  templateUrl: './notifications-list-item.component.html',
  styleUrls: ['./notifications-list-item.component.scss']
})
export class NotificationsListItemComponent implements OnInit {
  @Input() isRead:Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
