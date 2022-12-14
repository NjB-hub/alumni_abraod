import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';


@Component({
  selector: 'app-request-list-item',
  templateUrl: './request-list-item.component.html',
  styleUrls: ['./request-list-item.component.scss']
})
export class RequestListItemComponent implements OnInit {
  @Input() name:string = "John DOE";
  @Input() email:string = "johndoe@gmail.com";
  @Input() dept: "GI" | "GC" | "GELE" | "GM" | "GTEL" | "GIND" = "GI";
  @Input() year:number = 2023;


  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RequestDialogComponent,{width: '600px', data:{
      name:this.name,
      email : this.email,
      dept:this.dept,
      year: this.year
    }});
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
      }
    })

  }
}
