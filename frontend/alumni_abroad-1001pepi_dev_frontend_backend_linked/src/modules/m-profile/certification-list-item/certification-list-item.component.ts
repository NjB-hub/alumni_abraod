import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification-list-item',
  templateUrl: './certification-list-item.component.html',
  styleUrls: ['./certification-list-item.component.scss']
})
export class CertificationListItemComponent implements OnInit {

  @Input() name : string = 'Responsive design';
  @Input() deliveryDate : string = 'July 2021';
  @Input() organization : string = 'Coursera';
  constructor() { }

  ngOnInit(): void {
  }

}
