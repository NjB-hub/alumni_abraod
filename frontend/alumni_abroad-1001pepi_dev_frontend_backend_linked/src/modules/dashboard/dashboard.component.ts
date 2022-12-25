import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LogOutDialogComponent } from '../core/log-out-dialog/log-out-dialog.component';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bool:Boolean = true;
  isLoading:boolean = false;
  constructor(private router:Router,public dialog:MatDialog, private _location: Location) { }

  ngOnInit(): void {
  }

  sideBarToggle():void{
    
    document.body.classList.toggle('sb-sidenav-toggled');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogOutDialogComponent,{width: '500px'});
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        console.log('log out')
        this.router.navigate(['']);
      }
    })

  }

  onBackClicked() {
    this._location.back();
  }

}
