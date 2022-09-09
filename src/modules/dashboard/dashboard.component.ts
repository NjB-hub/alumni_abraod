import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bool:Boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggle():void{
    
    document.body.classList.toggle('sb-sidenav-toggled');
  }

}
