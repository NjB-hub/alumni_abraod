import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-circle',
  templateUrl: './number-circle.component.html',
  styleUrls: ['./number-circle.component.scss']
})
export class NumberCircleComponent implements OnInit {
  
  @Input() content:number = 34;
  @Input() inNav:boolean;

  constructor() { }

  ngOnInit(): void {
    
  }

}
