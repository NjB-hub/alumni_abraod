import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-stat-card',
  templateUrl: './generic-stat-card.component.html',
  styleUrls: ['./generic-stat-card.component.scss']
})
export class GenericStatCardComponent implements OnInit {
  @Input() type: 'traffic' | 'request' | 'report' | 'post' = 'traffic';
  @Input() amount:number = 12;
  @Input() description:string = "Users";
  color:string = '';
  constructor() { }

  ngOnInit(): void {
    switch(this.type){
      case 'traffic':
        
        this.color = 'primary'
        break;

      case 'request':
        this.color = 'success'
        break;
      case 'report':
        this.color = 'danger'
        break;

      case 'post':
        this.color = 'info'
        break;

    }
  }
}


