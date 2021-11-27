import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss']
})
export class NavHomeComponent implements OnInit {

  @Input() isVisible:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  signOut() {
    if(confirm("Are you sure to log out ? ")) {
      console.log("Implement delete functionality here");
    }
  }

}
