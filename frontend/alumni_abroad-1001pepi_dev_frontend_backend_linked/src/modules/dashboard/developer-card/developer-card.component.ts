import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss']
})
export class DeveloperCardComponent implements OnInit {
  @Input() firstName:string='';
  @Input() username:string='';
  @Input() promo:string='';
  @Input() description:string='';
  @Input() github:string='';
  @Input() email:string='';
  @Input() linkedin:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
